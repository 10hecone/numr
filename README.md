![Numr](https://cdn.discordapp.com/attachments/986655566178963557/1000781333284540490/numrjssansmaj.png)

Number is a package to facilitate the use of the Math object.

## Description

```js
This package makes it easy to manipulate numbers,

Numr 1.4.3 is the stable release.
```

## Installation
  
```js

npm  install  numr

```

## Importer

```js
// ES6
import * as numr  from  'numr';
// Commonjs
const numr = require('numr');
```

## Examples

```js
import { Calcul } from  'numr';

let  num1 = Calcul.getRandomNumber(1, 155, 'round')

let  num2 = Calcul.getRandomNumber(1, 155, 'decimal')

console.log(`Num1: ${num1} + Num2: ${num2}, Result: ${num1 + num2}`)
```

## (New) Compressor

```js
A new class has arrived within Numr, the Compressor. You will be able to compress and decompress your texts with the LZW algorithm (other algorithms will come later).

- Compressor.compress("test", {algorithm: "lzw"})
- Compressor.decompress(numr.Compressor.compress("test", {algorithm: "lzw"}), {algorithm: "lzw"})

```

## Math Python

```js
A new class has arrived within Numr, the MathPY class. You will be able to use Math methods only available in Python on JavaScript. There are only 4 at the moment.

- MathPY.comb(n, k)
- MathPY.fabs(x)
- MathPY.ldexp(x, i)
- MathPY.dist(p1, p2, q1, q2)
```

## Creator

Hecone