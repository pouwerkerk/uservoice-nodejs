/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { ApiService } from './apiService';
import { INpsRatingListRequest, INpsRatingResponse, INpsRatingRequest, INpsRatingCreateRequest } from '../models/npsRating';
export declare class NpsRatingService extends ApiService {
    list(data?: INpsRatingListRequest): Promise<INpsRatingResponse>;
    get(npsRatingId: number, data?: INpsRatingRequest): Promise<INpsRatingResponse>;
    create(data: INpsRatingCreateRequest): Promise<INpsRatingResponse>;
}
