"use strict";
var Promise = require("bluebird");
var querystring = require("querystring");
var ticketService_1 = require("./api/services/ticketService");
var ticketMessageService_1 = require("./api/services/ticketMessageService");
var ticketNoteService_1 = require("./api/services/ticketNoteService");
var customFieldService_1 = require("./api/services/customFieldService");
var assetService_1 = require("./api/services/assetService");
var oauthProvider_1 = require("./oauthProvider");
var dateParser_1 = require("../dateParser");
var Client = (function () {
    function Client(clientOptions, oAuthProviderInstance) {
        if (oAuthProviderInstance === void 0) { oAuthProviderInstance = new oauthProvider_1.OAuthProvider(); }
        this.clientOptions = clientOptions;
        this.oAuthProviderInstance = oAuthProviderInstance;
        this.ticketService = new ticketService_1.TicketService(this);
        this.ticketMessageService = new ticketMessageService_1.TicketMessageService(this);
        this.ticketNoteService = new ticketNoteService_1.TicketNoteService(this);
        this.ticketAssetService = new assetService_1.AssetService(this);
        this.customFieldService = new customFieldService_1.CustomFieldService(this);
        this.prefix = "/api/v1/";
        this.baseUrl = "https://" + clientOptions.subdomain + "." + (clientOptions.domain || 'uservoice.com');
        this.requestOptions = this.mergeOptions(clientOptions.options);
        this.consumer = oAuthProviderInstance.getConsumer(this.baseUrl + this.prefix, clientOptions.apiKey, clientOptions.apiSecret);
    }
    Client.prototype.loginAs = function (email) {
        var _this = this;
        return this.getRequestToken()
            .then(function (client) { return _this.post('users/login_as.json', {
            request_token: client.getAccessToken(),
            user: { email: email }
        }); })
            .then(function (response) { return _this.loginWithAccessToken(response.token.oauth_token, response.token.oauth_token_secret); });
    };
    Client.prototype.loginAsOwner = function () {
        var _this = this;
        return this.getRequestToken()
            .then(function (client) { return _this.post('users/login_as_owner.json', { request_token: client.getAccessToken() })
            .then(function (response) { return _this.loginWithAccessToken(response.token.oauth_token, response.token.oauth_token_secret); }); });
    };
    Client.prototype.get = function (endpoint, data, prefix) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (typeof prefix === "undefined") { prefix = this.prefix; }

        dateParser_1.DateParser.processDates(data);
        var url = this.baseUrl + prefix + endpoint;
        if (data) {
            url = url + "?" + querystring.stringify(data);
        }

        return new Promise(function (resolve, reject) {
            _this.consumer.get(url, _this.getAccessToken(), _this.getAccessSecret(), function (error, response) { return _this.resolveConsumerResponse(error, response, resolve, reject); });
        });
    };
    Client.prototype.post = function (endpoint, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        dateParser_1.DateParser.processDates(data);
        return new Promise(function (resolve, reject) {
            _this.consumer.post(_this.baseUrl + this.prefix + endpoint, _this.getAccessToken(), _this.getAccessSecret(), JSON.stringify(data), 'application/json', function (error, response) { return _this.resolveConsumerResponse(error, response, resolve, reject); });
        });
    };
    Client.prototype.put = function (endpoint, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        dateParser_1.DateParser.processDates(data);
        return new Promise(function (resolve, reject) {
            _this.consumer.put(_this.baseUrl + this.prefix + endpoint, _this.getAccessToken(), _this.getAccessSecret(), JSON.stringify(data), 'application/json', function (error, response) { return _this.resolveConsumerResponse(error, response, resolve, reject); });
        });
    };
    Client.prototype["delete"] = function (endpoint) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.consumer["delete"](_this.baseUrl + this.prefix + endpoint, _this.getAccessToken(), _this.getAccessSecret(), function (error, data) { return _this.resolveConsumerResponse(error, data, resolve, reject); });
        });
    };
    Client.prototype.getAccessToken = function () { return this.clientOptions ? this.clientOptions.accessToken : ''; };
    Client.prototype.getBaseUrl = function () { return this.baseUrl + this.prefix; };
    Client.prototype.loginWithAccessToken = function (token, secret) {
        var clonedOptions = this.clone(this.clientOptions);
        clonedOptions.accessToken = token;
        clonedOptions.accessSecret = secret;
        return new Client(clonedOptions, this.oAuthProviderInstance);
    };
    Client.prototype.getRequestToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.consumer.getOAuthRequestToken(function (error, oauthToken, oauthTokenSecret, results) {
                if (error) {
                    reject(error);
                    return;
                }
                var parsedResults = JSON.parse(Object.keys(results)[0]);
                var token = parsedResults.token;
                resolve(_this.loginWithAccessToken(token.oauth_token, token.oauth_token_secret));
            });
        });
    };
    Client.prototype.mergeOptions = function (options) {
        if (options === void 0) { options = {}; }
        options.pagination = options.pagination || {};
        options.pagination.max = options.pagination.max || 500;
        return options;
    };
    Client.prototype.resolveConsumerResponse = function (error, data, resolve, reject) {
        if (error) {
            reject(error);
            return;
        }
        resolve(this.parse(data));
    };
    Client.prototype.parse = function (data) {
        var parsedData;
        try {
            parsedData = JSON.parse(data);
        }
        catch (err) {
            parsedData = data;
        }
        return dateParser_1.DateParser.processDateStrings(parsedData);
    };
    Client.prototype.clone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    Client.prototype.getAccessSecret = function () { return this.clientOptions ? this.clientOptions.accessSecret : ''; };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map