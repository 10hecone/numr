"use strict";
exports.__esModule = true;
exports.PI = void 0;
var PIs = 415926535897932;
// Function PI
function PI(decimal) {
    if (typeof decimal !== 'number' || decimal <= 0 || decimal > 15)
        throw new TypeError('Number is invalid');
    var PI = "3.".concat((PIs.toString().slice(0, decimal)));
    return parseFloat(PI);
}
exports.PI = PI;
