console.log(`\n======================== Task - 1 ========================`);
const countPalindrome = str => {
  const palindrome = txt => txt.trim().toLowerCase() === txt.trim().split("").reverse().join("").toLowerCase() && str.trim().length > 1;
  return str.trim().split(" ").reduce((count, el) => (palindrome(el) ? (count += 1) : count), 0);
};

console.log(countPalindrome("Mom and Dad")); //  -> 2
console.log(countPalindrome("See you at noon")); // -> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); // -> 2
console.log(countPalindrome("")); // -> 0
console.log(countPalindrome("No palindrome here")); //  -> 0

console.log(`\n======================== Task - 2 ========================`);
const sum = (arr, bool) => {
  let sumEl = 0;
  for (let i = 0; i < arr.length; i++) {
    if (bool && i % 2 === 0) sumEl += arr[i];
    if (!bool && !(i % 2 === 0)) sumEl += arr[i];
  }
  return sumEl;
};

console.log(sum([1, 5, 10], true)); // -> 11
console.log(sum([3, 7, 2, 5, 10], false)); // -> 12
console.log(sum([-1, 1, -2, 2], true)); // -> -3
console.log(sum([0, -1, 15, 1], false)); //  -> 0
console.log(sum([1, 2, 3, 4, -4], true)); // -> 0

console.log(`\n======================== Task - 3 ========================`);
const nthChars = (str, n) => {
  if (n > str.length) return "";
  else {
    let outStr = "";
    for (let i = n; i <= str.length; i += n) {
      outStr += str[i - 1];
    }
    return outStr;
  }
};

console.log(nthChars("Java", 2)); //      -> "aa"
console.log(nthChars("JavaScript", 5)); //  -> "St"
console.log(nthChars("Java", 3)); //          -> "v"
console.log(nthChars("Hi", 4)); //        -> ""
console.log(nthChars("0123456789", 2)); // -> "13579"

console.log(`\n======================== Task - 4 ========================`);
const canFormString = (str1, str2) => {
  const arr1 = str1.toLowerCase().split("").filter(x => x !== " ");
  const arr2 = str2.toLowerCase().split("").filter(x => x !== " ");
  let ind = 0;
  for (const el of arr2) {
    if (arr1.includes(el)) {
      ind = arr1.indexOf(el);
      arr1.splice(ind, 1);
    } else return false;
  }
  return true;
};

console.log(canFormString("Hello", "Hi")); //   -> false
console.log(canFormString("programming", "gaming")); //   -> true
console.log(canFormString("halogen", "hello")); //        -> false
console.log(canFormString("CONVERSATION", "voices rant on")); //  -> true
console.log(canFormString("12", "123")); //      -> false

console.log(`\n======================== Task - 5 ========================`);
const isAnagram = (str1, str2) => {
  const arr1 = str1.toLowerCase().split("").filter(x => x !== " ").sort();
  const arr2 = str2.toLowerCase().split("").filter(x => x !== " ").sort();
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

console.log(isAnagram("Apple", "Peach")); //-> false
console.log(isAnagram("listen", "silent")); //       -> true
console.log(isAnagram("astronomer", "moon starer")); //  -> true
console.log(isAnagram("CINEMA", "iceman")); //            -> true
console.log(isAnagram("123", "1234")); //      -> false

console.log(`\n======================== Task - 6 ========================`);
const count = (arr, bool) => bool ? arr.filter(x => x % 2 === 0).length : arr.filter(x => x % 2 !== 0).length;

console.log(count([1, 5, 10], true)); //   -> 1
console.log(count([3, 7, 2, 5, 10], false)); //  -> 3
console.log(count([-1, 1, -2, 2], true)); //  -> 2
console.log(count([0, -1, 15, 1], false)); // -> 3
console.log(count([1, 2, 3, 4, -4], true)); // -> 3

console.log(`\n======================== Task - 7 ========================`);
const sumDigitsDouble = str => {
  const arr = str.split("").filter(x => "0123456789".includes(x));
  return arr.length < 1 ? -1 : 2 * arr.reduce((sum, el) => sum += Number(el), 0);
};

console.log(sumDigitsDouble("Javascript")); //  -> -1
console.log(sumDigitsDouble("23abc45")); //  -> 28
console.log(sumDigitsDouble("Hi-23")); // -> 10
console.log(sumDigitsDouble("ab12")); //   -> 6
console.log(sumDigitsDouble("n0numh3r3")); // -> 12

console.log(`\n======================== Task - 8 ========================`);
// First way I'm using a previously created function
// const countOccurrence = (str1, str2) => {
//   const arr1 = str1.toLowerCase().split("").filter(x => x !== " ");
//   const arr2 = str2.toLowerCase().split("").filter(x => x !== " ");
//   let ind = 0, count = 0, result = 0;
//   do {
//     for (const el of arr2) {
//       if (arr1.includes(el)) {
//         ind = arr1.indexOf(el);
//         arr1.splice(ind, 1);
//         count += 1;
//       }
//     }
//     if (arr2.length === count) result += 1;
//     count = 0;
//   } while (canFormString(arr1.join(""), arr2.join("")));
//   return result;
// };

// The second way I'm looking for is how many times I can repeat each character from the second string in the first. I use the object's methods and property

const countOccurrence = (str1, str2) => {
  const obj1 = {}, obj2 = {}, obj3 = {};
  str1.toLowerCase().split("").filter(x => x !== " ").forEach(el => (!obj1[el]) ? obj1[el] = 1 : obj1[el]++);
  str2.toLowerCase().split("").filter(x => x !== " ").forEach(el => (!obj2[el]) ? obj2[el] = 1 : obj2[el]++);
  for (const prop in obj2) {
    obj3[prop] = 0;
    while (obj1[prop] >= obj2[prop]) {
      obj1[prop] -= obj2[prop];
      !obj3[prop] ? obj3[prop] = 1 : obj3[prop]++;
    }
  };
  return Object.values(obj3).reduce((min, el) => el <= min ? el : min);
};

console.log(countOccurrence("Javascript", "Java")); //     -> 1
console.log(countOccurrence("Hello", "World")); //     -> 0
console.log(countOccurrence("Can I can a can", "anc")); //  -> 3
console.log(countOccurrence("Hello", "l")); //   -> 2
console.log(countOccurrence("IT conversations", "IT")); //  -> 2