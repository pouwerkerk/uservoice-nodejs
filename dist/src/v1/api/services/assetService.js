"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var AssetService = (function (_super) {
    __extends(AssetService, _super);
    function AssetService() {
        return _super.apply(this, arguments) || this;
    }
    AssetService.prototype.create = function (data) {
        return this.client.post("assets.json", data);
    };
    AssetService.prototype.show = function (assetId) {
        return this.client.get("assets/" + assetId + ".json");
    };
    AssetService.prototype["delete"] = function (assetId) {
        return this.client["delete"]("assets/" + assetId);
    };
    return AssetService;
}(apiService_1.ApiService));
exports.AssetService = AssetService;
//# sourceMappingURL=assetService.js.map