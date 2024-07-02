// shallow copy
// Object.assign({},original)
const a = { a: 1, b: { c: 10 } };
const f = Object.assign({}, a);
f.b.c = 20;
console.log(a);
console.log(f);
