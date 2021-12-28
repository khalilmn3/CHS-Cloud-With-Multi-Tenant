<template>
  <div>
    <vs-input v-model="displayValue" @input="$emit('inputCustom')" :description-text="description" class="w-full number" type="text" :maxLength="15" :label="label" :disabled="disabled" @click="select" @blur="isInputActive = false" @focus="isInputActive = true" />
  </div>
</template>
<script>
export default {
    name: 'Number',
    // eslint-disable-next-line
  // eslint-disable-next-line quotes, vue/require-prop-types
    props: {
        value: [Number,String],
        disabled: Boolean,
        label: String,
        description: String,
        showZeroNumber: Boolean,
        comma: Number,
    },
    // props: ['value', 'disabled', 'label', 'description', 'showZeroNumber'],
    data() {
        return {
            isInputActive: false,
        };
    },
    methods: {
        select(event) {
            this.$emit('clickCustom');
    	    event.target.setSelectionRange(0, this.displayValue.length);
        },
        countDecimals(value) {
            if (Math.floor(value) !== value) return value.toString().split('.')[1].length || 0;
            return 0;
        },
    },
    computed: {
        displayValue: {
            // eslint-disable-next-line vue/return-in-computed-property
            get() {
                let { value } = this;
                if (isNaN(value) || value == null || value == '') {
                    value = this.showZeroNumber ? 0 : '';
                    return value;
                }

                value = parseFloat(value);
                if (this.isInputActive) {
                    // Cursor is inside the input field. unformat display value for user
                    return value.toString();
                }
                // User is not modifying now. Format display value for user interface
                if (value % 1 > 0) {
                    if (this.comma > 0 && this.comma <= 3) {
                        return parseFloat(value).toFixed(this.comma).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                    } if (this.countDecimals(value) <= 3) {
                            return parseFloat(value).toFixed(this.countDecimals(value)).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                    } if (this.countDecimals(value) > 3) {
                        return parseFloat(value).toFixed(3).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                    }
                } else {
                    if (this.comma > 0 && this.comma <= 3) {
                        return parseFloat(value).toFixed(this.comma).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                    }
                    return parseFloat(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                }
            },
            set(modifiedValue) {
                // Recalculate value after ignoring "$" and "," in user input
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ''));
                // Ensure that it is not NaN
                if (isNaN(newValue)) {
                    newValue = 0;
                }
                // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                // $emit the event so that parent component gets it
                if (this.countDecimals(newValue) <= 3) {
				    this.$emit('input', newValue);
                } else {
                    //
                }
            },
        },
    },
};
</script>
<style>
   .number .vs-con-input input{
        font-family:monospace !important;
        font-size: larger !important;
        padding: .6rem !important;
    }
</style>
