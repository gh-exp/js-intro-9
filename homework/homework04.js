const { generateRandomNumber } = require('../utils/MathHelper');

console.log(`\n======================== Task - 1 ========================`);
for (i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}

console.log(`\n======================== Task - 2 ========================`);
for (i = 1; i <= 50; i++) {
    if (i % 6 === 0) console.log(i);
}

console.log(`\n======================== Task - 3 ========================`);
for (i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
}

console.log(`\n======================== Task - 4 ========================`);
for (i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i * i}`);
}
console.log(`\n======================== Task - 5 ========================`);
let sum = 0;
for (i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

console.log(`\n======================== Task - 6 ========================`);
let rn = generateRandomNumber(1, 10);
let sum1 = 1;
let result = rn + "! = ";
for (i = rn; i >= 1; i--) {
    sum1 *= i;
    result += (i + " x ");
}
console.log(`${rn}! = ${sum1}`);
console.log(`${result.slice(0, result.length - 2)}= ${sum1}`);

console.log(`\n======================== Task - 7 ========================`);
let randomNumber;
let attemts = 0;
do {
    randomNumber = generateRandomNumber(1, 100);
    attemts++;
} while (randomNumber % 5 !== 0);
console.log(`The random number is ${randomNumber} and it took ${attemts} attempt/s to generate it.`);

console.log(`\n======================== Task - 8 ========================`);
let arr = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(arr);
console.log(arr.sort());

console.log(`\n======================== Task - 9 ========================`);
let arr1 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(arr1);
console.log(arr1.includes('Pluto'));


console.log(`\n======================== Task - 10 ========================`);
let arr2 = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(arr2.sort());
console.log(arr2.includes('Garfield') && arr2.includes('Felix'));

console.log(`\n======================== Task - 11 ========================`);
let arr3 = [10.5, 20.75, 70, 80, 15.75];
console.log(arr3);
for (const num of arr3) {
    console.log(num);
}

console.log(`\n======================== Task - 12 ========================`);
let arr4 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let countBP = 0;
let countBoP = 0;
console.log(arr4);
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i].toLowerCase().startsWith('b') || arr4[i].toLowerCase().startsWith('p')) countBP++;
    if (arr4[i].toLowerCase().includes('book') || arr4[i].toLocaleLowerCase().includes('pen')) countBoP++;
}
console.log(`Elements starting with 'B' or 'P' = ${countBP}`);
console.log(`Elements starting with 'book' or 'pen' = ${countBoP}`);

console.log(`\n======================== Task - 13 ========================`);
let arr5 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
let countM10 = 0;
let countL10 = 0;
let count10 = 0;
console.log(arr5);
for (const num of arr5) {
    if (num > 10) countM10++;
    else if (num < 10) countL10++;
    else count10++;
}
console.log(`Elements that are more than 10 = ${countM10}`);
console.log(`Elements that are less than 10 = ${countL10}`);
console.log(`Elements that are 10 = ${count10}`);

console.log(`\n======================== Task - 14 ========================`);
let arr6 = [5, 8, 13, 1, 2];
let arr7 = [9, 3, 67, 1, 0];
let arr8 = [];
console.log('1st array is =', arr6);
console.log('2nd array is =', arr7);
if (arr6.length !== arr7.length) console.log('Input arrays different length');
else {
    for (let i = 0; i < arr6.length; i++) {
        arr8.push(Math.max(arr6[i], arr7[i]));
    }
    console.log('3nd array is =', arr8);
}

console.log(`\n======================== Task - 15 ========================`);
function firstDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return array[i];

        }
    }
    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));

console.log(`\n======================== Task - 16 ========================`);
function getDuplicates(array) {
    let arrayOut = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && !arrayOut.includes(array[i])) arrayOut.push(array[i]);
        }
    }
    return arrayOut;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));

console.log(`\n======================== Task - 17 ========================`);
function reverseStringWords(str) {
    let strOut = '';
    let word = '';
    str = str.trim();
    for (let i = 0; i < str.length; i++) {
        word += str[i];
        if (str[i] === ' ') {
            strOut += [...word.trim()].reverse().join("") + ' ';
            word = '';
        }
    }
    strOut += [...word].reverse().join("");
    return strOut;
}

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));

console.log(`\n======================== Task - 18 ========================`);
function getEvens(n1, n2) {
    let arr = [];
    for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
        if (i % 2 === 0) arr.push(i);
    }
    return arr;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

console.log(`\n======================== Task - 19 ========================`);
function getMultipleOf5(n1, n2) {
    let arr = [];
    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            if (i % 5 === 0) arr.push(i);
        }
    }
    else {
        for (let i = n1; i >= n2; i--) {
            if (i % 5 === 0) arr.push(i);
        }
    }
    return arr;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

console.log(`\n======================== Task - 20 ========================`);
function fizzBuzz(n1, n2) {
    let arr = [];
    for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
        if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
        else if (i % 3 === 0) arr.push('Fizz');
        else if (i % 5 === 0) arr.push('Buzz');
        else arr.push(i);
    }
    return arr;
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));