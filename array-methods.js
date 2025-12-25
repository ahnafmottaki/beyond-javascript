const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "banana",
  "mango",
];
const numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
const mixed = [1, "apple", true, { name: "John" }, [2, 3], null, undefined];
// Challenge 1: Use .at() to get the 3rd element from fruits array
console.log(fruits.at(2));
// Challenge 2: Use bracket notation [] to get the last element
console.log(fruits[fruits.length - 1]);
// Challenge 3: Use .at() with negative index to get the 2nd last element
console.log(fruits.at(-2));
// Challenge 4: Get the length of fruits array
console.log(fruits.length);
// Challenge 5: Check if numbers array contains at least 5 elements
console.log(numbers.length >= 5);
// Challenge 6: Check if mixed array is empty
console.log(mixed.length === 0);
