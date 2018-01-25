"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var ForumService = (function (_super) {
    __extends(ForumService, _super);
    function ForumService() {
        return _super.apply(this, arguments) || this;
    }
    ForumService.prototype.list = function (data) {
        if (data === void 0) { data = {}; }
        return this.client.get('admin/forums', data);
    };
    ForumService.prototype.get = function (forumId, data) {
        if (data === void 0) { data = {}; }
        return this.client.get("admin/forums/" + forumId, data);
    };
    return ForumService;
}(apiService_1.ApiService));
exports.ForumService = ForumService;
//# sourceMappingURL=forumService.js.map