const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function User(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.isAdmin = false;
}

let userOne = new User(
  "ahnaf",
  23,
  "Kanchibari, DhubniBazar, Sundarganj, Gaibandha"
);
for (let key in userOne) {
  console.log(userOne[key]);
}

// one liner constructor function
let userOneLiner = new (function () {
  this.name = "mottaki";
  this.age = 23;
  this.country = "bangladesh";
})();

for (let key in userOneLiner) {
  console.log(userOneLiner[key]);
}

// we can know whether a funciton was called with new or not;

function UserTwo(name) {
  console.log(new.target);
  if (!new.target) {
    return new UserTwo(name);
  }
  this.name = name;
  // return { name: "Godzila" };
  return "returning primitive";
}

let userThree = new UserTwo("mottaki");
let userFour = UserTwo("ahnaf");
console.log(userThree.name, userFour.name);

function UserThree(name) {
  this.name = name;
  this.sayHello = () => {
    console.log("Hello, " + this.name);
  };
}

let userFive = new UserThree("ahnaf");
console.log(userFive.constructor.name);
userFive.sayHello();
const obj = {};
function A() {
  return obj;
}

function B() {
  return obj;
}
console.log(new A() === new B());

async function getInput() {
  return new Promise((res, rej) => {
    rl.question("Enter first number: ", (num) => {
      res(num);
    });
  });
}
function Calculator() {
  this.read = async function () {
    this.a = +(await getInput());
    this.b = +(await getInput());
    return this;
  };

  this.sum = function () {
    if (!this.a || !this.b) {
      throw new Error("a and b doesn't exists yet");
    }
    return this.a + this.b;
  };
  this.mul = function () {
    if (!this.a || !this.b) {
      throw new Error("a and b doesn't exists yet");
    }
    return this.a * this.b;
  };
}

const calculator = new Calculator();

// calculator.read().then((calc) => {
//   console.log(calc.sum());
//   console.log(calc.mul());
// });
// console.log(calculator.sum());

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = async () => {
    this.value += +(await getInput());
    return this;
  };
}

const accumulator = new Accumulator(5);
accumulator
  .read()
  .then((acc) => acc.read())
  .then((acc) => {
    rl.close();
    console.log("acc is: " + acc.value);
  });
