import { CalculError } from "../../index.js";
import { PI } from './Property.js';
export var Calcul = {

    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number' })
        return num1 + num2;
    },

    subtract(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})
        return num1 - num2;
    },

    multiply(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})
        return num1 * num2;
    },

    divide(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})
        return num1 / num2;
    },

    difference(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})
        return num1 - num2;
    },

    factorial(num) {
      if (typeof num !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})
      let res = 1
      for (var i = 1; i <= num; i++) {
        res *= i
      }
      return res;
    },

    getRandomNumber(min, max, param) {
        if (typeof min !== 'number' || typeof max !== 'number' ) throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})
            switch (param) {
              case 'decimal':
                return Math.random() * (max - min) + min;
              case 'round':
                return Math.floor(Math.random() * (max - min) + min);
              default: 
                throw new CalculError({ type: 'TypeError', message: 'Invalid Type'});
            }
    },

    getSignNumber(num, param) {
        if (typeof num !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})

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
            throw new CalculError({ type: 'TypeError', message: 'Invalid Number'})
          }        
    },

    getPerimeter(rayon, param) {
      if (typeof rayon !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})

      switch (param) {
        case 'decimal':
          return 2 * PI(64) * rayon;
        case 'round':
          return Math.floor(2 * PI(64) * rayon);
        default: 
          return 2 * PI(64) * rayon;
      }   
    },

    isInteger(x) {
      if (typeof x !== 'number') throw new CalculError({ type: 'SyntaxError', message: 'Invalid Number'})
      return Number.isInteger(x)
    },


}