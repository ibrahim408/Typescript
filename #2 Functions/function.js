"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addString = void 0;
function addNumber(a, b) {
    return a + b;
}
exports["default"] = addNumber;
var addString = function (str1, str2) {
    if (str2 === void 0) { str2 = "c"; }
    return "".concat(str1, " ").concat(str2);
};
exports.addString = addString;
var format = function (title, param) {
    return "S{title} ".concat(param);
};
exports.format = format;
var printFormat = function (title, param) {
    return console.log("S{title} ".concat(param));
};
exports.printFormat = printFormat;
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
exports.introduce = introduce;
// useful to check when ts code used with js
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.firstName) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.lastName) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
