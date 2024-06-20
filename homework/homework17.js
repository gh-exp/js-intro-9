
console.log(`\n======================== Task - 1 ========================`);
const findMedian = (arr1, arr2) => {
  const arr3 = [...arr1, ...arr2].sort((a, b) => a - b);
  let midl = arr3.length / 2;
  return arr3.length % 2 === 0 ? (arr3[midl] + arr3[midl - 1]) / 2 : arr3[Math.floor(midl)];
}

console.log(findMedian([1, 3], [2])); //  -> 2
console.log(findMedian([1, 2], [3, 4])); //  -> 2.5
console.log(findMedian([4], [3])); //  -> 3.5
console.log(findMedian([4], [])); //  -> 4
console.log(findMedian([0], [0, 1])); //  -> 0

console.log(`\n======================== Task - 2 ========================`);
const calculateFactorial = (n) => n < 0 ? "Error: negative number" : n <= 1 ? 1 : n * calculateFactorial(n - 1);

console.log(calculateFactorial(-20)); //  -> 1
console.log(calculateFactorial(1)); //  -> 1
console.log(calculateFactorial(5)); // -> 120
console.log(calculateFactorial(6)); // -> 720
console.log(calculateFactorial(10)); // -> 3628800
console.log(calculateFactorial(4)); // -> 24


console.log(`\n======================== Task - 3 ========================`);
// First way
// const calculateGCD = (n1, n2) => {
//   for (let i = Math.max(n1, n2); i > 0; i--) {
//     if (n1 % i === 0 && n2 % i === 0) return i
//   }
// }
//Second way
const calculateGCD = (n1, n2) => n2 === 0 ? n1 : calculateGCD(n2, n1 % n2);

console.log(calculateGCD(8, 12)); // -> 4
console.log(calculateGCD(17, 5)); // -> 1
console.log(calculateGCD(48, 18)); //  -> 6
console.log(calculateGCD(0, 5)); // -> 5
console.log(calculateGCD(21, 14)); // -> 7
console.log(calculateGCD(60, 48)); //  -> 12

console.log(`\n======================== Task - 4 ========================`);
// First Way
// const calculateLCM = (n1, n2) => {
//   for (let i = Math.max(n1, n2); i > 0; i--) {
//     if (n1 % i === 0 && n2 % i === 0) return Math.abs(n1 * n2) / i
//   }
// }
// Second Way LCM(n1, n2) = |n1 * n2| / GDC(n1, n2)
const calculateLCM = (n1, n2) => Math.abs(n1 * n2) / calculateGCD(n1, n2);

console.log(calculateLCM(8, 12));  // -> 24
console.log(calculateLCM(17, 5));  // -> 85
console.log(calculateLCM(48, 18));  // -> 144
console.log(calculateLCM(0, 5));  // -> 0
console.log(calculateLCM(21, 14));  // -> 42
console.log(calculateLCM(60, 48));  // -> 240
