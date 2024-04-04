const { CharacterHelper } = require('..//utils/CharacterHelper');

console.log(`\n======================== Task - 1 ========================`);
// Version with charCodeAt()
// const hasLowerCase = (str) => 0 !== str.trim().split('').filter(el => 97 <= el.charCodeAt(0) && el.charCodeAt(0) <= 122).length;

const hasLowerCase = (str) => 0 < str.trim().split('').filter(el => 'a' <= el && el <= 'z').length;


console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));

console.log(`\n======================== Task - 2 ========================`);
const noZero = (arr) => arr.filter(x => x !== 0);

console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));

console.log(`\n======================== Task - 3 ========================`);
const numberAndSquare = (arr) => arr.map(x => [x, x * x]);

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));

console.log(`\n======================== Task - 4 ========================`);
const containsValue = (arr, str) => arr.reduce((res, el) => el === str ? res = true : res, false);

// Second way
// const containsValue = (arr, str) => arr.filter(el => el === str).length > 0;

console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));

console.log(`\n======================== Task - 5 ========================`);
// Version  with the "don't move" symbol
const reverseSentence = (str) => {
    if (!str.trim().includes(' ')) return `There is not enough words!`;

    let lSymbol;
    if (CharacterHelper.isSpecial(str.at(-1))) {
        lSymbol = str.at(-1);
        str = str.slice(0, -1);
    }
    else lSymbol = '';

    const arr = str.trim().split(' ');
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    [arr[0]] = [arr[0][0].toUpperCase() + arr[0].slice(1)];
    [arr[arr.length - 1]] = [arr[arr.length - 1][0].toLowerCase() + arr[arr.length - 1].slice(1)];

    return arr.join(' ') + lSymbol;
}

// Original version
// const reverseSentence = (str) => {
//     if (!str.trim().includes(' ')) return `There is not enough words!`;
//     const arr = str.trim().split(' ');
//     [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
//     [arr[0]] = [arr[0][0].toUpperCase() + arr[0].slice(1)];
//     [arr[arr.length - 1]] = [arr[arr.length - 1][0].toLowerCase() + arr[arr.length - 1].slice(1)];
//     return arr.join(' ');
// }

console.log(reverseSentence("Hello"));
console.log(reverseSentence("Javascript is fun!")); //		-> "Fun is javascript"
console.log(reverseSentence("This is a sentence.")); // 	-> "Sentence a is this"

console.log(`\n======================== Task - 6 ========================`);
// With CharacterHelper functions 
// const removeStringSpecialsDigits = (str) => str.trim().split('').filter(x => (!(CharacterHelper.isDigit(x) || CharacterHelper.isSpecial(x)))).join('');

const removeStringSpecialsDigits = (str) => str.trim().split('').filter(x => (' ' === x || ('a' <= x.toLowerCase() && x.toLowerCase() <= 'z'))).join('');

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); //"Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));

console.log(`\n======================== Task - 7 ========================`);
const removeArraySpecialsDigits = (arr) => arr.map(x => removeStringSpecialsDigits(x));

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));

console.log(`\n======================== Task - 8 ========================`);
const getCommons = (arr1, arr2) => arr1.filter(x => arr2.includes(x)).reduce((res, cur) => res.includes(cur) ? res : [...res, cur], []);

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]));

console.log(`\n======================== Task - 9 ========================`);
const noXInVariables = (arr) => arr.map(el => typeof el === 'number' ? el : el.split('').filter(x => x.toLowerCase() !== 'x').join('')).filter(i => i.length !== 0);

console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));