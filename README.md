![Numr](https://cdn.discordapp.com/attachments/986655566178963557/1000781333284540490/numrjssansmaj.png)

Number is a package to facilitate the use of the Math object.

## Description

```js
This package makes it easy to manipulate numbers,

Numr 1.3.3 is the stable release.
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

console.log(`Num1: ${num1} + Num2: ${num2}, Result: ${Calcul.add(num1, num2)}`)
```

## Math Python

```js
A new class has arrived within Numr, the MathPY class. You will be able to use Math methods only available in Python on JavaScript. There are only 4 at the moment.

- MathPY.comb(n, k)
- MathPY.fabs(x)
- MathPY.ldexp(x, i)
- MathPY.dist(p1, p2, q1, q2) // require v0.3.9
```

## Creator

Hecone