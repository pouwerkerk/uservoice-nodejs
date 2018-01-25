"use strict";
var oauth = require("oauth");
var OAuthProvider = (function () {
    function OAuthProvider() {
    }
    OAuthProvider.prototype.getConsumer = function (baseUrl, apiKey, apiSecret) {
        return new oauth.OAuth(baseUrl + "oauth/request_token.json", baseUrl + "oauth/access_token.json", apiKey, apiSecret, '1.0A', null, 'HMAC-SHA1');
    };
    return OAuthProvider;
}());
exports.OAuthProvider = OAuthProvider;
//# sourceMappingURL=oauthProvider.js.map