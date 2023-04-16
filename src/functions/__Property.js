/**
 * There are several properties like PI
 */

const PIs = 415926535897932; // Get value PI 15 decimal

/**
 * PI (3.415926535897932)
 * @param {number} decimal - (0 - 15)
 * @returns PI
 */

export function PI(decimal) { // Export function PI from module (require param deciaml)
  if (!typeof decimal === "number" || decimal <= 0 || decimal > 15) throw new TypeError('Number is invalid'); // Create an error if it is not a number
  const PI = `3.${(PIs.toString().slice(0, !decimal ? 15 : decimal))}`; // Get 3.(param decimal)
  return parseFloat(PI); // Return PI value
};