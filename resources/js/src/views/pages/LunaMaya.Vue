<template>
    <vs-prompt :class="classDialog" type="confirm" :active.sync="showDialog" color="warning" :title="title" :buttons-hidden="true">
        <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="w-full">
            <vs-icon icon="warning" size="large" color="warning"></vs-icon>
        </vs-row>
        <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="w-full">
            <p style="text-align:center">{{text}}</p>
        </vs-row>
        <vs-row class="mt-4" vs-align="center" vs-type="flex" vs-justify="center" vs-w="w-full">
            <vs-divider color="warning"></vs-divider>
        </vs-row>
        <vs-row vs-align="center" vs-type="flex" vs-justify="center" class="w-full">
            <vs-button :disabled="btnDisabled"  class="w-full md:w-1/3 ml-1 mr-1 mt-1" @click="$emit('event')" vs-type="flex" color="warning" v-on:click="showDialog = false">{{acceptText}}</vs-button>
            <vs-button v-show="showCancelButton" class="w-full md:w-1/3 ml-1 mr-1 mt-1" vs-type="flex" color="grey" v-on:click="showDialog = false">{{cancelText}}</vs-button>
        </vs-row>
    </vs-prompt>
</template>
<script>
    export default {
        data(){
            return {
                showDialog: false,
                title: '',
                text: '',
                acceptText: '',
                classDialog: '',
                btnDisabled: false,
                showCancelButton: false,
                cancelText: '',    
            }
        },

        methods:{
            showDialogWarning(title, text, classDialog){                
                this.title = title,
                this.text = text
                this.acceptText = 'Ok'
                this.classDialog = (classDialog != null && classDialog != undefined) ? classDialog:'dialog-second';
                this.showDialog = true
            }
        }
    }
</script>
