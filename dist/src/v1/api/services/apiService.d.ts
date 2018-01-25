import { Client } from '../../client';
export declare abstract class ApiService {
    protected client: Client;
    constructor(client: Client);
}
