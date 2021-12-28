
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = '/report/';

class ReportResource extends Resource {
    constructor(){
        super(uri);
    }

    sendEmail(params) {
        return request({
            url: uri+'email',
            method: 'get',
            params: params
        });
    }

    preview(params) {
        return request({
            url: uri+'preview',
            method: 'get',
            params: params
        });
    }

    processReportTemplate(params) {
        return request({
            url: uri+'processreporttemplate',
            method: 'get',
            params: params
        });
    }

    reportListData(params) {
        return request({
            url: uri+'reportlistdata',
            method: 'get',
            params: params
        });
    }

    reportTemplate(params) {
        return request({
            url: uri+'reporttemplate',
            method: 'get',
            params: params
        });
    }

    ReportDataLookUpFilter1(params){
        return request({
            url: uri+'reportdatalookupfilter1',
            method: 'get',
            params: params
        });
    }

    getPreviewReportAccess(data) {
        return request({
            url: 'usersetting/get-preview-report-access',
            method: 'post',
            data: data
        });
    }

    //Report Template Editor
    editReportEditor(params){
        return request({
            url: uri+'editreporteditor',
            method: 'get',
            params: params
        });
    }

    insertTemplateReport(params){
        return request({
            url: uri+'inserttemplatereport',
            method: 'post',
            params: params
        });
    }

    updateTemplateReport(params){
        return request({
            url: uri+'updatetemplatereport',
            method: 'post',
            params: params
        });
    }

    updateTemplateDefaultReport(data){
        return request({
            url: uri+'updatetemplatedefaultreport',
            method: 'post',
            data: data
        });
    }

    deleteTemplateReport(params){
        return request({
            url: uri+'deletetemplatereport',
            method: 'post',
            params: params
        });
    }

    isTemplateSystemDefault(params){
        return request({
            url: uri+'istemplatesystemdefault',
            method: 'get',
            params: params
        });
    }

    setAsDefaultTemplate(params){
        return request({
            url: uri+'setasdefaulttemplate',
            method: 'get',
            params: params
        });
    }

    setAsSystemDefaultTemplate(params){
        return request({
            url: uri+'setassystemdefaulttemplate',
            method: 'get',
            params: params
        });
    }
    //End Report Template Editor
}

export { ReportResource as default };
