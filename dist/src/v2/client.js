"use strict";
var Promise = require("bluebird");
var request = require("request");
var querystring = require("querystring");
var dateParser_1 = require("../dateParser");
var forumService_1 = require("./api/services/forumService");
var npsRatingService_1 = require("./api/services/npsRatingService");
var ClientV2 = (function () {
    function ClientV2(options) {
        this.options = options;
        this.forumService = new forumService_1.ForumService(this);
        this.npsRatingService = new npsRatingService_1.NpsRatingService(this);
        this.baseUrl = "https://" + options.subdomain + "." + (options.domain || 'uservoice.com') + "/api/v2/";
    }
    ClientV2.prototype.loginAsOwner = function (clientSecret) {
        return this.loginWithBody("client_id=" + this.options.clientId + ";client_secret=" + clientSecret + ";grant_type=client_credentials;");
    };
    ClientV2.prototype.loginAsUser = function (email, password) {
        return this.loginWithBody("client_id=" + this.options.clientId + ";username=" + email + ";password=" + password + ";grant_type=password;");
    };
    ClientV2.prototype.get = function (endpoint, data) {
        if (data === void 0) { data = {}; }
        dateParser_1.DateParser.processDates(data);
        if (data) {
            endpoint = endpoint + "?" + querystring.stringify(data);
        }
        return this.executeRequest('GET', endpoint);
    };
    ClientV2.prototype.post = function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.executeRequest('POST', endpoint, data);
    };
    ClientV2.prototype.put = function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.executeRequest('PUT', endpoint, data);
    };
    ClientV2.prototype["delete"] = function (endpoint) {
        return this.executeRequest('PUT', endpoint);
    };
    ClientV2.prototype.executeRequest = function (method, endpoint, data) {
        var _this = this;
        var options = { method: method };
        if (data) {
            data = dateParser_1.DateParser.processDates(data);
            options.json = data;
        }
        if (this.accessToken) {
            options.headers = { Authorization: "Bearer " + this.accessToken };
        }
        return new Promise(function (resolve, reject) {
            request("" + _this.baseUrl + endpoint, options, function (error, response, body) {
                if (error) {
                    return reject(error);
                }
                resolve(_this.parse(body));
            });
        });
    };
    ClientV2.prototype.loginWithBody = function (requestBody) {
        var _this = this;
        var options = {
            body: requestBody,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            method: 'POST'
        };
        return new Promise(function (resolve, reject) {
            request(_this.baseUrl + "oauth/token", options, function (error, response, body) {
                if (error) {
                    return reject(error);
                }
                var parsedBody = JSON.parse(body);
                var accessToken = parsedBody.access_token;
                if (!accessToken) {
                    return reject(parsedBody);
                }
                _this.accessToken = accessToken;
                resolve(_this);
            });
        });
    };
    ClientV2.prototype.parse = function (data) {
        var parsedData;
        try {
            parsedData = JSON.parse(data);
        }
        catch (err) {
            parsedData = data;
        }
        return dateParser_1.DateParser.processDateStrings(parsedData);
    };
    return ClientV2;
}());
exports.ClientV2 = ClientV2;
//# sourceMappingURL=client.js.map