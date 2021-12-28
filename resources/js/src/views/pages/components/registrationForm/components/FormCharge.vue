<template>
    <div ref="form">
        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
            <div class="wrap-form-select w-full md:w-1/2 required">
                <vs-row><label>{{$t('registrationForm.extraCharge.form.outlet')}}</label></vs-row>
                <vs-row>
                    <v-select class="w-full" id="form-select" @input="handleChangeOutlet" label="name" :options="lookup.outlet" v-model="vModel.outlet"/>
                </vs-row>
            </div>
            <div class="wrap-form-select w-full md:w-1/2 required">
                <vs-row><label>{{$t('registrationForm.extraCharge.form.product')}}</label></vs-row>
                <vs-row>
                    <v-select class="w-full" id="form-select" @input="handleChangeProduct" :resetOnOptionsChange="resetProduct" label="name" :options="lookup.product" v-model="vModel.product"/>
                </vs-row>
            </div>
        </vs-row>
        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
            <div class="wrap-form-select w-full md:w-1/2 required">
                <vs-row><label>{{$t('registrationForm.extraCharge.form.subDepartment')}}</label></vs-row>
                <vs-row>
                    <v-select class="w-full" id="form-select" @input="handleChangeSubDepartment" :clearable="false" label="name" :reduce="value => value.code" :options="lookup.sub_department" v-model="vModel.sub_department_code" v-validate="'required'" name="sub department" data-vv-scope="extraCharge"></v-select>
                    <span class="error-text text-danger" v-show="errors.has('extraCharge.sub department')">{{ errors.first('extraCharge.sub department') }}</span>
                </vs-row>
            </div>
            <div class="wrap-form-select w-full md:w-1/2 required">
                <vs-row><label>{{$t('registrationForm.extraCharge.form.account')}}</label></vs-row>
                <vs-row>
                    <v-select  class="w-full" id="form-select" :resetOnOptionsChange="resetOptionsChange" :clearable="false" label="name" :reduce="value => value.code" :options="lookup.account" v-model="vModel.account_code" v-validate="'required'" name="account" data-vv-scope="extraCharge"/>
                    <span class="error-text text-danger" v-show="errors.has('extraCharge.account')">{{ errors.first('extraCharge.account') }}</span>
                </vs-row>
            </div>
        </vs-row>
        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
            <input-number :disabled="vModel.per_pax" class="w-full sm:w-4/12 required" :label="$t('registrationForm.extraCharge.form.quantity')"  v-model="vModel.quantity" :description="errors.first('extraCharge.quantity') || dbErrors.quantity | toString" v-validate="'required'" name="quantity" data-vv-scope="extraCharge"/>
            <input-number class="w-full sm:w-4/12 required" :label="$t('registrationForm.extraCharge.form.amount')" v-model="vModel.amount" :description="errors.first('extraCharge.amount') || dbErrors.quantity | toString" v-validate="'required'" name="amount" data-vv-scope="extraCharge" />
            <div class="w-full sm:w-1/4">
                <vs-row class="check-box-pax">
                    <vs-checkbox class="w-full" v-model="vModel.per_pax" @input="vModel.quantity = vModel.per_pax ? 1 : vModel.quantity ; vModel.max_pax = vModel.per_pax ? 1000 : 1" >{{ $t('registrationForm.extraCharge.form.perPax') }}</vs-checkbox>
                </vs-row>
                <vs-row>
                    <vs-checkbox :disabled="!vModel.per_pax" class="w-full" v-model="vModel.include_child">{{ $t('registrationForm.extraCharge.form.includeChild') }}</vs-checkbox>
                </vs-row>
            </div>
        </vs-row>
        <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
            <div class="wrap-form-select w-full md:w-1/2">
                <vs-row>{{$t('registrationForm.extraCharge.form.taxAndService')}}</vs-row>
                <vs-row>
                    <v-select id="form-select" class="w-full" :clearable="false" label="name" :reduce="value => value.code" :options="lookup.tax_and_service" v-model="vModel.tax_and_service_code"></v-select>

                </vs-row>
            </div>
            <div class="wrap-form-select w-full md:w-1/2 required">
                <vs-row><label>{{$t('registrationForm.extraCharge.form.chargeFrequency')}}</label></vs-row>
                <vs-row>
                    <v-select id="form-select" class="w-full" :reduce="value => value.code" label="name" :clearable="false" :options="lookup.charge_frequency" v-model="vModel.charge_frequency_code" v-validate="'required'" name="charge frequency" data-vv-scope="extraCharge"></v-select>
                    <span class="error-text text-danger" v-show="errors.has('extraCharge.charge frequency')">{{ errors.first('extraCharge.charge frequency') }}</span>
                </vs-row>
            </div>
        </vs-row>
        <vs-row vs-type="flex" :class="rowMarginBottom" vs-justify="space-between">
            <vs-divider>Extra Charge</vs-divider>
            <vs-row vs-type="flex" vs-justify="space-between">
                <vs-input-number class="number-input md:w-3/12" :label="$t('registrationForm.extraCharge.form.maxPax')+':'" v-model="vModel.max_pax" min="1" />
                <input-number class="w-full md:w-4/12" :label="$t('registrationForm.extraCharge.form.extraPax')" v-model="vModel.extra_pax" />
                <vs-checkbox class="checkbox-3col w-full md:w-3/12" v-model="vModel.per_pax_extra">{{ $t('registrationForm.extraCharge.form.perPax') }}</vs-checkbox>
            </vs-row>
            <vs-divider class="mt-5"></vs-divider>
        </vs-row>
    </div>
</template>

<script>
// ------for format----- //

export default {
    name: 'FormCharge',
    props: {
        table: Boolean,
        data: Array,
    },
    components: {
    },

    data() {
        return {
        };
    },
};
</script>
