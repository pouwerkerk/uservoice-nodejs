/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { ApiService } from './apiService';
import { ICustomFieldListRequest, ICustomFieldListResponse } from '../models/customField';
export declare class CustomFieldService extends ApiService {
    list(data?: ICustomFieldListRequest): Promise<ICustomFieldListResponse>;
    public(data?: ICustomFieldListRequest): Promise<ICustomFieldListResponse>;
}
