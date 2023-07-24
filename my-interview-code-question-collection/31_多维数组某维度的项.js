let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// const arrFlat = (arr, val) => {
//   if (val <= 1) return arr;
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (Array.isArray(item)) return arrFlat(item, --val);
//   }
//   return [];
// };
function getDimension(array, num) {
  // 如果维度小于1，直接return本身
  if (num <= 1) return array;
  for (let item of array) {
    if (Array.isArray(item)) {
        num -= 1;
        return getDimension(item, num);
    }
  }
  return undefined;
}
//   arr.forEach(item=> {
//     if (Array.isArray(item)) {
//         return getDimension(item, num-1)
//     }
//   })
// 如果没找到返回null

console.log(getDimension(arr, 2)); // [3,4,[5,6,[7,8]]]]
console.log(getDimension(arr, 3)); // [5,6,[7,8]]
console.log(getDimension(arr, 5)); // undefined
/* 总结
1. 递归条件，遇到一个 array 维度 num 就减 1，执行 getDimension(item, num)
2. 终止条件，num 为 0，输出本身
*/