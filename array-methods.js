let arr = ["I", "go", "home"];
// * deleting an array element with the delete keyword but the length stays the same
console.log(delete arr[0]);
console.log(arr.length);

// * with splice the element will be removed and also the length will be new
console.log(arr.splice(0, 1, "ahnaf", "mottaki"));
console.log(arr, arr.length);

// * negative indexes are allowed
console.log(arr.splice(-1, 0, "let's", "dance"));
console.log(arr, arr.length);
