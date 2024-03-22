console.log(`\n======================== Task - 1 ========================`);
const hasUpperCase = (str) => 0 !== str.trim().split('').filter(el => 65 <= el.charCodeAt(0) && el.charCodeAt(0) <= 90).length;

/* Second way
const hasUpperCase = (str) => 0 !== (str.trim().split('').reduce((result, el) => (65 <= el.charCodeAt(0) && el.charCodeAt(0) <= 90)? [...result, true] : result, []).length);
// Third way 
const hasUpperCase = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (65 <= str.charCodeAt(i) && str[i].charCodeAt(0) <= 90) return true;
    }
    return false;
}
*/
console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

console.log(`\n======================== Task - 2 ========================`);
const noDigit = (str) => str.trim().split('').filter(el => !(48 <= el.charCodeAt(0) && el.charCodeAt(0) <= 57)).join('');

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

console.log(`\n======================== Task - 3 ========================`);
const noVowel = (str) => str.trim().split('').filter(el => !('aeouiAEOUI'.includes(el))).join('');

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

console.log(`\n======================== Task - 4 ========================`);
const no13 = (arr) => arr.map(el => el === 13 ? 0 : el);

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));
console.log(no13([]));

console.log(`\n======================== Task - 5 ========================`);
const middleInt = (n1, n2, n3) => [n1, n2, n3].sort((a, b) => a - b)[1];
// Second way 
// const middleInt = (...arr) => arr.sort((a, b) => a - b)[1];

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

console.log(`\n======================== Task - 6 ========================`);
const sumOfDigits = (str) => str.split('').reduce((sum, el) => ('123456789'.includes(el)) ? sum += Number(el) : sum, 0);

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

console.log(`\n======================== Task - 7 ========================`);
const arrFactorial = (arr) => {
    const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
    return arr.map(el => factorial(el));
}

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));


console.log(`\n======================== Task - 8 ========================`);
const categorizeCharacters = (str) => {
    const result = ['', '', ''];
    for (let i = 0; i < str.length; i++) {
        if ('0123456789'.includes(str[i])) result[1] += str[i];
        else if (97 <= str[i].toLowerCase().charCodeAt(0) && str[i].toLowerCase().charCodeAt(0) <= 122) result[0] += str[i];
        else result[2] += str[i];
    }
    return result;
}
// letters at index of 0, 65-90, 97-122
// digits at index of 1  
// specials at index of 2. 

console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12DDDb$%3cgf %"));