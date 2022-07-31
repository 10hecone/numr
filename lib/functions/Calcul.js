"use strict";
/**
 * Calcul is a variable containing several calculation functions
 * Calcul require property PI for getPerimeter()
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calcul = void 0;
const __Property_js_1 = require("./__Property.js"); // Import PI function from Property
// Calcul variable containing the functions
exports.Calcul = {
    // Addition functions
    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        return num1 + num2;
    },
    // Substract functions
    subtract(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        return num1 - num2;
    },
    // Multiply functions
    multiply(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        return num1 * num2;
    },
    // Divide functions
    divide(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        return num1 / num2;
    },
    // Factorial functions
    factorial(num) {
        if (typeof num !== 'number' || typeof num !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        let res = 1;
        for (let i = 1; i <= num; i++) { // Create a loop to get the factorial
            res *= i;
        }
        ;
        return res; // Return value of boucle
    },
    // getRandomNumber functions
    getRandomNumber(num1, num2, param) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        switch (param) { // param == decimal or round
            case 'decimal':
                return Math.random() * (num2 - num1) + num1; // Return value 0.0000
            case 'round':
                return Math.floor(Math.random() * (num2 - num1) + num1); // Return value 0
            default:
                throw new TypeError('Invalid Type'); // If no parameter error
        }
        ;
    },
    // getSignNumber function
    getSignNumber(num, param) {
        if (typeof num !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        let bool = Math.sign(num); // Use function Math.sign
        switch (param) {
            case 'boolean': // Return true, false or null
                switch (bool) {
                    case 1:
                        return true;
                    case -1:
                        return false;
                    default:
                        return null;
                }
            case 'number': // Return 1, -1 or null
                return bool;
            default:
                throw new TypeError('Number is invalid'); // If no parameter error
        }
        ;
    },
    // getPerimeter function
    getPerimeter(num, param) {
        if (typeof num !== 'number')
            throw new TypeError('Number is invalid'); // Create an error if it is not a number
        switch (param) {
            case 'decimal': // Return 0.00000
                return (0, __Property_js_1.PI)(15) * (num * 2); // Use property PI from import
            case 'round': // Return 0
                return Math.floor((0, __Property_js_1.PI)(15) * (num * 2));
            default: // Return 0.0000 
                return (0, __Property_js_1.PI)(15) * (num * 2);
        }
        ;
    },
};
