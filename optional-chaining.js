const userThree = {};
if (userThree.address) {
  console.log("addres is in userThree");
} else {
  console.log("address doesn't exist");
}

// * other variants of optional chaining
let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.();
// * checking if a function exists in an object or not
if (!userGuest.admin?.()) {
  console.log("admin in userGuest object doesn't exists");
}

// * another way of accessing object elements
let num2 = [32, 32];
