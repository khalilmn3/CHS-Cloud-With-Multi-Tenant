import AuditDateResource from '@/api/auditDate.js'
const auditDateResource = new AuditDateResource;


const state={
    auditDate       : '2020-01-16',
}

const mutations = {
    SET_AUDIT_DATE(state, value) {
        state.auditDate = value
      },
}

const actions = {
    async getAuditDate({ commit }) {
        if(this._vm){
            this._vm.$nextTick(()=>{
                this._vm.$vs.loading({container:'#layout--main',scale: 1});
            })
        }
        let { data } = await auditDateResource.list();
        commit('SET_AUDIT_DATE', data);
      },
}

export default {
    state,
    actions,
    mutations
}
