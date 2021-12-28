
import i18n from '@/lang';
let vm = new Vue({
    i18n,
    methods: {
    loadingContainer(id){
        this.$vs.loading({container: (id),scale: 0.7})
    },
    loadingButton(id){
        this.$vs.loading({container: (id),scale: 0.4})
    },

}
})
export default vm
