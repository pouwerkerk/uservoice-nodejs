/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { TicketService } from './api/services/ticketService';
import { TicketMessageService } from './api/services/ticketMessageService';
import { TicketNoteService } from './api/services/ticketNoteService';
import { CustomFieldService } from './api/services/customFieldService';
import { AssetService } from './api/services/assetService';
import { IOAuthProvider, IOAuthConsumer } from './oauthProvider';
import { IRequestOptions } from './api/models/model';
export declare class Client {
    private clientOptions;
    private oAuthProviderInstance;
    consumer: IOAuthConsumer;
    requestOptions: IRequestOptions;
    ticketService: TicketService;
    ticketMessageService: TicketMessageService;
    ticketNoteService: TicketNoteService;
    ticketAssetService: AssetService;
    customFieldService: CustomFieldService;
    private baseUrl;
    constructor(clientOptions: IClientOptions, oAuthProviderInstance?: IOAuthProvider);
    loginAs(email: string): Promise<Client>;
    loginAsOwner(): Promise<Client>;
    get<T>(endpoint: string, data?: any): Promise<T>;
    post<T>(endpoint: string, data?: any): Promise<T>;
    put<T>(endpoint: string, data?: any): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
    getAccessToken(): string;
    getBaseUrl(): string;
    private loginWithAccessToken(token, secret);
    private getRequestToken();
    private mergeOptions(options?);
    private resolveConsumerResponse<T>(error, data, resolve, reject);
    private parse(data);
    private clone<T>(obj);
    private getAccessSecret();
}
export interface IClientOptions {
    subdomain: string;
    apiKey: string;
    apiSecret: string;
    domain?: string;
    options?: IRequestOptions;
    accessToken?: string;
    accessSecret?: string;
}
