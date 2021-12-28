<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center vs-con-loading__container" id="page-login">
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
                  <h4 class="mb-4">Login</h4>
                  <p>Welcome back, please login to your account.</p>
                </div>

                <form @submit.prevent="signin">
                    <div>
                    <vs-input
                        @blur="getOpenShift()"
                        :danger="errors.has('user_id')"
                        :danger-text="errors.first('user_id')"
                        name="user_id"
                        type="text"
                        icon-no-border
                        icon="icon icon-user"
                        icon-pack="feather"
                        label-placeholder="User ID"
                        v-model="vUserID"
                        class="w-full" v-validate="'required'"/>

                    <vs-input
                        :danger="errors.has('password')"
                        :danger-text="errors.first('password')"
                        @keyup.enter="handleLogin"
                        type="password"
                        name="password"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Password"
                        v-model="vPassword"
                        class="w-full mt-6" v-validate="'required'"/>
                    <!-- <span class="error-text text-danger" v-show="errors.has('account')">{{ errors.first('account') }}</span> -->

                    <div class="flex flex-wrap justify-between my-5">
                    <div v-if="serverError">
                        <span style="color:red">{{ serverError.invalid }}</span>
                    </div>
                        <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox> -->
                        <!-- <router-link to="">Forgot Password?</router-link> -->
                    </div>
                    <!-- <vs-button type="border">Register</vs-button> -->
                    <vs-row class="mt-6" vs-type="flex" vs-justify="space-between">
                        <vs-col vs-lg="5" vs-xs="5">
                            <vs-button :disabled="btnLoginDisabled" @click.prevent="handleLogin" @keyup.enter="handleLogin" class="float-center">Login</vs-button>
                        </vs-col>
                        <vs-col vs-lg="6" vs-xs="6" vs-type="flex" vs-justify="flex-end" vs-align="center">
                            <label for="shift" class="mr-3 ">Shift</label>
                            <v-select :disabled="shiftDisabled" id="shift" :clearable="false" :reduce="value => value.shift" label="shift" class="md:w-2/3 w-full height150" :options="lookupShifts" v-model="vShift" v-validate="'required'" name="shift"></v-select>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-1" vs-type="flex" vs-justify="flex-end">
                        <span class="loading-shift" v-if="gettingShiftID">Getting Shift ID</span>
                    </vs-row>
                    <span class="error-text text-danger" v-show="errors.has('shift')">{{ errors.first('shift') }}</span>

                    <vs-divider></vs-divider>
                    <vs-row><span>User ID: demo</span></vs-row>
                    <vs-row><span> Pass: 123123 </span></vs-row>
                    <!-- <vs-row><span> Version: {{version}} </span></vs-row> -->
                    <div v-if="false" class="social-login-buttons flex flex-wrap items-center mt-4">

                        <!-- facebook -->
                        <div class="bg-facebook pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="text-white h-4 w-4 svg-inline--fa fa-facebook-f fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path fill="currentColor" d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"></path></svg>
                        </div>

                        <!-- TWITTER -->
                        <div class="bg-twitter pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="text-white h-4 w-4 svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </div>

                        <!-- GOOGLE -->
                        <div class="bg-google pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="text-white h-4 w-4 svg-inline--fa fa-google fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        </div>

                        <!-- GITHUB -->
                        <div class="bg-github pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" class="text-white h-4 w-4 svg-inline--fa fa-github-alt fa-w-15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
                        </div>
                    </div>
                    </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
    <Dialog @event="signin" ref="dialog"/>
  </div>
</template>

<script>
import $request from '@/utils/request.js';
import Dialog from '@/views/pages/components/DialogSecond.vue';
// import Nibbler from '@/utils/nibble.js';
// let base64a = new Nibbler({
//     dataBits: 8,
//     codeBits: 6,
//     keyString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
//     pad: '='
// });
	export default {
        name: 'Signin',
        components:{
            Dialog
        },
		props: {
			dataSuccessMessage: {
				type: String,
			}
		},
		data() {
			return {
                isValidEmail: false,
                isValidPassword: false,
				vUserID: '',
                vPassword: '',
                vShift: '',
                lookupShifts: [],
                shiftDisabled: false,
				serverError: '',
                successMessage: this.dataSuccessMessage,
                btnLoginDisabled: true,
                gettingShiftID: false,
                inputUser: '',
                version: process.env.VUE_APP_VERSION,
			}
		},
		methods: {
            handleLogin(){
                this.cekLoginOtherDevice()
                // this.signin()
            },

            getVersion(){
                console.log(this.version);
            },

			signin() {
                this.$validator.validateAll().then((result)=>{
                let encryptPassword = CryptoJS.AES.encrypt(JSON.stringify(this.vPassword), this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString()
                // let encryptPassword = base64a.encode(this.vPassword);
                    if(result){
                        this.btnLoginDisabled= true
                         if(this.isValidEmail == false && this.isValidPassword == false){
                            this.$vs.loading({container:'#page-login',scale:this.global.scaleLoadingMainLayout});
                            this.$store.dispatch('login', {
                                user_id: this.vUserID,
                                password: encryptPassword,
                                shift: this.vShift
                            })
                            .then(
                            response => {
                                this.$store.state.userSettingUserGroup.userAccessIDLogin = this.vUserID
                                this.$router.push({ name: 'home' })
                            }).catch(error=>{
                                this.btnLoginDisabled= false
                                this.serverError = this.$store.state.auth.errors;
                                this.$vs.loading.close('#page-login>.con-vs-loading');
                            })
                        }
                    }
                });
            },
            cekLoginOtherDevice(){
                this.$validator.validateAll().then((result)=>{
                let encryptPassword = CryptoJS.AES.encrypt(JSON.stringify(this.vPassword), this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString()
                // let encryptPassword = Base64. .encode(this.vPassword);
                    if(result){
                        this.btnLoginDisabled= true
                         if(this.isValidEmail == false && this.isValidPassword == false){
                            this.$vs.loading({container:'#page-login',scale:this.global.scaleLoadingMainLayout});
                            let params = {
                                user_id: this.vUserID,
                                password: encryptPassword
                            }
                            $request.post('cek-login',params)
                                .then(response=>{
                                    if(response.data == 0){
                                        this.signin()
                                    }else{
                                        this.$refs.dialog.title = 'Login';
                                        this.$refs.dialog.text = this.$t('message.loggedInOtherDevice');
                                        this.$refs.dialog.acceptText = this.$t('button.ok');
                                        this.$refs.dialog.cancelText = this.$t('button.cancel');
                                        this.$refs.dialog.showCancelButton = true;
                                        this.$refs.dialog.showDialog = true;
                                        this.$vs.loading.close('#page-login>.con-vs-loading');
                                        this.btnLoginDisabled= false
                                    }
                                }).catch(error=>{
                                    this.btnLoginDisabled= false
                                    this.serverError ={ invalid: 'User ID/Password Invalid'}
                                    this.$vs.loading.close('#page-login>.con-vs-loading');
                                })
                        }
                    }
                });
            },

            getWorkingShift(){
                 $request.get('/shift/working-shift').then((response)=> {
                     let data = response.data
                     this.lookupShifts = data
                     for (let index = 0; index < data.length; index++) {
                         if(data[index].start_time <= this.loginTime && data[index].end_time >= this.loginTime){
                            this.vShift = data[index].shift;
                         }
                     }
                 })
             },
             getOpenShift(){
                 if(this.vUserID){
                    this.gettingShiftID = true;
                        this.btnLoginDisabled= true;
                        $request.get(`/shift/open-shift?user_id=${this.vUserID}`).then((response)=>{
                            let data = response.data
                            this.btnLoginDisabled= false;
                            if(data){
                                this.vShift = data;
                                this.shiftDisabled = true;
                            }else{
                                this.shiftDisabled = false;
                            }
                            this.gettingShiftID = false;
                        })
                    }
             },

        },
        computed:{
            loginTime(){
                let today = new Date();
                let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                return time;
            },
            isAuth(){
                return this.$store.getters.isAuth;
            }
        },
        created(){
            if(this.isAuth){
                this.$router.push({ name : 'home'});
                return
            }else{
                document.title = 'Cakrasoft Cloud System | Login';
            }
            this.getWorkingShift();
            this.getVersion();
        },
        // watch: {
        //     inputUser(value){

        //     }
        // }
	}
</script>
<style scope lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
  .vs__dropdown-menu {
      min-width: 0;
  }

  .loading-shift:after {
  content: ' .';
  animation: dots 1s steps(5, end) infinite;}

    @keyframes dots {
    0%, 20% {
        color: rgba(0,0,0,0);
        text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);}
    40% {
        color: black;
        text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);}
    60% {
        text-shadow:
        .25em 0 0 black,
        .5em 0 0 rgba(0,0,0,0);}
    80%, 100% {
        text-shadow:
        .25em 0 0 black,
        .5em 0 0 black;}
    }
}
</style>
