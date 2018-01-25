/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { ApiService } from './apiService';
import { IForumResponse } from '../models/forum';
import { IRequest } from '../models/request';
export declare class ForumService extends ApiService {
    list(data?: IRequest): Promise<IForumResponse>;
    get(forumId: number, data?: IRequest): Promise<IForumResponse>;
}
