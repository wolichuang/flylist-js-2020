/* 过滤数组中假值 */
var array = [
  0,
  1,
  false,
  2,
  '',
  3,
  'a',
  'e' * 23,
  NaN,
  's',
  34,
  'a',
  [1, 2, 3, [4, 5]]
];
var array1 = [2, 3, 4, 88, 99];
// console.log(array.filter(Boolean))

/* 统计数组中某个值出现的次数 */
function count(array, val) {
  return array.reduce((all, current) => {
    return current === val ? all + 1 : all + 0;
  }, 0);
}
// console.log('统计一个出现的次数', count(array, 'a'))
// console.log('统计每一个出现的次数',
// 	array.reduce(((all, next) => {
// 		if (!all[next]) {
// 			all[next] = 0
// 		}
// 		all[next]++;
// 		return all
// 	}), {})
// )

/*平铺数组*/
const deepFlatten = (array) =>
  [].concat(
    ...array.map((item) => (Array.isArray(item) ? deepFlatten(item) : item))
  );
// console.log(deepFlatten(array))

/* 数组比较 */
const diffArray = (arr1, arr2) => {
  let a2 = new Set(arr2);
  return arr1.filter((item) => !a2.has(item));
};
console.log(diffArray(array, array1));

/* 数组去重 */
const distinctArray = (array) => [...new Set(array)];
console.log(distinctArray(array));

/*删除数组中的元素 */
const removeArray = (array, func) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!func(element)) {
      array = array.slice(1);
    }
  }
  return array;
};
console.log(removeArray(array, (n) => n > 2));

/*获取数组中的对象 */
const pickArray = (obj, arr) => {
  return arr.reduce(
    (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {}
  );
};
console.log(
  pickArray(
    {
      a: 1,
      b: '2',
      c: 3
    },
    ['a', 'c']
  )
); // { 'a': 1, 'c': 3 }

/*数组深拷贝 */
function deepClone(data) {
  let _data = JSON.stringify(data),
    dataClone = JSON.parse(_data);
  return dataClone;
}
/*数组是否包含某对象或者判断对象是否相等 */
//判断数组是否包含某对象
let data = [
    {
      name: 'hello'
    },
    {
      name: 'wxh'
    },
    {
      name: 'world'
    }
  ],
  val = {
    name: 'wxh'
  };
console.log(JSON.stringify(data).indexOf(JSON.stringify(val)) !== -1); //true

//判断两数组/对象是否相等
let a = [1, 2, 3],
  b = [1, 2, 3];
console.log(JSON.stringify(a, a.sort()) === JSON.stringify(b, b.sort())); //true

// 数组扁平化
const arrOne = [1, [2, [3, [4, 5]]], 6];
const arr2 = [];
const flatern = (arrOne) => {
  return arrOne.reduce((all, next) => {
    return all.concat(Array.isArray(next) ? flatern(next) : next);
  }, []);
};

console.log(flatern(arrOne));
