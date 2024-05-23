console.log(`\n======================== Task - 1 ========================`);
// First way
// const repeatingX = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str.toLowerCase()[i] === "x" && str.toLowerCase()[i + 1] === 'x') return true;
//   }
//   return false;
// }
//Second way

const repeatingX = (str) => str.toLowerCase().split('').some((el, i) => el === 'x' && str[i + 1] === 'x');

console.log(repeatingX("xTechxGlobalx")); //  -> false
console.log(repeatingX("Hello Xx World")); //  -> true
console.log(repeatingX("x x")); //   -> false
console.log(repeatingX("")); //    -> false
console.log(repeatingX("xxxxx")); //           -> true

console.log(`\n======================== Task - 2 ========================`);
const isPerfectSquare = (num) => Math.sqrt(num) === Math.floor(Math.sqrt(num));

console.log(isPerfectSquare(25)); //  -> true
console.log(isPerfectSquare(24)); // -> false
console.log(isPerfectSquare(0)); // -> true
console.log(isPerfectSquare(1)); // -> true
console.log(isPerfectSquare(-1)); //  -> false
console.log(isPerfectSquare(144)); // -> true

console.log(`\n======================== Task - 3 ========================`);
const convertTemperature = (t, str) => str === "Celsius" ? (t * 9 / 5) + 32 : str === "Fahrenheit" ? (t - 32) * 5 / 9 : "Error imputs t systems"

console.log(convertTemperature(100, 'Celsius')); //  -> 212
console.log(convertTemperature(32, 'Fahrenheit')); //-> 0
console.log(convertTemperature(0, 'Celsius')); //-> 32
console.log(convertTemperature(212, 'Fahrenheit')); // -> 100
console.log(convertTemperature(-40, 'Celsius')); //  -> -40
console.log(convertTemperature(-40, 'Fahrenheit')); // -> -40

console.log(`\n======================== Task - 4 ========================`);
const sumOfEvenNumbers = (arr) => arr.reduce((sum, el) => el % 2 === 0 ? sum += el : sum, 0);

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //   -> 30
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])); //   -> 110
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])); //  -> 0
console.log(sumOfEvenNumbers([])); //     -> 0
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5])); //   -> 6
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50])); //   -> 150

console.log(`\n======================== Task - 5 ========================`);
// First way
// const capsOdds = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) arr[i] = arr[i].toUpperCase();
//   }
//   return arr;
// }
// Second way

const capsOdds = (arr) => arr.map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el);

console.log(capsOdds(["Hello", "World"])); //-> ["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"])); //-> ["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); //-> ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
console.log(capsOdds([])); //-> []
console.log(capsOdds(["John !@#$%", "^&*() Doe"])); //-> ["John !@#$%", "^&*() DOE"]