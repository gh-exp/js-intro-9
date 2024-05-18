console.log(`\n======================== Task - 1 ========================`);
const countVC = (str) => {
  const obj = {};
  obj.vowels = str.split('').reduce((res, el) => 'aeiou'.includes(el.toLowerCase()) ? res += 1 : res, 0);
  obj.consonants = str.split('').reduce((res, el) => (el.toLowerCase() >= 'a' && el.toLowerCase() <= 'z' && !'aeiou'.includes(el.toLowerCase())) ? res += 1 : res, 0);
  return obj;
};

console.log(countVC("Hello")); //      -> { vowels: 2, consonants: 3 }
console.log(countVC("Programming")); //-> { vowels: 3, consonants: 8 }
console.log(countVC("123AbC")); //     -> { vowels: 1, consonants: 2 }
console.log(countVC("123!@#xyz")); //  -> { vowels: 0, consonants: 3 }
console.log(countVC("")); //           -> { vowels: 0, consonants: 0}

console.log(`\n======================== Task - 2 ========================`);
// First way
// const countChars = (str) => {
//   const obj = {};
//   // obj.letters = str.split('').reduce((res, el) => (el.toLowerCase() >= 'a' && el.toLowerCase() <= 'z') ? res += 1 : res, 0);
//   obj.letters = str.split('').filter(el => (/[A-Za-z]/g).test(el)).length;
//   // obj.numbers = str.split('').filter(el => '0123456789'.includes(el)).length;
//   obj.numbers = str.split('').filter(el => (/\d/g).test(el)).length;
//   // obj.specials = str.split('').filter(el => ((!((el.toLowerCase() >= 'a' && el.toLowerCase() <= 'z') || '0123456789'.includes(el)|| el === ' ')))).length;
//   obj.specials = str.split('').filter(el => (/[^\w\s]/g).test(el)).length; // ^ - !, \w - letters, numbers, underscore \s - space 
//   for (let key in obj) {
//     if (obj[key] === 0) delete obj[key];
//   }
//   return obj;
// }
//Second way
const countChars = (str) => {
  const obj = {};
  obj.letters = (str.match(/[A-za-z]/g) || []).length;
  obj.numbers = (str.match(/[\d]/g) || []).length;
  obj.specials = (str.match(/[^\s\w]/g) || []).length;
  for (let key in obj) {
    if (obj[key] === 0) delete obj[key];
  }
  return obj;
}
console.log(countChars("Hello")); //            -> { letters: 5 }
console.log(countChars("Programming 123")); //  -> { letters: 11, numbers: 3 }
console.log(countChars("123AbC!@#")); //        -> { letters: 3, numbers: 3, specials: 3 }
console.log(countChars("0987654321")); //       -> { numbers: 10 }
console.log(countChars("     ")); //            -> {}
console.log(countChars("")); //                 -> {}

console.log(`\n======================== Task - 3 ========================`);
const maxOccurrences = (str) => {
  if (str.trim().length < 1) return '';
  else {
    const obj = {};
    str.toLowerCase().split("").filter(x => x !== " ").forEach(el => (!obj[el]) ? obj[el] = 1 : obj[el]++);
    return Object.entries(obj).reduce((max, el) => el[1] > max[1] ? el : max)[0];
  }
}

console.log(maxOccurrences("Hello")); //          -> "l"
console.log(maxOccurrences("Occurrences")); //    -> "c"
console.log(maxOccurrences("    ab    ")); //     -> "a"
console.log(maxOccurrences("12   3   21")); //    -> "1"
console.log(maxOccurrences("      ")); //         -> ""
console.log(maxOccurrences("")); //               -> ""

console.log(`\n======================== Task - 4 ========================`);
const starOut = (str) => str.split('').filter(x => x === '*').length === str.length ? '' : str.replace(/([^*]|^)\*{1,2}([^*]|$)/g, '');

console.log(starOut("ab*cd"));      //   -> "ad"
console.log(starOut("ab**cd"));     //   -> "ad"
console.log(starOut("xm*sm*sy"));   //   -> "xy"
console.log(starOut("abc"));        //   -> "abc"
console.log(starOut("***"));        //   -> ""
console.log(starOut("   "));        //   -> "   "
console.log(starOut(""));           //   -> ""

console.log(`\n======================== Task - 5 ========================`);
const romanToInt = (str) => {
  const rN = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
  let res = 0;
  let currS = 0;
  let nextS = 0;
  for (let i = 0; i < str.length; i++) {
    currS = rN[str[i]];
    nextS = rN[str[i + 1]];
    if (nextS && currS < nextS) {
      res += nextS - currS;
      i += 1;
    } else res += currS;
  }
  return res;
};

console.log(romanToInt("I")); //                  ->  1
console.log(romanToInt("IV")); //                 ->  4
console.log(romanToInt("CXII")); //               ->  112
console.log(romanToInt("MMM")); //                ->  3000
console.log(romanToInt("MMMDCCCLXXXVIII")); //    ->  3888
console.log(romanToInt("MDCLXVI")); //            ->  1666