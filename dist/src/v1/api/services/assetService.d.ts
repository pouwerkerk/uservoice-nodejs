/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { ApiService } from './apiService';
import { IAsset, IAssetCreateRequest } from '../models/asset';
export declare class AssetService extends ApiService {
    create(data: IAssetCreateRequest): Promise<IAsset>;
    show(assetId: number): Promise<IAsset>;
    delete(assetId: number): Promise<void>;
}
