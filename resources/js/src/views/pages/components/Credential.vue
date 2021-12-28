<template>
<div>
    <vs-prompt id="credential" type="confirm" buttons-hidden style="z-index:530000" class="width-450p" :active.sync="mActiveCredential" :title="title || $t('credential.title.credential')">
        <div class="container">
            <div v-if="showReason == false" id="credential">
                {{ $t('credential.enterCredential') }}
                <div>
                    <vs-input id="userX" icon="person" type="text" class="w-full" name="user" v-validate="'required'" :label-placeholder="$t('credential.id')" v-model="value.user" data-vv-scope="credential"/>
                    <span class="error-text text-danger" v-show="errors.has('credential.user')">{{ errors.first('credential.user')}}</span>
                </div>
                <div>
                    <vs-input id="passwordX" icon="lock" type="password" @keyup.enter="isCredential ? checkSpecialAccess() : unauthorizedDialog()" class="w-full" name="password" v-validate="'required'" :label-placeholder="$t('credential.password')" v-model="value.pass" data-vv-scope="credential"/>
                    <span class="error-text text-danger" v-show="errors.has('credential.password')">{{ errors.first('credential.password')}}</span>
                </div>
                <span class="error-text text-danger" v-show="dbErrors">{{ dbErrors | toString }}</span>
            </div>
            <div v-if="showReason">
                {{ $t('credential.pleaseInputReason') }}
                <vs-input id="reasonX" class="w-full" label-placeholder="Reason" @keyup.enter="acceptReason()" v-model="value.reason" v-validate="'required'" name="reason" data-vv-scope="reason"/>
                <span class="error-text text-danger" v-show="errors.has('reason.reason')">{{ errors.first('reason.reason')}}</span>
            </div>
        </div>
         <vs-row class="mt-6 footer" vs-type="flex" vs-justify="flex-end">
            <vs-button :disabled="btnDisabled" icon='check' id="btn-accept" class="vs-con-loading__container mr-2" @click="!showReason ? checkSpecialAccess() : acceptReason()">{{ $t('button.accept') }}</vs-button>
            <vs-button :color="global.buttonColor.close" icon="close" class="btn-close" @click="mActiveCredential = false; closedCredential()">{{ $t('button.close') }}</vs-button>
         </vs-row>
    </vs-prompt>
</div>
</template>
<script>
import SpecialAccessResource from '@/api/specialAccess.js';
import $dialog from '@/utils/dialog';
import { addDialogCloseButton } from '@/utils/general'

const specialAccessResource = new SpecialAccessResource();
export default {
    props: {
        value:{
            type: Object,
            required: true,
        },
        specialAccessType: {
            type: Number,
            required: true,
        },
        activeCredential: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        isCredential: {
            type: Boolean,
            required: true,
        },
        isReason: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            mActiveCredential: false,
            dbErrors: null,
            showReason: false,
            btnDisabled: false,
        };
    },
    methods: {
        async checkSpecialAccess() {
            const encryptPassword = CryptoJS.AES.encrypt(this.value.pass, this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString();
            const encryptAccessType = CryptoJS.AES.encrypt(this.specialAccessType.toString(), this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString();
            const params = {
                user_id: this.value.user,
                password: encryptPassword,
                specialAccessType: encryptAccessType,
                systemCode: this.global.constProgramVariable.defaultSystemCode,
            };
            this.$validator.validateAll('credential').then(async (result) => {
                if (result) {
                    this.$vs.loading({ container: '#btn-accept', scale: this.global.scaleLoadingButton });
                    try {
                        this.btnDisabled = true;
                        const { data } = await specialAccessResource.checkSpecialAccess(params);
                        this.btnDisabled = false;
                        if (data === true) {
                            if (this.isReason) {
                                this.showReason = true;
                                this.$nextTick(() => { document.getElementById('reasonX').focus(); });
                            } else {
                                this.mActiveCredential = false;
                                this.$emit('acceptCredential');
                            }
                        } else {
                            this.mActiveCredential = false;
                            this.closedCredential();
                            this.unauthorizedDialog();
                        }
                        this.$vs.loading.close('#btn-accept>.con-vs-loading');
                    } catch (error) {
                        this.btnDisabled = false;
                        this.mActiveCredential = false;
                        this.closedCredential();
                        this.unauthorizedDialog();
                    }
                }
            });
        },

        unauthorizedDialog() {
            $dialog.informationError(this.$t('credential.unauthorizedText'));
        },

        // execute on failed and close credential
        closedCredential() {
            this.$emit('closedCredential');
        },

        showCredential() {
            this.btnDisabled = false;
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
            this.dbErrors = null;
        },

        acceptReason() {
            this.$validator.validateAll('reason').then((result) => {
                if (result) {
                    this.mActiveCredential = false;
                    this.$emit('acceptReason');
                }
            });
        },
    },

    watch: {
        value(newVal) {
            this.$emit('input', this.value);
        },
        mActiveCredential(val) {
            this.$emit('update:active-credential', this.mActiveCredential);
        },
        activeCredential() {
            if (this.activeCredential) {
                this.showCredential();
                if (this.isCredential) {
                    this.$nextTick(() => {
                        const elUser = document.getElementById('userX');
                        if (elUser != null || elUser != undefined) {
                            elUser.focus();
                        }
                        addDialogCloseButton(this, 'credential', 'mActiveCredential');
                    });
                }
            }
            this.showReason = !this.isCredential;
            this.mActiveCredential = this.activeCredential;
        },

    },
    computed: {
        userValidation() {
            return (this.value.user.length > 0 && this.value.pass.length > 0);
        },
    },
};
</script>
<style scoped>
.container span{
    font-size: 0.7rem;
}
</style>
