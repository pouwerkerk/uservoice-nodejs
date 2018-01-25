"use strict";
var moment = require("moment");
var DateParser;
(function (DateParser) {
    'use strict';
    var validFormats = [
        'YYYY-MM-DDTHH:mm:ssZ',
        'YYYY-MM-DDTHH:mm:SSSZ',
        'YYYY/MM/DD HH:mm:ss ZZ'
    ];
    function processDateStrings(object) {
        var keys = Object.keys(object);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (!object.hasOwnProperty(k)) {
                continue;
            }
            var value = object[k];
            if (!value) {
                continue;
            }
            if (isString(value)) {
                object[k] = attemptStringToDateConversion(value);
                continue;
            }
            if (Array.isArray(value)) {
                object[k] = value.map(function (v) {
                    if (isString(v)) {
                        return attemptStringToDateConversion(v);
                    }
                    return processDateStrings(v);
                });
                continue;
            }
            if (typeof (value) === 'string') {
                continue;
            }
            object[k] = processDateStrings(object[k]);
        }
        return object;
    }
    DateParser.processDateStrings = processDateStrings;
    function processDates(object) {
        var keys = Object.keys(object);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (!object.hasOwnProperty(k)) {
                continue;
            }
            var value = object[k];
            if (!value || isString(value)) {
                continue;
            }
            if (isString(value)) {
                continue;
            }
            if (isDate(value)) {
                attemptDateToStringConversion(value);
                continue;
            }
            if (Array.isArray(value)) {
                object[k] = value.map(function (v) {
                    return isDate(v) ? attemptDateToStringConversion(v) : processDates(v);
                });
                continue;
            }
            if (value instanceof Object) {
                object[k] = processDates(object[k]);
            }
        }
        return object;
    }
    DateParser.processDates = processDates;
    function attemptStringToDateConversion(value) {
        var parsedMoment = moment(value.trim(), validFormats, true);
        return parsedMoment.isValid() ? parsedMoment.toDate() : value;
    }
    function attemptDateToStringConversion(value) {
        return moment(value).format('YYYY-MM-DDTHH:mm:ssZ');
    }
    function isString(value) {
        return typeof (value) === 'string';
    }
    function isDate(value) {
        return value instanceof Date;
    }
})(DateParser = exports.DateParser || (exports.DateParser = {}));
//# sourceMappingURL=dateParser.js.map