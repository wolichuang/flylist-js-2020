const a = [1, 2, 3, 4, 5];
const b = [1, 2, 4, 6, 7, 9, 10];

console.log(b.filter((item) => !a.includes(item))); // 

console.log(a.filter((item) => b.includes(item))); // 交集
