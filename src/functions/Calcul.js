import { PI } from './Property.js';

export var Calcul = {

  /**
  * @param {number} num
  * @param {number} num1
  * @param {number} num2
  */

    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid')
        return num1 + num2;
    },

    subtract(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid')
        return num1 - num2;
    },

    multiply(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid')
        return num1 * num2;
    },

    divide(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new TypeError('Number is invalid')
        return num1 / num2;
    },

    factorial(num) {
        if (typeof num !== 'number' || typeof num !== 'number') throw new TypeError('Number is invalid')
      let res = 1
      for (let i = 1; i <= num; i++) {
        res *= i
      }
      return res;
    },

    getRandomNumber(num1, num2, param) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number' ) throw new TypeError('Number is invalid')
            switch (param) {
              case 'decimal':
                return Math.random() * (num2 - num1) + num1;
              case 'round':
                return Math.floor(Math.random() * (num2 - num1) + num1);
              default: 
                throw new TypeError('Invalid Type');
            }
    },

    getSignNumber(num, param) {
        if (typeof num !== 'number') throw new TypeError('Number is invalid')

        let bool = Math.sign(num)

        switch (param) {
            case 'boolean':
                switch (bool) {
                    case 1:
                         return true;
                    case -1:
                         return false;
                    default :
                         return null;
                  }
            case 'number':
              return bool;
            default: 
            throw new TypeError('Number is invalid')
          }        
    },

    getPerimeter(num, param) {
      if (typeof num !== 'number') throw new TypeError('Number is invalid')

      switch (param) {
        case 'decimal':
          return PI(15) * (num * 2);
        case 'round':
          return Math.floor(PI(15) * (num * 2));
        default: 
          return PI(15) * (num * 2);
      }   
    },

}