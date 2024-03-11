const { CharacterHelper } = require('..//utils/CharacterHelper');

console.log(`\n======================== Task - 1 ========================`);
const countPos = (arr) => arr.reduce((count, el) => el > 0 ? count + 1 : count, 0);

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

console.log(`\n======================== Task - 2 ========================`);
const countA = (str) => str.split('').reduce((count, el) => el.toLowerCase() === 'a' ? count + 1 : count, 0);

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

console.log(`\n======================== Task - 3 ========================`);
const countVowels = (str) => str.split('').reduce((count, el) => "aeiou".includes(el.toLowerCase()) ? count + 1 : count, 0);

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));


console.log(`\n======================== Task - 4 ========================`);
const countConsonants = (str) => str.trim().split('').filter(x => x !== " ").filter(x => !"aeiou".includes(x.toLowerCase())).length;

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

console.log(`\n======================== Task - 5 ========================`);
const countWords = (str) => str.trim().split('').filter(x => x === " ").length + 1;

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.   "));
console.log(countWords("1 2 3 4"));

console.log(`\n======================== Task - 6 ========================`);
const factorial = (numb) => {
    let factorial = 1;
    for (let i = numb; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

console.log(`\n======================== Task - 7 ========================`);
const isPalindrome = (str) => (str.trim().toLowerCase() === str.trim().toLowerCase().split('').reverse().join(''));

/* Second method
const isPalindrome = (str) => {
    str = str.trim().toLowerCase();
    let middle = Math.floor(str.length / 2);
    for (let i = 0; i <= middle; i++) {
        if ((str.at(i) !== str.at(-1 - i))) return false;
    }
    return true;
}
*/
console.log(isPalindrome("Hello "));
console.log(isPalindrome("Kayak "));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

console.log(`\n======================== Task - 8 ========================`);
const countMultipleWords = (arr) => arr.reduce((count, el) => (el.trim().length !== el.trim().split('').filter(x => x !== ' ').join('').length) ? count + 1 : count, 0);

/* Second method
const countMultipleWords = (arr) => {
    let count = 0;
    let countSpace = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
        countSpace = 0
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === " ") countSpace++;
        }
        if (countSpace !== 0) count++;
    }
    return count;
}
*/
console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));

console.log(`\n======================== Task - 9 ========================`);
const count3OrLess = (str) => str.trim().split(' ').reduce((count, el) => (el.length <= 3 && el !== "") ? count + 1 : count, 0);

/* Second method
const count3OrLess = (str) => {
    let strAsArr = str.trim().split(" ");
    let count = 0;
    for (const elem of strAsArr) {
        if (elem !== "" && elem.length <= 3) count++;
    }
    return count;
}
*/
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

console.log(`\n======================== Task - 10 ========================`);
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(133));

console.log(`\n======================== Task - 11 ========================`);

const add = (arr1, arr2) => {
    const arr3 = [];
    if (arr1.length >= arr2.length) {
        for (let i = 0; i <= arr2.length - 1; i++) {
            arr3.push(arr1[i] + arr2[i]);
        }
        return [...arr3, ...arr1.slice(arr2.length)];
    }
    else {
        for (let i = 0; i <= arr1.length - 1; i++) {
            arr3.push(arr1[i] + arr2[i]);
        }
        return [...arr3, ...arr2.slice(arr1.length)];
    }
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

console.log(`\n======================== Task - 12 ========================`);
const removeExtraSpaces = (str) => {
    str = str.trim();
    while (str.includes("  ")) {
        str = str.replaceAll("  ", " ");
    }
    return str;
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

console.log(`\n======================== Task - 13 ========================`);
const findClosestTo10 = (arr) => {
    return arr.sort((a, b) => a - b).filter((x) => (x !== 10)).reduce((prev, curr) => (Math.abs(curr - 10) < Math.abs(prev - 10) ? curr : prev));
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));


console.log(`\n======================== Task - 14 ========================`);
const isEmailValid = (str) => {
    const arr = str.split('');
    if (arr.filter(x => x.includes(' ')).length !== 0 || (arr.filter(x => x.includes('@')).length !== 1)) return false;
    if (arr.findIndex(x => x === '@') < 2 || arr.findIndex(x => x === '.') >= arr.length - 2) return false;
    if (arr.findIndex(x => x === '.') - arr.findIndex(x => x === '@') <= 2) return false;
    return true;
}

console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("john doe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

console.log(`\n======================== Task - 15 ========================`);
const isPasswordValid = (str) => {
    const arr = str.split('');
    const output = [];
    output.push(!(arr.length < 8 || str.length > 16));
    output.push(arr.some(el => CharacterHelper.isDigit(el)));
    output.push(arr.some(el => CharacterHelper.isLowerCase(el)));
    output.push(arr.some(el => CharacterHelper.isUpperCase(el)));
    output.push(arr.some(el => CharacterHelper.isSpecial(el)));
    output.push(!arr.some(el => CharacterHelper.isSpace(el)));
    return output.every(el => el === true);
}

console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));