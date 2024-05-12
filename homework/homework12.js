console.log(`\n======================== Task - 1 ========================`);
const makeNegative = (num) => 0 - Math.abs(num);

console.log(makeNegative(10)); // -> -10
console.log(makeNegative(-7)); // -> -7
console.log(makeNegative(0));  //-> 0
console.log(makeNegative(0.45)); // -> -0.45

console.log(`\n======================== Task - 2 ========================`);
const isSumEvenOrOdd = (...arr) => arr.reduce((sum, el) => sum += el, 0) % 2 !== 0 ? 'odd' : 'even';

console.log(isSumEvenOrOdd(0, 1, 4)); // -> "odd"
console.log(isSumEvenOrOdd(0, -1, -5)); // -> "even"
console.log(isSumEvenOrOdd(0, 0, 0)); // -> "even"
console.log(isSumEvenOrOdd(7, 1, 9)); //  -> "odd"
console.log(isSumEvenOrOdd(1, 1, 1)); //  -> "odd"

console.log(`\n======================== Task - 3 ========================`);
const decimal2 = (arr) => arr.map(x => Number(x.toFixed(2)));

console.log(decimal2([94.356, 8.9752])); //        -> [94.36, 8.98]
console.log(decimal2([76.62, 128.4, 84])); //         -> [76.62, 128.4, 84]
console.log(decimal2([20987, 3.53245, 12.345, 32.9])); //   -> [20987, 3.53, 12.35, 32.9]
console.log(decimal2([])); //      -> []
console.log(decimal2([4.35623, 8.9742])); //      -> [4.36, 8.97]

console.log(`\n======================== Task - 4 ========================`);
// First way
// const myPow = (x, n) => {
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= x;
//   }
//   return res;
// }
// Second way
const myPow = (x, n) => n === 0 ? 1 : n === 1 ? x : n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);

console.log(myPow(3, 3)); // -> 27
console.log(myPow(10, 1)); //  -> 10
console.log(myPow(100, 0)); //  -> 1
console.log(myPow(1, 1)); // -> 1
console.log(myPow(4, 2)); // -> 16
console.log(myPow(0, 0)); //  -> 1
console.log(myPow(5, 3)); // -> 125

console.log(`\n======================== Task - 5 ========================`);
const findLongestWord = (str) => str.trim().split(' ').reduce((long, el) => long.length < el.length ? long = el : long, '');

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //  ->   "jumped"
console.log(findLongestWord("This is a sample string for testing")); // - > "testing"
console.log(findLongestWord("One two ten")); //  -> "One"
console.log(findLongestWord("")); //  -> ""
console.log(findLongestWord("      ")); //   -> ""