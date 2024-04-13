console.log(`\n======================== Task - 1 ========================`);
const calculateTotalPrice1 = (obj) => {
    const price = { apple: 2.00, orange: 3.29, mango: 4.99, pineapple: 5.25 };
    let sum = 0;
    for (const key in obj) {
        if (!isNaN(price[key])) sum += obj[key] * price[key];
    }
    return sum;
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); //  -> 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); //  -> 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); //  -> 0
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1, tomato: 1 })); //  -> 12.24

console.log(`\n======================== Task - 2 ========================`);
// There will be %50 discount for every second Apple 
// There will be 1 free Mango if customer gets 3. So, fourth one is free

const calculateTotalPrice2 = (obj) => {
    const price = { apple: 2.00, orange: 3.29, mango: 4.99, pineapple: 5.25 };
    let sum = 0;
    for (let i = 1; i <= obj.apple; i++) {
        if (i % 2 === 0) sum += (price.apple / 2);
        else sum += price.apple;
    }
    for (let i = 1; i <= obj.mango; i++) {
        if (i % 4 !== 0) sum += price.mango;
    }
    for (const key in obj) {
        sum = isNaN(price[key]) ? sum : (key === "apple" || key === "mango") ? sum : sum + (obj[key] * price[key]);
    }
    return sum.toFixed(2);
}
// const calculateTotalPrice2 = (obj) => {
//     const price = { apple: 2.00, orange: 3.29, mango: 4.99, pineapple: 5.25 };
//     let sum = 0;
//     for (const key in obj) {
//         if (!isNaN(price[key])) {
//             if (key === "apple") {
//                 for (let i = 1; i <= obj.apple; i++) {
//                     sum = (i % 2 === 0) ? sum + (price.apple / 2) : sum + price.apple;
//                 }
//             }
//             else if (key === "mango") {
//                 for (let i = 1; i <= obj.mango; i++) {
//                     sum = (i % 4 !== 0) ? sum + price.mango : sum;
//                 }
//             }
//             else sum += (obj[key] * price[key]);
//         }
//     }
//     return sum.toFixed(2);
// }

console.log(calculateTotalPrice2({ apple: 3, mango: 5 })); //  -> 24.96
console.log(calculateTotalPrice2({ apple: 4, pineapple: 8, orange: 3 })); //  -> 57.87
console.log(calculateTotalPrice2({ apple: 0, mango: 0, orange: 0 })); //  -> 0
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 0, mango: 1, tomato: 1 })); //  -> 16.24


console.log(`\n======================== Task - 3 ========================`);
const nthWord = (str, n) => {
    const arr = str.trim().split(' ');
    if (arr.length < n) return "";
    return arr[n - 1];
}

console.log(nthWord("I like programming languages", 2)); //  -> "like"
console.log(nthWord("QA stands for Quality Assurance", 4)); //   -> "Quality"
console.log(nthWord("Hello World", 3)); //  -> ""
console.log(nthWord("Javascript", 1)); //  -> "Javascript”
console.log(nthWord("", 1)); //

console.log(`\n======================== Task - 4 ========================`);
const isArmstrong = (num) => num === num.toString().split('').reduce((sum, el) => sum += Math.pow(el, 3), 0);

console.log(isArmstrong(153)); // -> true
console.log(isArmstrong(123)); // -> false
console.log(isArmstrong(1634)); //  -> true
console.log(isArmstrong(153)); // -> true
console.log(isArmstrong(1111)); //  -> false

console.log(`\n======================== Task - 5 ========================`);
// const reverseNumber = (num) => num.toString().split('').reverse().join('');

const reverseNumber = (num) => {
    if (typeof num !== 'number') return `Agrument '${num}' is not a number`;
    let reverse = 0;
    while (num > 0) {
        reverse = (reverse * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reverseN;
}

console.log(reverseNumber(371)); // -> 173
console.log(reverseNumber(123)); // -> 321
console.log(reverseNumber(12)); //-> 21
console.log(reverseNumber(0)); //> 0
console.log(reverseNumber(111)); // -> 111
console.log(reverseNumber('string'));

console.log(`\n======================== Task - 6 ========================`);
const doubleOrTriple = (arr, bool) => (bool) ? arr.map(el => el * 2) : arr.map(el => el * 3);

console.log(doubleOrTriple([1, 5, 10], true)); // -> [2, 10, 20]
console.log(doubleOrTriple([3, 7, 2], false)); // -> [9, 21, 6]
console.log(doubleOrTriple([-1, -2], true)); // -> [-2, -4]
console.log(doubleOrTriple([0], false)); // -> [0]
console.log(doubleOrTriple([-1, 0, 1], true)); //  -> [-2, 0, 2]

console.log(`\n======================== Task - 7 ========================`);
const splitString = (str, i) => (str.length < i || str.length % i !== 0) ? "" : str.slice(0, i) + ' ' + str.slice(i);

console.log(splitString("JavaScript", 5)); //-> "JavaS cript"
console.log(splitString("Java", 2)); //  -> "Ja va"
console.log(splitString("Automation", 3)); // -> ""
console.log(splitString("Hello", 6)); // -> ""
console.log(splitString("12", 1)); // -> "1 2"