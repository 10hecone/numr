import { PI } from './__Property.js'; // Import PI function from Property

// Calcul variable containing the functions
export var Calcul = {

  // Addition functions
  add(num1: number, num2: number) { // Calcul.add(3, 1) => 4
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number
    return num1 + num2;
  },

  // Substract functions
  subtract(num1: number, num2: number) { // Calcul.subtract(3, 1) => 2
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number
    return num1 - num2;
  },

  // Multiply functions
  multiply(num1: number, num2: number) { // Calcul.multiply(3, 2) => 6
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number
    return num1 * num2;
  },

  // Divide functions
  divide(num1: number, num2: number) { // Calcul.divide(4, 2) => 2
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number
    return num1 / num2;
  },

  // Factorial functions
  factorial(num: number) { // Calcul.factorial(3) => (3x2x1) => 6
    if (typeof num !== 'number' || typeof num !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number
    let res = 1
    for (let i = 1; i <= num; i++) { // Create a loop to get the factorial
      res *= i
    }
    return res; // Return value of boucle
  },

  // getRandomNumber functions
  getRandomNumber(num1: number, num2: number, param: string) { // Calcul.getRandomNumber(1, 3, <decimal or round>) => Random number between 1 and 3
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number
    switch (param) { // param == decimal or round
      case 'decimal':
        return Math.random() * (num2 - num1) + num1; // Return value 0.0000
      case 'round':
        return Math.floor(Math.random() * (num2 - num1) + num1); // Return value 0
      default:
        throw new TypeError('Invalid Type'); // If no parameter error
    }
  },

  // getSignNumber function
  getSignNumber(num: number, param: string) { // Calcul.getSignNumber(4, <boolean or number>) => (boolean = true) (number = 1) 
    if (typeof num !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number

    let bool = Math.sign(num) // Use function Math.sign

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
        throw new TypeError('Number is invalid')  // If no parameter error
    }
  },

  // getPerimeter function
  getPerimeter(num: number, param: string) { // Calcul.getPerimeter(perimeter, <decimal or round>) => (PI(15) * (num * 2)) => value
    if (typeof num !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number

    switch (param) {
      case 'decimal': // Return 0.00000
        return PI(15) * (num * 2); // Use property PI from import
      case 'round': // Return 0
        return Math.floor(PI(15) * (num * 2));
      default: // Return 0.0000 
        return PI(15) * (num * 2);
    }
  },

}