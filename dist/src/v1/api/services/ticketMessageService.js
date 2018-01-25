"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var TicketMessageService = (function (_super) {
    __extends(TicketMessageService, _super);
    function TicketMessageService() {
        return _super.apply(this, arguments) || this;
    }
    TicketMessageService.prototype.create = function (ticketId, data) {
        if (!data.email && !this.client.getAccessToken()) {
            throw new Error('Cannot identify user for ticket. Set the email on ticket, or login as a user.');
        }
        return this.client.post("tickets/" + ticketId + "/ticket_messages.json", data);
    };
    TicketMessageService.prototype.list = function (ticketId, options) {
        if (options === void 0) { options = {}; }
        options.per_page = options.per_page || this.client.requestOptions.pagination.max;
        return this.client.get("tickets/" + ticketId + "/ticket_messages.json", options);
    };
    TicketMessageService.prototype.listAll = function (options) {
        if (options === void 0) { options = {}; }
        options.per_page = options.per_page || this.client.requestOptions.pagination.max;
        return this.client.get('ticket_messages.json', options);
    };
    return TicketMessageService;
}(apiService_1.ApiService));
exports.TicketMessageService = TicketMessageService;
//# sourceMappingURL=ticketMessageService.js.map