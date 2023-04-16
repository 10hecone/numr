import * as numr from '../src/index.js';

console.log(`
  Compressor:
    Compress: [${numr.Compressor.compress("test", {algorithm: "lzw"})}]
    Decompress: ${numr.Compressor.decompress(numr.Compressor.compress("test", {algorithm: "lzw"}), {algorithm: "lzw"})}
  PI:
    Value: ${numr.PI(15)}
  Calcul:
     ${numr.Calcul.factorial(3)}
     ${numr.Calcul.getPerimeter(3, 'round')}
     ${numr.Calcul.getPerimeter(3, 'decimal')}
     ${numr.Calcul.getRandomNumber(1, 4, 'round')}
     ${numr.Calcul.getRandomNumber(1, 4, 'decimal')}
     ${numr.Calcul.getSignNumber(3, 'boolean')}
     ${numr.Calcul.getSignNumber(3, 'number')}
`)
