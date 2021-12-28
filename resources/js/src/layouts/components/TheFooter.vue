<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>
            Audit Date: {{ auditDate | fulldate }}
        </span>
        <span class="md:flex hidden items-center">
            <span>
                © {{ new Date().getFullYear() }} <a href="https://cakrasoft.com" style="color:white" target="_blank" rel="nofollow">Cakrasoft Cloud System</a>, All rights Reserved
            </span>
        </span>
    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
        auditDate: String
    },
}
</script>
