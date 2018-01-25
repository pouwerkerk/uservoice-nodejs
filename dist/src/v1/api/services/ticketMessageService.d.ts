/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { ApiService } from './apiService';
import { ITicketResponse } from '../models/ticket';
import { ITicketMessageListResponse, ITicketMessageCreateRequest } from '../models/ticketMessage';
import { IRequestOptions } from '../models/model';
export declare class TicketMessageService extends ApiService {
    create(ticketId: number, data: ITicketMessageCreateRequest): Promise<ITicketResponse>;
    list(ticketId: number, options?: IRequestOptions): Promise<ITicketMessageListResponse>;
    listAll(options?: IRequestOptions): Promise<ITicketMessageListResponse>;
}
