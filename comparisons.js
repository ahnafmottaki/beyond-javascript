let age = 45;
if ((age = 23 > 18)) {
  console.log("is a Adult");
}
console.log(age);
let price = 34;
price = price * 2;
price *= 2;
console.log((price = 23));
console.log("price: ", price);
let a, b, c;

console.log("first: ", (a = b = c = 2 + 2));
console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

// increment and decrement operator
let count = 10;
// count += 1;
// count -= 1;
// console.log(count++)
// console.log(count--);
// console.log(++count);
// console.log(--count);
console.log(count);
let counter = 1;
let x = counter++; // (*)

console.log(x); // 2

let z = (56 + 34, 99);
console.log(z);
console.log("" + 1 + 0);
console.log("" + 1 - 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);
console.log(NaN === NaN);
console.log(isNaN(23));
console.log(isNaN("23"));
console.log(isNaN("str"));
console.log(undefined == 0);
console.log(null == 0);
console.log("2" > "12");
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");
console.log(+"\n0\n");
function gretting() {
  console.log("Hello mottaki");
}
const name = prompt("Enter your name");
const greeting = name ? `Hello, ${name}` : "Hello, user";
confirm(greeting);
// let age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);
