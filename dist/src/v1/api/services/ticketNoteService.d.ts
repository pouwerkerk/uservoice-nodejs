/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { ApiService } from './apiService';
import { IRequestOptions } from '../models/model';
import { ITicketNoteResponse, ITicketNoteCreationRequest, ITicketNoteListResponse } from '../models/ticketNote';
export declare class TicketNoteService extends ApiService {
    create(ticketId: number, request: ITicketNoteCreationRequest): Promise<ITicketNoteResponse>;
    delete(ticketId: number, noteId: number): Promise<void>;
    list(ticketId: number, options?: IRequestOptions): Promise<ITicketNoteListResponse>;
}
