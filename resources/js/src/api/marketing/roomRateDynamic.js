import Resource from '@/api/resource';

const uri = 'roomrate/dynamicrate';

class RoomRateDynamicResource extends Resource {
    constructor() {
        super(uri);
    }
}

export { RoomRateDynamicResource as default };
