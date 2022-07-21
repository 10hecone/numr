# Numr!

Numr est un package permettant de faciliter l'utilisation de l'object Math.

## Description

```js
Ce package permet de faciliter la manipulation des nombres, 

Numr 0.2.1 est la version stable.
```

## Installation

```js
npm install numr
```

## Importer

```js
// Using ES6 imports only
import numr from 'numr';
```

## Examples

```js 
import { Calcul } from 'numr'; 

let num1 = Calcul.getRandomNumber(1, 155, 'round') 
let num2 = Calcul.getRandomNumber(1, 155, 'decimal')

console.log(`Num1: ${num1} + Num2: ${num2}, Result: ${Calcul.add(num1, num2)}`)
```