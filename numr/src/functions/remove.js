export function remove(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('Ce n\'est pas un nombre');
        return num1 - num2;
};