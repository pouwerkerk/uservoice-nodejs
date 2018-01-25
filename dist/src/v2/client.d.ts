/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { ForumService } from './api/services/forumService';
import { NpsRatingService } from './api/services/npsRatingService';
export declare class ClientV2 implements IClientV2 {
    private options;
    forumService: ForumService;
    npsRatingService: NpsRatingService;
    private baseUrl;
    private accessToken;
    constructor(options: IClientV2Options);
    loginAsOwner(clientSecret: string): Promise<ClientV2>;
    loginAsUser(email: string, password: string): Promise<ClientV2>;
    get<T>(endpoint: string, data?: any): Promise<T>;
    post<T>(endpoint: string, data?: any): Promise<T>;
    put<T>(endpoint: string, data?: any): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
    private executeRequest<T>(method, endpoint, data?);
    private loginWithBody(requestBody);
    private parse(data);
}
export interface IClientV2 {
    loginAsOwner(clientSecret: string): Promise<IClientV2>;
    loginAsUser(email: string, password: string): Promise<IClientV2>;
    get<T>(endpoint: string, data?: any): Promise<T>;
    post<T>(endpoint: string, data?: any): Promise<T>;
    put<T>(endpoint: string, data?: any): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
}
export interface IClientV2Options {
    subdomain: string;
    clientId: string;
    domain?: string;
}
