/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { IRequestOptions } from '../models/model';
import { ITicketResponse, ITicketListResponse, ITicketCreateRequest, ITicketUpdateRequest } from '../models/ticket';
import { ApiService } from './apiService';
export declare class TicketService extends ApiService {
    create(data: ITicketCreateRequest): Promise<ITicketResponse>;
    update(ticketId: number, ticketData: ITicketUpdateRequest): Promise<ITicketResponse>;
    list(options?: IRequestOptions): Promise<ITicketListResponse>;
    search(query: string, options?: IRequestOptions): Promise<ITicketListResponse>;
    show(ticketId: number): Promise<ITicketResponse>;
    private processTicketResponseCustomFields(ticketResponse);
    private processTicketListResponseCustomFields(ticketListResponse);
    private convertCustomFieldsToObject(ticket);
}
