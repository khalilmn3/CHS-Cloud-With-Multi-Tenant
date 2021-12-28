
import Resource from '@/api/resource';

const uri = 'auditdate';

class AuditDateResource extends Resource {
    constructor(){
        super(uri);
    }
}

export { AuditDateResource as default };
