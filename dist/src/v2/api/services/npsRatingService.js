"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var NpsRatingService = (function (_super) {
    __extends(NpsRatingService, _super);
    function NpsRatingService() {
        return _super.apply(this, arguments) || this;
    }
    NpsRatingService.prototype.list = function (data) {
        if (data === void 0) { data = {}; }
        return this.client.get('admin/nps_ratings', data);
    };
    NpsRatingService.prototype.get = function (npsRatingId, data) {
        if (data === void 0) { data = {}; }
        return this.client.get("admin/nps_ratings/" + npsRatingId, data);
    };
    NpsRatingService.prototype.create = function (data) {
        return this.client.post('admin/nps_ratings', data);
    };
    return NpsRatingService;
}(apiService_1.ApiService));
exports.NpsRatingService = NpsRatingService;
//# sourceMappingURL=npsRatingService.js.map