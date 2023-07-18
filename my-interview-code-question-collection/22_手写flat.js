function flatten(arr) {
  // 遍历arr，判断元素是否是array，如果不是就直接加入结果数组
  // 如果是就直接concat然后重新赋值给结果数组
  let result = [];
  arr.forEach((item) => {
    if (!Array.isArray(item)) result.push(item);
    else result = result.concat(flatten(item));
  });
  // for (let i=0; i<arr.length; i++) {
  //     if (!Array.isArray(arr[i])) {
  //         result.push(arr[i]);
  //     }
  //     else {
  //         result = result.concat(flatten(arr[i]));
  //     }
  // }
  return result;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
