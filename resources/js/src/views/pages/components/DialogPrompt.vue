<template>
    <div id="dialog_prompt">
        <vs-prompt :id="idPromptValue"  buttons-hidden :active.sync="activeDialog" :class="{'width-500p' : width == 500, 'width-600p' : width == 600, 'width-80' : width == 80, 'width-800p' : width == 800, 'form_deposit_charge two_column' : paymentForm, 'editor-user-group dialog-body' : userGroupForm, 'custom-dialog-prompt': true}" type="confirm" :title="title">
            <div class="popup-body pl-1 pr-1 vs-con-loading__container">
                <slot v-if="scrollOff" name="body"></slot>
                <!-- <component v-else :is="scrollbarTag" class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings"> -->
                <VuePerfectScrollbar v-else class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                        <slot name="body"></slot>
                </VuePerfectScrollbar>
                <!-- </component> -->
            </div>
            <footer class="footer" >
                <vs-row>
                    <vs-col vs-justify="flex-end" class="w-full flex mt-2">
                        <vs-button v-if="button4" :id="idButton4" class="vs-con-loading__container ml-2 button-accept4" :disabled="buttonDisabled4" :color="buttonsColor4" :icon="iconButton4" @click="$emit('button4')">
                            {{ textButton4 || $t('button.save') }}
                        </vs-button>
                        <vs-button v-if="button3" :id="idButton3" class="vs-con-loading__container ml-2 button-accept3" :disabled="buttonDisabled3" :color="buttonsColor3" :icon="iconButton3" @click="$emit('button3')">
                            {{ textButton3 || $t('button.save') }}
                        </vs-button>
                        <vs-button v-if="button2" :id="idButton2" class="vs-con-loading__container ml-2 button-accept2" :disabled="buttonDisabled2" :color="buttonsColor2" :icon="iconButton2" @click="$emit('button2')">
                            {{ textButton2 || $t('button.save') }}
                        </vs-button>
                        <vs-button v-if="button1" :id="idButton1" class="vs-con-loading__container ml-2" :disabled="buttonDisabled1" :color="buttonsColor1" :icon="iconButton1" @click="$emit('button1')">
                            {{ textButton1 || $t('button.save') }}
                        </vs-button>
                        <slot name="button-close">
                            <vs-button v-if="!buttonCloseHidden" class="ml-2" :color="global.buttonColor.close" icon="close" @click="$emit('close',false);">{{$t('button.close')}}</vs-button>
                        </slot>
                    </vs-col>
                </vs-row>
            </footer>
        </vs-prompt>
    </div>
</template>
<script>
import { addDialogCloseButton } from '@/utils/general';

export default {
    props: {
        idPrompt: {
            type: String,
            default: 'prompt-dialog',
        },
        title: {
            type: String,
            default: 'Dialog',
        },
        active: {
            type: Boolean,
            required: true,
        },
        userGroupForm: Boolean,
        scrollOff: Boolean,
        paymentForm: Boolean,
        child: Number,
        buttonsColor1: String,
        buttonsColor2: String,
        buttonsColor3: String,
        buttonsColor4: String,
        button1: Boolean,
        button2: Boolean,
        button3: Boolean,
        button4: Boolean,
        textButton1: String,
        textButton2: String,
        textButton3: String,
        textButton4: String,
        iconButton1: {
            type: String,
            default: 'save',
        },
        iconButton2: {
            type: String,
            default: 'save',
        },
        iconButton3: {
            type: String,
            default: 'save',
        },
        iconButton4: {
            type: String,
            default: 'save',
        },
        idButton1: String,
        idButton2: String,
        idButton3: String,
        idButton4: String,
        buttonDisabled1: Boolean,
        buttonDisabled2: Boolean,
        buttonDisabled3: Boolean,
        buttonDisabled4: Boolean,
        buttonCloseHidden: Boolean,
        width: [Number, String],
    },

    data() {
        return {
            activeDialog: false,
            idPromptValue: 'prompt-dialog--1',
            zIndex: 0,
        };
    },

    methods: {
        addZIndex() {
            const classList = document.getElementsByClassName('con-vs-dialog');
            if (classList.length > 0 && this.idPromptValue !== 'prompt-dialog') {
                const count = classList.length;
                const idElement = document.getElementById(`prompt-dialog--${count}`);
                if (idElement) {
                    const zIndexDefaultChild = idElement.style.zIndex;

                    const zIndex = parseInt(zIndexDefaultChild) + 1;
                    const newEl = document.getElementById(`prompt-dialog--${count}`);
                    if (!isNaN(zIndex)) {
                        newEl.style.zIndex = zIndex;
                    } else {
                        newEl.style.zIndex = 55000 + count;
                    }
                }
            } else if(this.idPromptValue === 'prompt-dialog') {
                const mainElement = document.getElementById('prompt-dialog');
                mainElement.style.zIndex = 55000;
            }
        },
    },
    watch: {
        active() {
            this.activeDialog = this.active;
            const idDefault = document.getElementById('prompt-dialog');
            const classList = document.getElementsByClassName('con-vs-dialog');
            if (this.active && !this.buttonCloseHidden) {
                this.idPromptValue = this.idPrompt || 'prompt-dialog';
                if (idDefault) {
                    if (classList.length > 0) {
                        const count = classList.length;
                        this.idPromptValue = `prompt-dialog--${count + 1}`;
                    }
                }
                this.$nextTick(() => {
                    addDialogCloseButton(this, this.idPromptValue, 'activeDialog');
                });
            }
            
            if (this.active) {
                this.$nextTick(() => {
                    this.addZIndex();
                });
            }
        },
        activeDialog() {
            const { body } = document;
            if (!this.activeDialog) {
                this.$emit('close', false);

                this.$nextTick(() => {
                    const classList = document.getElementsByClassName('con-vs-dialog');
                    // show scroll when modal inactive
                    if (classList.length === 1) {
                        body.style.overflow = '';
                        body.style.margin = '';
                        body.style.margin = '';
                    }
                });
            } else {
                // hide scroll when modal active
                body.style.overflow = 'hidden';
                body.style.margin = 0;
                body.style.height = '100%';
            }
        },
    },
    mounted() {
        this.idPromptValue = this.idPrompt;
    },
    computed: {
        scrollbarTag() { return this.$store.getters.scrollbarTag; },
    },
};
</script>
