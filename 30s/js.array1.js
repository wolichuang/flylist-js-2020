const _array = [1, 2, 3, 4, 5];

const f = 3;

function remove(arr, item) {
  return arr.filter((res) => {
    return res !== item;
  });
}
console.log(remove(_array, f));
console.log(_array);
