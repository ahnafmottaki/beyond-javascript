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
if (!userGuest.admin?.()) {
  console.log("admin in userGuest object doesn't exists");
}
