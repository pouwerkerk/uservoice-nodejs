"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var apiService_1 = require("./apiService");
var TicketNoteService = (function (_super) {
    __extends(TicketNoteService, _super);
    function TicketNoteService() {
        return _super.apply(this, arguments) || this;
    }
    TicketNoteService.prototype.create = function (ticketId, request) {
        return this.client.post("tickets/" + ticketId + "/notes.json", request);
    };
    TicketNoteService.prototype["delete"] = function (ticketId, noteId) {
        return this.client["delete"]("tickets/" + ticketId + "/notes/" + noteId + ".json");
    };
    TicketNoteService.prototype.list = function (ticketId, options) {
        if (options === void 0) { options = {}; }
        return this.client.get("tickets/" + ticketId + "/notes.json", options);
    };
    return TicketNoteService;
}(apiService_1.ApiService));
exports.TicketNoteService = TicketNoteService;
//# sourceMappingURL=ticketNoteService.js.map