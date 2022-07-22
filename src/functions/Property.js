  /**
  * @param {string} decimal
  */

let PIs = 
  415926535897932

export function PI(decimal) {
    if (typeof decimal !== 'number' || decimal <= 0 || decimal > 15) throw new TypeError('Number is invalid');
    let PI = `3.${(PIs.toString().slice(0, decimal))}`
    return parseFloat(PI)
}