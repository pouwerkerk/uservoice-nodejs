"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var TicketService = (function (_super) {
    __extends(TicketService, _super);
    function TicketService() {
        return _super.apply(this, arguments) || this;
    }
    TicketService.prototype.create = function (data) {
        var _this = this;
        if (!data.email && !this.client.getAccessToken()) {
            throw new Error('Not authorized to create ticket; must login first.');
        }
        return this.client.post('tickets.json', data)
            .then(function (responseData) { return _this.processTicketResponseCustomFields(responseData); });
    };
    TicketService.prototype.update = function (ticketId, ticketData) {
        var _this = this;
        return this.client.put("tickets/" + ticketId + ".json", ticketData)
            .then(function (data) { return _this.processTicketResponseCustomFields(data); });
    };
    TicketService.prototype.list = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        options.per_page = options.per_page || this.client.requestOptions.pagination.max;
        return this.client.get('tickets.json', options)
            .then(function (data) { return _this.processTicketListResponseCustomFields(data); });
    };
    TicketService.prototype.getTicketMessage = function (ticketId, messageId, options) {
        var _this = this;
        if (options === void 0) { options = { }; }
        options.query = (options.query ? options.query + "&" : "?") + "ticket_id=" + ticketId;
        // options.per_page = options.per_page || this.client.requestOptions.pagination.max;
        const endpoint = "ticket_messages/" + messageId + "/download";
        const prefix = "/admin/"
        console.log("gtm, endpoint", endpoint);
        console.log("gtm, options", options);
        console.log("gtm, prefix", prefix);
        return this.client.get(endpoint, options, prefix)
            .then(function (data) { console.log("data", data); return _this.processTicketListResponseCustomFields(data); });
    };
    TicketService.prototype.search = function (query, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        options.per_page = options.per_page || this.client.requestOptions.pagination.max;
        options.query = query;
        return this.client.get('tickets/search.json', options)
            .then(function (data) { return _this.processTicketListResponseCustomFields(data); });
    };
    TicketService.prototype.show = function (ticketId) {
        var _this = this;
        if (!ticketId) {
            throw new Error('ticketId cannot be empty');
        }
        return this.client.get("tickets/" + ticketId + ".json")
            .then(function (data) { return _this.processTicketResponseCustomFields(data); });
    };
    TicketService.prototype.processTicketResponseCustomFields = function (ticketResponse) {
        this.convertCustomFieldsToObject(ticketResponse.ticket);
        return ticketResponse;
    };
    TicketService.prototype.processTicketListResponseCustomFields = function (ticketListResponse) {
        var _this = this;
        ticketListResponse.tickets.forEach(function (t) { return _this.convertCustomFieldsToObject(t); });
        return ticketListResponse;
    };
    TicketService.prototype.convertCustomFieldsToObject = function (ticket) {
        if (!ticket.custom_fields) {
            return;
        }
        var object = {};
        var rawCustomFields = ticket.custom_fields;
        rawCustomFields.forEach(function (customField) {
            object[customField.key] = customField.value;
        });
        ticket.custom_fields = object;
    };
    return TicketService;
}(apiService_1.ApiService));
exports.TicketService = TicketService;
//# sourceMappingURL=ticketService.js.map