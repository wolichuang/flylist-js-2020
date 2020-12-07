const a = [1, 2, 3, 4, 5];
const b = [1, 2, 4, 6, 7, 9, 10];

console.log(a.concat(b.filter((item) => !a.includes(item)))); // es7 并集合
console.log(Array.from(new Set(a.concat(b)))); // es6 并集合

console.log(a.concat(b.filter(item))); // es5 并集合
// [(1, 2, 3, 4, 5, 6, 7, 9, 10)];

console.log(a.filter((item) => b.includes(item))); // es7 交集合
console.log(Array.from(new Set(a.filter((item) => new Set(b).has(item))))); // es6 交集合
// [1, 2, 4];

console.log(
  a.concat(b).filter((item) => !a.includes(item) || !b.includes(item))
); // es7 差集
console.log(
  Array.from(
    new Set(
      a
        .concat(b)
        .filter((item) => !new Set(a).has(item) || !new Set(b).has(item))
    )
  )
); // es6 差集
// [(3, 5, 6, 7, 9, 10)];
