import { IClientV2 } from '../../client';
export declare abstract class ApiService {
    protected client: IClientV2;
    constructor(client: IClientV2);
}
