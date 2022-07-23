# Numr!

Numr est un package permettant de faciliter l'utilisation de l'object Math.

## Description

```js
Ce  package  permet  de  faciliter  la  manipulation  des  nombres,

Numr  0.3.4 est  la  version  stable.
```

## Installation
  
```js

npm  install  numr

```

## Importer

```js
// ES6
import  * as numr  from  'numr';
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
Une nouvelle classe est arrivé au sein de Numr, la classe MathPY. Vous pourrez utiliser des méthodes seulement disponible en Python sur JavaScript. Il en existe seulement 3 pour le moment.

- MathPY.comb(n, k)
- MathPY.fabs(x)
- MathPY.ldexp(x, i)
```

## Creator

![Hecone](https://media.discordapp.net/attachments/747623504681238528/999718283831947365/unknown.png)