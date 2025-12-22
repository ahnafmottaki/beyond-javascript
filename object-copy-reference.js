let user = {
  name: "ahnaf",
  age: 23,
  sizes: {
    height: 132,
    width: 50,
  },
};

// manual copy
let clone = {};
for (let key in user) {
  clone[key] = user[key];
}

console.log(clone.name, clone.age);

// copying with Object.assign
let permissionOne = { canView: true };
let permissionTwo = { canEdit: true };
let cloneWithAssign = Object.assign({}, user, permissionOne, permissionTwo, {
  name: "clone ahnaf",
});
console.log(
  cloneWithAssign.name,
  cloneWithAssign.age,
  cloneWithAssign.canView,
  cloneWithAssign.canEdit
);

cloneWithAssign.sizes.height = 5676;
console.log(user.sizes);
console.log(cloneWithAssign.sizes === user.sizes);

// deep cloning with structuredClone
let cloneStructured = structuredClone(user);
console.log(cloneStructured.sizes === user.sizes);

let userX = { name: "mottaki" };
userX.me = userX;
console.log(userX.me.me.name);
let cloneUserX = structuredClone(userX);
console.log(cloneUserX.name);

// in structured clone function properties aren't supported
// means they do not get cloned
