const a = [1, 2, 3, 4, 5];
const b = [1, 2, 4, 6, 7, 9, 10];

console.log(a.concat(b.filter((item) => !a.includes(item)))); // 并集合
console.log(Array.from(new Set(a.concat(b)))); // 并集合
// [(1, 2, 3, 4, 5, 6, 7, 9, 10)];

console.log(a.filter((item) => b.includes(item))); // 交集合
console.log(Array.from(new Set(a.filter((item) => new Set(b).has(item)))));
// [1, 2, 4];

console.log(
  a.concat(b).filter((item) => !a.includes(item) || !b.includes(item))
); // 差集

[3, 5, 6, 7, 9, 10];
