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
