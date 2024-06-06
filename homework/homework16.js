console.log(`\n======================== Task - 1 ========================`);
const toInitials = (str) => str.split(' ').map(x => x[0].toUpperCase() + ".").join(' ')

console.log(toInitials("Joe Doe")); //-> "J. D."
console.log(toInitials("Alex Reyes")); // -> "A. R."
console.log(toInitials("Tom Cruise")); // -> "T. C."
console.log(toInitials("Bruce Willis")); //  -> "B. W."
console.log(toInitials("Ja Le")); // -> "J. L."

console.log(`\n======================== Task - 2 ========================`);
const hasNumbers = (str) => [...str].filter(x => x !== ' ').some(x => !isNaN(x));

console.log(hasNumbers("")); // -> false
console.log(hasNumbers("John is 34 years old")); // -> true
console.log(hasNumbers("Hello 3")); //   -> true
console.log(hasNumbers("125$")); //   -> true
console.log(hasNumbers("   a   ")); //  -> false
console.log(hasNumbers("      ")); //  -> false
console.log(hasNumbers("!@#$%^&*()_+")); //    -> false

console.log(`\n======================== Task - 3 ========================`);
const elementLength = (arr) => arr.map(x => x.length);

console.log(elementLength(["Hello", "World"])); //   -> [5, 5]
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"])); //  -> [5, 6, 6, 4]
console.log(elementLength(["BMW", "Mercedes", "Audi"])); //  -> [3, 8, 4]
console.log(elementLength([])); //   -> []
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"])); // -> [10, 0, 6, 10]

console.log(`\n======================== Task - 4 ========================`);
const isArraySumEvenOrOdd = (arr) => arr.reduce((sum, el) => sum += el, 0) % 2 === 0 ? "even" : "odd";

console.log(isArraySumEvenOrOdd([])); // -> "even"
console.log(isArraySumEvenOrOdd([0, -1, -5])); // -> "even"
console.log(isArraySumEvenOrOdd([7, 1, 8, 1])); //  -> "odd”
console.log(isArraySumEvenOrOdd([0, 0])); //  -> "even"
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1])); // -> "odd"

console.log(`\n======================== Task - 5 ========================`);
const reverse = (str) => [...str].reverse().join('');

console.log(reverse("Hello World")); //-> "dlroW olleH"
console.log(reverse("TechGlobal")); //-> "labolGhceT"
console.log(reverse("Basketball is fun")); //-> "nuf si llabteksaB"
console.log(reverse("")); //-> ""
console.log(reverse("Apples 456")); // -> "654 selppA"

console.log(`\n======================== Task - 6 ========================`);
const reverseWords = (str) => str.split(' ').map(x => reverse(x)).join(' ');

console.log(reverseWords("Hello World")); //    -> "olleH dlroW"
console.log(reverseWords("TechGlobal")); //     -> "labolGhceT"
console.log(reverseWords("Basketball is fun")); //      -> "llabteksaB si nuf"
console.log(reverseWords("")); //   -> ""
console.log(reverseWords("Apples 456")); //     -> "selppA 654"