// by specification , only two primitive types may serve as object property keys
// one is string
// other is symbol

//  a symbol represents a unique identifier
const symbol = Symbol();

// giving symbol a description, it's just a label that doesn't affect anything
const symbol2 = Symbol("id");

// symbol are guranted to be unique
//  * to summarize, a symbol is a “primitive unique value” with an optional description
//  * symbols don’t auto-convert.
console.log(symbol.toString());
console.log(symbol2.description);

//  * Symbols allow us to create “hidden” properties of an object, so
//  * that no other part of code can accidentally access or overwrite.

let user = {
  name: "john",
};
let id = Symbol("_id");
user[id] = 1;

// * Symbols are skipped by for…in
for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

//  Object.keys(user) also ignores them
Object.keys(user).forEach((key) => {
  console.log(key);
});

// In contrast, Object.assign copies both string and symbol properties:
let identifier = Symbol("id");
let userTwo = {
  [identifier]: 123,
};

let clone = Object.assign({}, userTwo);

console.log(clone[identifier]); // 123

// As we’ve seen, usually all symbols are different, even if they have the same name.
// But sometimes we want same-named symbols to be same entities.
// For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

// To achieve that, there exists a global symbol registry.
// We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.

// In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

// That call checks the global registry, and if there’s a symbol described as key, then returns it,
// otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.

let symbolOne = Symbol.for("id");

let symbolOneAgain = Symbol.for("id");

console.log(symbolOne === symbolOneAgain);

// We have seen that for global symbols, Symbol.for(key) returns a symbol by name.
// To do the opposite – return a name by global symbol – we can use:
// Symbol.keyFor(sym):

// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol.
// So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.

console.log(Symbol.keyFor(symbolOne));
console.log(Symbol.keyFor(symbolOneAgain));
const localSymbol = Symbol();

console.log(Symbol.keyFor(localSymbol));

// system symbols
// There exist many “system” symbols that JavaScript uses internally,
// and we can use them to fine-tune various aspects of our objects.

// Symbol.hasInstance;
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive

Object.getOwnPropertySymbols(userTwo).forEach((symbol) => console.log(symbol));

console.log(Reflect.ownKeys(userTwo));
