import Vue from 'vue';

export default Vue.extend({
    template: `
            <div v-if="params.data">
                <div v-if="typeX === 'R'"> <span :style="style"><b>{{data}}</b></span> </div>
                <div v-if="typeX === 'O'"> <span :style="style"><b>{{data}}</b></span> </div>
                <div v-if="typeX === 'ED'"><span :style="style"><b>{{data}}</b></span> </div>
                <div v-if="typeX === 'U'">
                    <div v-if="statusCode2 === 'OO'"> <span :style="style"><b>{{data}}</b></span> </div>
                    <div v-if="statusCode2 === 'OF'"> <span :style="style"><b>{{data}}</b></span> </div>
                    <div v-if="statusCode2 === 'UC'"> <span :style="style"><b>{{data}}</b></span> </div>
                </div>
            </div>
         `,

    data() {
        return {
            data: null,
            dataArray: [],

            typeX: '',
            statusCode2: '',

            style: {
                padding: '17px',
                paddingRight: '180px',
                marginLeft: '-15px',
                backgroundColor: '',
            },
        };
    },

    computed: {},
    beforeMount() {},
    created() {},
    mounted() {
        this.data = `${this.params.value}`;
        if (this.data != '') {
            this.dataArray = this.data.split('|');
            this.typeX = this.dataArray[2];
            if (this.typeX == 'U') {
                this.statusCode2 = this.dataArray[3];
                if (this.statusCode2 == 'OO') {
                    // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOutOfOrder)>>>0).toString(16)).slice(-6);
                    this.style.backgroundColor = 'Red';
                } else if (this.statusCode2 == 'OF') {
                    // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOfficeUse)>>>0).toString(16)).slice(-6);
                    this.style.backgroundColor = 'Purple';
                } else if (this.statusCode2 == 'UC') {
                    // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorUnderConstruction)>>>0).toString(16)).slice(-6);
                    this.style.backgroundColor = 'Sienna';
                }
            } else if (this.typeX == 'R') {
                this.style.backgroundColor = 'DodgerBlue';
                // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorReserved)>>>0).toString(16)).slice(-6);
            } else if (this.typeX == 'O') {
                this.style.backgroundColor = 'DarkGoldenRod';
                // this.style.backgroundColor =  "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOccupied)>>>0).toString(16)).slice(-6);
            } else if (this.typeX == 'ED') {
                //                this.style.backgroundColor =  "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOccupied)>>>0).toString(16)).slice(-6);
                this.style.backgroundColor = 'yellow';
            }
        }
    },
    methods: {
        dec2hexString(dec) {
            return `0x${(dec + 0x10000).toString(16).substr(-4).toUpperCase()}`;
        },
    },
});
