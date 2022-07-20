import { CalculError } from "../../index.js";

export var Calcul = {

    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'})
        return num1 + num2;
    },

    subtract(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'})
        return num1 - num2;
    },

    multiply(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'})
        return num1 * num2;
    },

    divide(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'})
        return num1 / num2;
    },

    getRandomNumber(min, max, param) {
        if (typeof min !== 'number' || typeof max !== 'number' ) throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'})
            switch (param) {
              case 'decimal':
                return Math.random() * (max - min) + min;
              case 'round':
                return Math.floor(Math.random() * (max - min) + min);
              default: 
                throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'});
            }
    },

    getSignNumber(num, param) {
        if (typeof num !== 'number') throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'})

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
              throw new CalculError({ message: 'SyntaxError', type: 'Invalid syntax'});
          }
            
    }
}