"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var CustomFieldService = (function (_super) {
    __extends(CustomFieldService, _super);
    function CustomFieldService() {
        return _super.apply(this, arguments) || this;
    }
    CustomFieldService.prototype.list = function (data) {
        if (data === void 0) { data = {}; }
        return this.client.get("custom_fields.json", data);
    };
    CustomFieldService.prototype.public = function (data) {
        if (data === void 0) { data = {}; }
        return this.client.get("custom_fields/public.json", data);
    };
    return CustomFieldService;
}(apiService_1.ApiService));
exports.CustomFieldService = CustomFieldService;
//# sourceMappingURL=customFieldService.js.map