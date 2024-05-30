console.log(`\n======================== Task - 1 ========================`);
const toCamelCase = (str) => str.trim().split(' ').filter(x => x).map((el, i) => (i === 0) ? el.toLowerCase() : el[0].toUpperCase() + el.slice(1).toLowerCase()).join('');

console.log(toCamelCase("first name")); // -> "firstName"
console.log(toCamelCase("last name")); //-> "lastName"
console.log(toCamelCase("  ZIP CODE")); // -> "zipCode"
console.log(toCamelCase("I Learn Java Script")); //  -> "iLearnJavaScript"
console.log(toCamelCase("helloWorld")); //  -> “helloworld”

console.log(`\n======================== Task - 2 ========================`);
const toSnakeCase = (str) => str.trim().split(' ').filter(x => x).map(el => el.toLowerCase()).join('_');

console.log(toSnakeCase("first name")); //  -> "first_name"
console.log(toSnakeCase("last    name")); // -> "last_name"
console.log(toSnakeCase("    I love Java Script")); // -> "i_love_java_script"
console.log(toSnakeCase("already_snake_case")); // -> "already_snake_case"
console.log(toSnakeCase("hello")); //  -> "hello"

console.log(`\n======================== Task - 3 ========================`);
const alternatingCases = (str) => str.trim().split(' ').map(el => el.split('').map((el, i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ');

console.log(alternatingCases("Hello")); //   -> "HeLlO"
console.log(alternatingCases("basketball")); //    -> "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")); //     -> "TeCh GlObAl"
console.log(alternatingCases("")); //   -> ""
console.log(alternatingCases("123!@#aB")); //   -> "123!@#Ab"

console.log(`\n======================== Task - 4 ========================`);
//First way array method
// const isNeutral = (str1, str2) => {
//   if (str1.length !== str2.length) return `Two sring of different length`;
//   const arr1 = str1.split('');
//   const arr2 = str2.split('');
//   const arr3 = [];
//   for (let i = 0; i < str1.length; i++) {
//     if (arr1[i] === '-' && arr2[i] === '-') arr3.push('-');
//     else if (arr1[i] === '+' && arr2[i] === '+') arr3.push('+');
//     else arr3.push("0")
//   }
//   return arr3.join('')
// }
//Second way string method
// const isNeutral = (str1, str2) => {
//   if (str1.length !== str2.length) return `Two sring of different length`;
//   let res = '';
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] === '+' && str2[i] === '+') res += '+';
//     else if (str1[i] === '-' && str2[i] === '-') res += '-';
//     else res += '0';
//   }
//   return res;
// }
// Third way
const isNeutral = (str1, str2) => str1.split('').map((el, i) => (el === '+' && str2[i] === '+') ? '+' : (el === '-' && str2[i] === '-') ? '-' : '0').join('');

console.log(isNeutral("-", "+")); // -> "0"
console.log(isNeutral("-+", "-+")); // -> "-+"
console.log(isNeutral("-++-", "-+-+")); // -> "-+00"
console.log(isNeutral("--++--", "++--++")); // -> "000000"
console.log(isNeutral("+++", "+++")); // -> "+++"

console.log(`\n======================== Task - 5 ========================`);
// First way
const isTrueOrFalse = (str) => {
  const words = str.toUpperCase().split(' ');
  return words.filter(x => 'ABCDEFGHIJKLM'.includes(x[0])).length >= words.filter(x => 'NOPQRSTUVWXYZ'.includes(x[0])).length
}
// // Second way not ignore all the digits, spaces and special characters first symbol each word 
// const isTrueOrFalse = str => str.toUpperCase().split(' ').reduce((res, x) => 'ABCDEFGHIJKLM'.includes(x[0]) ? res + 1 : res - 1, 0) >= 0;

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); //-> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")); //-> false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")); //-> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); //-> true
console.log(isTrueOrFalse("Got stuck in the Traffic")); //-> false