// * the underscore makes the number more readable
let billion = 100_00_00_000;
let billionScientific = 1e9;
console.log(billionScientific);
console.log(billion === billionScientific);
let mcs = 1e-6;
console.log(mcs == 1 / 1000000);
// * hexadecimal numbers
const hexValue = 0xff;
const binaryValue = 0b11011;
const octalValue = 0o77;
console.log(hexValue);
console.log(binaryValue);
console.log(octalValue);
// toString
console.log(hexValue.toString(16));
console.log(hexValue.toString(8));
console.log(hexValue.toString(2));
console.log(hexValue.toString(10));

// two dots to call a method
const num = Math.random() * 100;
console.log((123456.453).toString(16));
// Rounding down
console.log(Math.floor(num));
// Rounds up
console.log(Math.round(num));
// Rounding up
console.log(Math.ceil(num));
// removes everything after the decimal part
console.log(Math.trunc(num));

// toFixed -> works like Math.round
console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));
// a huge number that overflow the 64-bit storage becomes infinity
console.log(1e500);

// adding two decimal point numbers
console.log(0.1 + 0.2 === 0.3);
const sum = 0.1 + 0.2;
console.log(+sum.toFixed(2));

console.log(9999999999999999);
// sepcial neumeric values
console.log(Infinity);
console.log(-Infinity);

//checking if a num is not a number
console.log(isNaN(NaN));
console.log(isNaN("str"));
// can't we  just use the comparison === NaN ?
// * Unfortunately not cause NaN isn't equal to anything , including itself
console.log(NaN === NaN);

// * isFinite(value) converts it's argument to number and returns true if it's a regular number
console.log(isFinite("15"));
console.log(isFinite("str"));
console.log(isFinite(Infinity));
console.log(Number(" "));

// Number.isNaN and Number.isFinite are the strict versions of isNaN and isFinite
console.log(Number.isNaN(123));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("str" / 2));
console.log(Number.isNaN("str"));
console.log(isNaN("str"));

console.log(Number.isFinite(123));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(2 / 0));

// see the differenc between these two
console.log(Number.isFinite("123"));
console.log(isFinite("123"));

console.log(0 === -0);
// * [1] comparing with Object.is method
console.log(Object.is(0, -0));
console.log(NaN === NaN);
// * [2] comparing with object.is method
console.log(
  'these two edge cases are covered by Object.is. It"s work like === (strict equality"'
);
console.log(Object.is(NaN, NaN));

console.log(+"100px");
//  with parseInt and parseFloat
console.log(parseInt("100px"));
console.log(parseFloat("100.56px"));

console.log(parseInt("100.43px")); // only the integer part is returned
console.log(parseFloat("100.45.3px")); // the second point stops the reading

// There are situations when parseInt/parseFloat will return NaN
console.log(parseInt("a432"));

// the parseInt has an optional parameter
// parseInt(str, radix)
// radix => specifies the base of the numeral system
console.log(parseInt("0xff", 16));
console.log(parseInt("ff", 16)); // without 0x also works
console.log(parseInt("2n9c", 36));

console.log(Math.max(34, 23, 543, 235, 999));
console.log(Math.min(34, 23, 543, 235, 999));
console.log(Math.pow(2, 10));

function readNumber() {
  let num;
  do {
    num = prompt("Enter a number: ", 0);
  } while (!isFinite(num));
  if (num === null || num === "") return null;
  return +num;
}

console.log(readNumber());

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
