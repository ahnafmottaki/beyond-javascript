const range = {
  from: 3,
  to: 15,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true, value: undefined };
    }
  },
};

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// };

for (const val of range) {
  console.log(val);
}

// strings are also iterable
for (let char of "test") {
  console.log(char);
}

// * calling a iterator explicitly
let str = "Hello";
const iterator = str[Symbol.iterator]();
while (true) {
  const result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

let name = "ahnaf";
let stringIterator = name[Symbol.iterator]();
while (true) {
  const result = stringIterator.next();
  if (result.done) break;
  console.log(result.value);
}

const arrayOne = [2, 3, 23, 2, 23, 32, 2];
const arrayOneIterator = arrayOne[Symbol.iterator]();
while (true) {
  const result = arrayOneIterator.next();
  if (result.done) break;
  console.log(result.value);
}

const arrayLike = {
  0: "Hello",
  1: "world",
  length: 2,
};

arrayLike[Symbol.iterator] = function () {
  this.currentIndex = 0;
  return {
    next: () => {
      if (this.currentIndex < this.length) {
        return { done: false, value: this[this.currentIndex++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
};

for (let val of arrayLike) {
  console.log(val);
}

// Array.from that takes an iterable or array-like value and make  a "real" array from it
// then we can call array methods on it
let arr = Array.from(arrayLike);
console.log(arr);
console.log(arr.push("twenty"));
console.log(arr.push("six"));

const indexArray = Array.from({ length: 20 }, (_, index) => index);
const str = "mottaki";
