console.log(`\n======================== Task - 1 ========================`);
const noSpace = (str) => str.trim().split(' ').join('');

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));

console.log(`\n======================== Task - 2 ========================`);
const replaceFirstLast = (str) => (str.trim().length <= 2) ? "" : str.trim().at(-1) + str.trim().slice(1, str.trim().length - 1) + str.trim().at(0);

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global   "));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("   A    "));

console.log(`\n======================== Task - 3 ========================`);
const hasVowel = (str) => str.split('').some(x => "aeiou".includes(x));

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

console.log(`\n======================== Task - 4 ========================`);
const checkAge = (num) => {
    let thisYear = new Date().getFullYear();
    if (num <= thisYear - 120 || num > thisYear) return "AGE IS NOT VALID";
    if (num > thisYear - 16) return "AGE IS NOT ALLOWED";
    return "AGE IS ALLOWED";
}

console.log(checkAge(2015));
console.log(checkAge(2007))
console.log(checkAge(2050));
console.log(checkAge(1920))
console.log(checkAge(1800));

console.log(`\n======================== Task - 5 ========================`);
const averageOfEdges = (...arg) => (Math.max(...arg) + Math.min(...arg)) / 2;

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));

console.log(`\n======================== Task - 6 ========================`);
const noA = (arr) => arr.map(el => el.toLowerCase().startsWith('a') ? "###" : el);

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

console.log(`\n======================== Task - 7 ========================`);
const no3and5 = (arr) => arr.map(el => el % 15 === 0 ? 101 : el % 3 === 0 ? 100 : el % 5 === 0 ? 99 : el);

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

console.log(`\n======================== Task - 8 ========================`);
const countPrimes = (arr) => arr.filter(x => {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}).length;

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));

console.log(`\n======================== Task - 9 ========================`);
const removeDuplicates = (arr) => arr.reduce((outpArr, cur) => outpArr.includes(cur) ? outpArr : [...outpArr, cur], []);

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

console.log(`\n======================== Task - 10 ========================`);
const isDateFormatValid = (str) => {
    const arr = str.trim().split('/');
    if (arr.length !== 3) return false;
    if (arr[0] >= 13) return false;
    if (arr[1] >= 32) return false;
    if (arr[1] >= 31 && (arr[0] === '04' || arr[0] === '06' || arr[0] === '09' || arr[0] === '11')) return false;
    if (!(arr[1] === '29' && arr[0] === '02' && (arr[2] % 4 === 0 && !arr[2] % 100 === 0 || arr[2] % 400 === 0))) return false;
    if (arr[1] > 29 && arr[0] === '02') return false;
    return arr[0].length === 2 && arr[1].length === 2 && arr[2].length === 4 ? true : false;
}

console.log(isDateFormatValid(""));
console.log(isDateFormatValid("15/30/2020"));
console.log(isDateFormatValid("10-30-2020 "));
console.log(isDateFormatValid("10.30.2020"));
console.log(isDateFormatValid("5/30/2020"));
console.log(isDateFormatValid("05/30/2020 "));
console.log(isDateFormatValid("10/2/2020"));
console.log(isDateFormatValid("10/02/2020 "));
console.log(isDateFormatValid("02/29/2018 "));

console.log(`\n======================== Task - 11 ========================`);
// const secondMax = (arr) => arr.length < 1 ? "This array is empty" : arr.length === 1 ? arr[0] : Math.max(...arr.filter(x => x !== Math.max(...arr)));

//Second way
const secondMax = (arr) => {
    if (arr.length < 1)  return "This array is empty";
    else if (arr.length < 2) return arr[0];
    let firstMax;
    let secMax;
    for(const el of arr){
        if (el > firstMax || firstMax === undefined) { 
            secMax = firstMax; 
            firstMax = el; 
        } 
        else if ((el > secMax && el !== firstMax) || secMax === undefined) secMax = el; 
    } 
    return secMax;
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));
console.log(secondMax([]));

console.log(`\n======================== Task - 12 ========================`);
// const secondMin = (arr) => arr.length < 1 ? "This array is empty" : arr.length === 1 ? arr[0] : Math.min(...arr.filter(x => x !== Math.min(...arr)));

// Second way
const secondMin = (arr) => {
    if (arr.length < 1)  return "This array is empty";
    else if (arr.length < 2) return arr[0];
    let firstMin = Infinity;
    let secMin = Infinity;
    for(const el of arr){
        if (el < firstMin) { 
            secMin = firstMin; 
            firstMin = el; 
        } 
        else if (el < secMin && el !== firstMin) secMin = el; 
    } 
    return secMin;
}
 
console.log(secondMin([7, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));
console.log(secondMin([]));

console.log(`\n======================== Task - 13 ========================`);
const mostRepeated = (arr) => {
    if (arr.length < 1) return 'This array is empty';
    else if (arr.length === 1) return arr[0];
    let max = 0;
    let count, element;
    for (let i = 0; i < arr.length - 1; i++) {
        count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++;
        }
        if (max < count) {
            max = count;
            element = arr[i];
        }
    }
    return element;
}

console.log(mostRepeated([4, 7, 23, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));
console.log(mostRepeated([]));
