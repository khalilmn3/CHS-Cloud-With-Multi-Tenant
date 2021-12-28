<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<div>
  <div class="layout--main" id="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'app-page': isAppPage}]">
    <the-customizer
      v-if                    = "!disableCustomizer"
      :footerType             = "footerType"
      :hideScrollToTop        = "hideScrollToTop"
      :navbarType             = "navbarType"
      :navbarColor            = "navbarColor"
      :routerTransition       = "routerTransition"
      @toggleHideScrollToTop  = "toggleHideScrollToTop"
      @updateFooter           = "updateFooter"
      @updateNavbar           = "updateNavbar"
      @updateNavbarColor      = "updateNavbarColor"
      @updateRouterTransition = "updateRouterTransition" />

    <v-nav-menu
      :navMenuItems = "navMenuItems"
      :logo         = "navMenuLogo"
      title         = "Cakrasoft"
      parent        = ".layout--main" />

    <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
      <div id="content-overlay" />

    <!-- Navbar -->
    <template v-if="mainLayoutType === 'horizontal' && windowWidth >= 1200">
      <the-navbar-horizontal
        :navbarType= "navbarType"
        :logo= "navMenuLogo"
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]" />

      <div style="height: 62px" v-if="navbarType === 'static'"></div>

      <h-nav-menu
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]"
        :navMenuItems="navMenuItems" />
    </template>

    <template v-else>
      <the-navbar-vertical
        :navbarColor="navbarColor"
        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]" />
    </template>
    <!-- /Navbar -->

      <div class="content-wrapper">

        <div class="router-view">
          <div class="router-content">

            <transition :name="routerTransition">

              <div v-if="$route.meta.breadcrumb || $route.meta.pageTitle" class="router-header flex flex-wrap items-center mb-6">
                <div
                  class="content-area__heading"
                  :class="{'pr-4 border-0 md:border-r border-solid border-grey-light' : $route.meta.breadcrumb}">
                  <h2 class="mb-1">{{ routeTitle }}</h2>
                </div>

                <!-- BREADCRUMB -->
                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" :route="$route" />

                <!-- DROPDOWN -->
                <!-- <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
                  <vs-button radius icon="icon-settings" icon-pack="feather" />

                  <vs-dropdown-menu class="w-32">
                    <vs-dropdown-item>
                      <div @click="$router.push('/pages/profile').catch(() => {})" class="flex items-center">
                        <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Profile</span>
                      </div>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <div @click="$router.push('/apps/todo').catch(() => {})" class="flex items-center">
                        <feather-icon icon="CheckSquareIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Tasks</span>
                      </div>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <div @click="$router.push('/apps/email').catch(() => {})" class="flex items-center">
                        <feather-icon icon="MailIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Inbox</span>
                      </div>
                    </vs-dropdown-item>
                  </vs-dropdown-menu>

                </vs-dropdown> -->

              </div>
            </transition>

            <div class="content-area__content">

              <back-to-top bottom="5%" visibleoffset="500" v-if="!hideScrollToTop">
                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top" />
              </back-to-top>

              <transition :name="routerTransition" mode="out-in">
                <router-view ref='router' @changeRouteTitle="changeRouteTitle"></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div>

    </div>
    <the-footer :auditDate="auditDate" />
  </div>
  
    <Dialog @event=logout ref="dialog"/>
</div>
</template>


<script>

import $request            from '@/utils/request.js';
import Dialog              from '@/views/pages/components/DialogSecond.vue';
import BackToTop           from 'vue-backtotop'
import HNavMenu            from "@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue"
import navMenuItems        from "@/layouts/components/vertical-nav-menu/navMenuItems.js"
import TheCustomizer       from "@/layouts/components/customizer/TheCustomizer.vue"
import TheNavbarHorizontal from '@/layouts/components/navbar/TheNavbarHorizontal.vue'
import TheNavbarVertical   from '@/layouts/components/navbar/TheNavbarVertical.vue'
import TheFooter           from '@/layouts/components/TheFooter.vue'
import themeConfig         from '@/../themeConfig.js'
import VNavMenu            from '@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'

export default {
  components: {
    Dialog,
    BackToTop,
    HNavMenu,
    TheCustomizer,
    TheFooter,
    TheNavbarHorizontal,
    TheNavbarVertical,
    VNavMenu
  },
  data() {
    return {
      disableCustomizer : themeConfig.disableCustomizer,
      disableThemeTour  : themeConfig.disableThemeTour,
      footerType        : themeConfig.footerType  || 'static',
      hideScrollToTop   : themeConfig.hideScrollToTop,
      isNavbarDark      : false,
      navbarColor       : themeConfig.navbarColor || '#fff',
      navbarType        : themeConfig.navbarType  || 'floating',
      navMenuItems      : navMenuItems,
      navMenuLogo       : require('@assets/images/logo/logo.png'),
      routerTransition  : themeConfig.routerTransition || 'none',
      routeTitle        : this.$route.meta.pageTitle,
    }
  },
  watch: {
    "$route"() {
      this.routeTitle = this.$route.meta.pageTitle
    },
    isThemeDark(val) {
      const color = this.navbarColor == "#fff" && val ? "#10163a" : "#fff"
      this.updateNavbarColor(color)
    },
    "$store.state.mainLayoutType"(val) {
      this.setNavMenuVisibility(val)
      this.disableThemeTour = true
    },
    windowWidth(val) {
      if(val < 1200) this.disableThemeTour = true
    },
    verticalNavMenuWidth() {
      this.disableThemeTour = true
    },
  },
  computed: {
    auditDate(){ return this.$store.state.auditLog.auditDate },
    bodyOverlay() { return this.$store.state.bodyOverlay },
    contentAreaClass() {
      if(this.mainLayoutType === "vertical") {
        if      (this.verticalNavMenuWidth == "default") return "content-area-reduced"
        else if (this.verticalNavMenuWidth == "reduced") return "content-area-lg"
      }
      // else if(this.mainLayoutType === "boxed") return "content-area-reduced"
      else return "content-area-full"
    },
    footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static',
      }
    },
    isAppPage() {
      return this.$route.path.includes('/apps/') ? true : false
    },
    isThemeDark()     { return this.$store.state.theme == 'dark' },
    layoutTypeClass() { return `main-${this.mainLayoutType}` },
    mainLayoutType()  { return this.$store.state.mainLayoutType  },
    navbarClasses()   {
      return {
        'navbar-hidden'   : this.navbarType == 'hidden',
        'navbar-sticky'   : this.navbarType == 'sticky',
        'navbar-static'   : this.navbarType == 'static',
        'navbar-floating' : this.navbarType == 'floating',
      }
    },
    verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth },
    windowWidth()          { return this.$store.state.windowWidth }
  },
  methods: {
    changeRouteTitle(title) {
      this.routeTitle = title
    },
    updateNavbar(val) {
      if (val == "static") this.updateNavbarColor("#fff")
      this.navbarType = val
    },
    updateNavbarColor(val) {
      this.navbarColor = val
      if (val == "#fff") this.isNavbarDark = false
      else this.isNavbarDark = true
    },
    updateFooter(val) {
      this.footerType = val
    },
    updateRouterTransition(val) {
      this.routerTransition = val
    },
    setNavMenuVisibility(layoutType) {
      if((layoutType === 'horizontal' && this.windowWidth >= 1200) || (layoutType === "vertical" && this.windowWidth < 1200)) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
        this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
      }
      else {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
      }
    },
    toggleHideScrollToTop(val) {
      this.hideScrollToTop = val
    },
    setAccessMenuUserGroup(menuAccessOrder){
        if(menuAccessOrder.length > 0) {
            for (let countMainMenu = 0; countMainMenu < this.navMenuItems.length; countMainMenu++) {
                let mainMenu = this.navMenuItems[countMainMenu];
                if (mainMenu.submenu) { //Check Sub menu Level 1
                    for (let countSubMenu1 = 0; countSubMenu1 < mainMenu.submenu.length; countSubMenu1++) {
                        let subMenu1 = mainMenu.submenu[countSubMenu1];
                        if(subMenu1.submenu){//Check Sub menu Level 2
                            for (let countSubMenu2 = 0; countSubMenu2 < subMenu1.submenu.length; countSubMenu2++){
                                let subMenu2 = subMenu1.submenu[countSubMenu2];
                                if(menuAccessOrder[subMenu2.tagOrder] != undefined){
                                    subMenu2.isDisabled = (menuAccessOrder[subMenu2.tagOrder] === '1') ? false : true;
                                }
                            }
                            //Special Acesss Configuration
                            if (subMenu1.tagOrder == this.global.accessUserMenuOrder.configuration){
                                let subMenuConfiguration = subMenu1.submenu;
                                for(let countMenuConfigutation = 0; countMenuConfigutation<subMenuConfiguration.length; countMenuConfigutation++){
                                    let subMenuConfigurationLevel2 = subMenuConfiguration[countMenuConfigutation].submenu;
                                        subMenuConfiguration[countMenuConfigutation].isDisabled = (menuAccessOrder[subMenu1.tagOrder] === '1') ? false:true
                                        if(subMenuConfigurationLevel2 != undefined){
                                            for (let countMenuConfigutationlevel2 = 0; countMenuConfigutationlevel2<subMenuConfigurationLevel2.length; countMenuConfigutationlevel2++){
                                                subMenuConfigurationLevel2[countMenuConfigutationlevel2].isDisabled = (menuAccessOrder[subMenu1.tagOrder] === '1') ? false:true
                                            }
                                        }
                                }
                            }
                        }
                        else{
                            if(menuAccessOrder[subMenu1.tagOrder] != undefined){
                                subMenu1.isDisabled = (menuAccessOrder[subMenu1.tagOrder] === '1') ? false : true;
                            }
                        }
                    }
                } else {
                    if (menuAccessOrder[mainMenu.tagOrder] != undefined) {
                        mainMenu.isDisabled = (menuAccessOrder[mainMenu.tagOrder] === '1') ? false : true;
                    }
                }
            }
        }
    }, 

    authCheck(){ 
        $request.get('auth-check')
            .then(response=>{
                if(response.data == 0){

                }else{
                    this.$nextTick(()=>{
                        this.$refs.dialog.title = 'Login';
                        this.$refs.dialog.text = this.$t('message.loggedInOtherDevice');
                        this.$refs.dialog.acceptText = this.$t('button.ok');
                        this.$refs.dialog.cancelText = this.$t('button.cancel');
                        this.$refs.dialog.showCancelButton = true;
                        this.$refs.dialog.showDialog = true;
                    })
                    // this.$vs.loading.close('#page-login>.con-vs-loading');
                    // this.btnLoginDisabled= false
                }
            }).catch(error=>{  

            });
    },

    logout(){
        this.$store.dispatch('logout');
    }
  },
 
  created() {
    // this.authCheck();
    const color = this.navbarColor == "#fff" && this.isThemeDark ? "#10163a" : this.navbarColor
    this.updateNavbarColor(color)
    this.setNavMenuVisibility(this.$store.state.mainLayoutType)
    this.$store.dispatch('getAuditDate')
    this.$store.dispatch('getConfigurations')


    this.global.userInfo.id = this.$store.state.auth.accountCode
    this.global.userInfo.code = this.$store.state.auth.accountCode
    this.global.userInfo.email = this.$store.state.auth.accountEmail
    this.global.userInfo.groupCode = this.$store.state.auth.accountGroup

    
      //Set Access Menu & user info
    // if (this.$store.state.userSettingUserGroup.userAccessIDLogin) { //execute after signin
    //   this.$store.dispatch('setAccessMenuUser', this.$store.state.userSettingUserGroup.userAccessIDLogin).then(() => {
          //Setup User Info
        // this.global.userInfo.id = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.id
        // this.global.userInfo.code = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.code
        // this.global.userInfo.email = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.email
        // this.global.userInfo.groupCode = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.groupCode
        // this.setAccessMenuUserGroup(this.$store.state.userSettingUserGroup.menuAcesssUserData.groupAccess);
    //   })
    // }
    // else{//exceute if refresh page on status login
    //   this.$store.dispatch('setAccessMenuUser', this.$store.state.auth.accountCode).then(() => {
    //     this.global.userInfo.id = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.id
    //     this.global.userInfo.code = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.code
    //     this.global.userInfo.email = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.email
    //     this.global.userInfo.groupCode = this.$store.state.userSettingUserGroup.menuAcesssUserData.userInfo.groupCode
    //     this.setAccessMenuUserGroup(this.$store.state.userSettingUserGroup.menuAcesssUserData.groupAccess);
    //   });
    // }
  },
}

</script>
<style lang="scss">
@import "~ag-grid-community/src/styles/ag-grid.scss";
// @import '~ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham';
@import '~ag-grid-community/src/styles/ag-theme-balham/sass/legacy/ag-theme-balham-v22-compat.scss';


</style>
<style lang="scss">
/*@media only screen and (max-width: 900px) {*/
/*    header{*/
/*        !*background: rgba(var(--vs-primary), 1) !important;*!*/
/*        !*color: white !important;*!*/
/*        !*box-shadow: none !important;*!*/
/*    }*/
/*}*/

</style>
