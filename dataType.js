console.log("learning data type");
let primitiveDataTypes = [
  "string",
  "number",
  "boolean",
  "bigint",
  "null",
  "undefined",
  "symbol",
];
primitiveDataTypes.forEach((type, index) => {
  console.log(`${index + 1}: ${type}`);
});

let firstName = "ahnaf",
  lastName = "mottaki",
  fullName = `ahnaf
         mottaki`;
console.log(firstName, lastName, fullName);
let age = 23.432;
console.log(age);
let booleanTrue = true,
  booleanFalse = false;
console.log("maximum numberType limit: ", 9007199254740992);
let id = 5349572548924328428374723n;
console.log(id + BigInt(3432));

let nullType = null;
console.log(nullType);
let undefinedType = undefined;
console.log(undefinedType);

let symbolType = Symbol();
let symbolType2 = Symbol();
console.log(symbolType === symbolType2);

console.log(typeof symbolType);
console.log(typeof nullType);
console.log(typeof undefinedType);
