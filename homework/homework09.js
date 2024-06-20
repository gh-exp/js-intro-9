console.log(`\n======================== Task - 1 ========================`);
const fizzBuzz1 = (n) => n % 15 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n;

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

console.log(`\n======================== Task - 2 ========================`);
const fizzBuzz2 = (n) => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(fizzBuzz1(i));
    }
    return arr;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));

console.log(`\n======================== Task - 3 ========================`);
const findSumNumbers = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) || str[i] === '0') {
            for (let j = i + 1; j <= str.length; j++) {
                if (!(Number(str[j]) || str[j] === '0')) {
                    arr.push(str.slice(i, j));
                    i = j;
                    break;
                }
            }
        }
    }
    return arr.reduce((res, el) => res += Number(el), 0);
}

console.log(findSumNumbers("abc$")); // -> 0
console.log(findSumNumbers("a1b4c 6")); // -> 11
console.log(findSumNumbers("ab110c045d")); // -> 155
console.log(findSumNumbers("525")); // -> 525
console.log(findSumNumbers("3 for 10 dollars"));// -> 13

console.log(`\n======================== Task - 4 ========================`);
const findBiggestNumber = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) || str[i] === '0') {
            for (let j = i + 1; j <= str.length; j++) {
                if (!(Number(str[j]) || str[j] === '0')) {
                    arr.push(str.slice(i, j));
                    i = j;
                    break;
                }
            }
        }
    }
    return arr.length < 1 ? 0 : Math.max(...arr);
}

// findBiggestNumber = (str) => Math.max(...str.split(/\D+/))

console.log(findBiggestNumber("abc$")); // -> 0
console.log(findBiggestNumber("a1b4c 6")); // -> 6
console.log(findBiggestNumber("ab110c045d")); // -> 110
console.log(findBiggestNumber("525")); // -> 525
console.log(findBiggestNumber("3 for 10 dollars")); // -> 10

console.log(`\n======================== Task - 5 ========================`);
const countOccurrencesOfCharacters = (str) => {
    const arr = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            if (str[i] === str[j]) count += 1;
            else {
                arr.push(count + str[i]);
                count = 1;
                i = j - 1;
                break;
            }
        }
    }
    return arr.join('');
}

console.log(countOccurrencesOfCharacters("")); // 		-> ""
console.log(countOccurrencesOfCharacters("abc")); // 	-> "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca")); // 	-> "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")); // 	-> "2a2A1a”
console.log(countOccurrencesOfCharacters("www")); // 	-> "3w"

console.log(`\n======================== Task - 6 ========================`);
const fibonacciSeries1 = (n) => {
    const fibonacci = (n) => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(fibonacci(i));
    }
    return arr;
}

console.log(fibonacciSeries1(3)); // 	-> [0, 1, 1]
console.log(fibonacciSeries1(5)); // 	-> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); // 	-> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // 	-> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // 	-> [0]
console.log(fibonacciSeries1(2)); // 

console.log(`\n======================== Task - 7 ========================`);
const fibonacciSeries2 = (n) => {
    const fibonacci = (n) => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(fibonacci(i));
    }
    return arr[arr.length - 1];
}

console.log(fibonacciSeries2(2)); // 	-> 1
console.log(fibonacciSeries2(4)); // 	-> 2
console.log(fibonacciSeries2(8)); // 	-> 13
console.log(fibonacciSeries2(9)); // 	-> 21
console.log(fibonacciSeries2(1)); // 	-> 0

console.log(`\n======================== Task - 8 ========================`);
// const findUniques = (arr1, arr2) => [...arr1.filter(x => arr2.indexOf(x) < 0), ...arr2.filter(x => !arr1.includes(x))].reduce((res, el) => res.includes(el) ? res : [...res, el], []);

const findUniques = (arr1, arr2) => {
    const arr3 = arr1.filter(x => arr2.indexOf(x) < 0);
    const arr4 = arr2.filter(x => !arr1.includes(x));
    return [...arr3, ...arr4].reduce((res, el) => res.includes(el) ? res : [...res, el], []);
}

console.log(findUniques([], [])); //		-> []
console.log(findUniques([], [1, 2, 3, 2])); // 	-> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); //	-> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); //	-> []
console.log(findUniques([-1, -2], [1, 2])); //	-> [-1, -2, 1, 2]

console.log(`\n======================== Task - 9 ========================`);
const isPowerOf3 = (n) => Number.isInteger(Math.log10(n) / Math.log10(3));

console.log(isPowerOf3(1)); //-> true
console.log(isPowerOf3(2)); //-> false
console.log(isPowerOf3(3)); //-> true
console.log(isPowerOf3(27)); //	-> true
console.log(isPowerOf3(100)); // 	-> false
console.log(isPowerOf3(81)); //	-> true
console.log(isPowerOf3(9)); //-> true
