"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super.apply(this, arguments) || this;
    }
    UserService.prototype.updateEmail = function () {
        throw new Error('Not implemented.');
    };
    UserService.prototype.show = function (data) {
        throw new Error('Not implemented.');
    };
    UserService.prototype.upsert = function (user) {
        throw new Error('Not implemented.');
    };
    return UserService;
}(apiService_1.ApiService));
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map