"use strict";
/**
 * There are several properties like PI
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
let PIs = 415926535897932; // Get value PI 15 decimal
// Function PI
function PI(decimal) {
    if (typeof decimal !== 'number' || decimal <= 0 || decimal > 15)
        throw new TypeError('Number is invalid'); // Create an error if it is not a number
    let PI = `3.${(PIs.toString().slice(0, decimal))}`; // Get 3.(param decimal)
    return parseFloat(PI); // Return PI value
}
exports.PI = PI;
;
