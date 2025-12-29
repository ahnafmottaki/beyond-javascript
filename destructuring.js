// array destructuring
let arr = ["John", "Smith"];
let [firstName, lastName] = arr;
console.log(firstName, lastName);
// unwanted elements can also be thrown away via an extra comma
let [fName, , title1] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// we can use destructuring with any iterables
let [a, b, c] = "str";
let [one, two, three] = new Set([1, 2, 3]);

// Assign to anything at the left-side
let user = {};
[user.name, user.surname] = "John Smith".split(" ");
console.log(user.name, user.surname);

// looping with entries
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`);
}

// swaping two variables
let guest = "Jane",
  admin = "Pete";
[guest, admin] = [admin, guest];
console.log(guest, admin);

let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(rest);

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// runs only prompt for surname
// let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

// * Object destructuring
// let { height, width, title } = { title: "Menu", height: 200, width: 100 };
// { sourceProperty: targetVariable }
// let { width: w, height: h, title } = options;
// * setting default values
// let options = {
//   title: "Menu",
// };
// let { width = 100, height = 100, title } = options;

// default values can be any expressions or even function calls
// let {
//   width = +prompt("Enter width"),
//   height = +prompt("Enter height"),
//   title,
// } = options;

// let { height: h = 100, width: w = 100, title } = options;
// console.log(h, w, title);

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100,
// };

// let { title, ...extras } = options;
// console.log(extras.height, extras.width);

// Gotcha if there’s no let
// let height, width, title;
// ({ height, width, title } = options);
// console.log(height, width, title);

let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: { height, width },
  items: [cake, donut],
  extra,
  title = "Menu",
} = options;

console.log(height, width, cake, donut, extra);

function showMenu(
  {
    title = "Untitled",
    width = 100,
    height = 100,
    items: [itemOne = "cake", itemTwo = "donut"],
  } = { items: [] }
) {
  console.log(`${title} ${width} ${height}`);
  console.log(itemOne, itemTwo);
}
showMenu();

let userTwo = {
  name: "John",
  years: 30,
};

let { nameU, years: age, isAdmin = false } = userTwo;

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(salaries) {
  let maxSalary = 0,
    maxName = null;
  for (let [person, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = person;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));
