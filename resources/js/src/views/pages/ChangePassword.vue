<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="change-password">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Change Password</h4>
                </div>

                <div>
                  <vs-input
                      type="password"
                      name="current password"
                      icon-no-border
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="Current Password"
                      v-validate="'required'"
                      v-model="password.current_password"
                      class="w-full mt-6" />
                      <span class="error-text text-danger" v-show="errors.has('current password') || dbErrors ">{{ errors.first('current password') || dbErrors.current_password | toString}}</span>

                 <vs-input
                      type="password"
                      name="password"
                      ref="password"
                      icon-no-border
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="New Password"
                      v-validate="'required|min:6'"
                      v-model="password.new_password"
                      class="w-full mt-6" />
                      <span class="error-text text-danger" v-show="errors.has('password') || dbErrors">{{ errors.first('password') || dbErrors.new_password | toString}}</span>
                 <vs-input
                      type="password"
                      name="confirm password"
                      icon-no-border
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="Confirm Password"
                      v-model="password.confirm_password"
                      v-validate="'required|confirmed:password'"
                      data-vv-as="password"
                      class="w-full mt-6"/>
                      <span class="error-text text-danger" v-show="errors.has('confirm password') || dbErrors">{{ errors.first('confirm password') || dbErrors.confirm_password | toString}}</span>
                    <div class="mt-6">
                        <vs-button type="border" @click="$router.go(-1)">Cancel</vs-button>
                        <vs-button @click.prevent="handleChangePassword()" @keyup.enter="handleChangePassword()" class="float-right">Change Password</vs-button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>

    <vs-prompt type="confirm" buttons-hidden title="Information" :active.sync="dialog">
        <div>
            <span> Password has successfuly changed </span>
        </div>
        <vs-row class="mt-6" vs-type="flex" vs-justify="flex-end">
            <vs-button @click="logout(); dialog= false" color="danger">OK</vs-button>
        </vs-row>
    </vs-prompt>

  </div>
</template>

<script>
import UserSettingResource from '@/api/tools/user-setting/userSetting';
const userSettingResource = new UserSettingResource;
export default{
  data() {
    return {
        password:{
            current_password: "",
            new_password: "",
            confirm_password: "",
        },
        dialog: false,
        dbErrors: {}
    }
  },
  methods:{
      handleChangePassword(){
            this.$validator.validateAll().then(async (result)=>{
                if(result){
                    let encryptCurrentPassword = CryptoJS.AES.encrypt(this.password.current_password, this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString()
                    let encryptNewPassword = CryptoJS.AES.encrypt(this.password.new_password, this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString()
                    let encryptConfirmPassword = CryptoJS.AES.encrypt(this.password.confirm_password, this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString()
                    let params={
                        current_password : encryptCurrentPassword,
                        new_password: encryptNewPassword,
                        confirm_password: encryptConfirmPassword
                    }
                    try{
                        this.dbErrors= {};
                        this.$vs.loading({container: ('#change-password'),scale:this.scaleLoadingLayout})
                        let { data } = await userSettingResource.changePassword(params);
                        this.$vs.loading.close('#change-password>.con-vs-loading')
                        this.dialog = true;
                        // this.successDialog()
                    }catch(error){
                        this.$vs.loading.close('#change-password>.con-vs-loading')
                        let message = error.response.data.error
                        this.dbErrors = message == undefined ? '' : message;
                        // this.errorDialog(message)
                    }
                }
            })
        },

      errorDialog(message){
        let text = message ? message : 'error';
        this.$vs.dialog({
            color: 'danger',
            title: 'information',
            text: text,
            acceptText: 'Ok',
        });
    },

    successDialog() {
        let text = 'Password has successfuly changed';
        this.$vs.dialog({
            color: 'danger',
            title: 'information',
            text: text,
            acceptText: 'Ok',
            cancel:()=>{
                this.logout();
            },
            accept: ()=>{
                this.logout();
            }
        });
    },
    logout(){
        this.$vs.loading({container: ('#change-password'),scale:this.scaleLoadingLayout})
        this.$store.dispatch('logout',true);

    },
  },

    computed:{
        isAuth(){
            return this.$store.getters.isAuth;
        }
    },
    created(){
        if(!this.isAuth){
            this.$router.push({ name : 'login'});
        }
    }
}
</script>

<style lang="scss">
#change-password {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
  .error-text{
      font-size: 0.7rem;
  }
}
</style>
