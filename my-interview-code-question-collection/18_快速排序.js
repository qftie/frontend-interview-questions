const quickSort = (arr) => {
  // 找中心轴，把大于pivot的放右边，小于pivot的放左边，递归左数组和右数组
  if (arr.length<=1) return arr // 结束条件: 不断划分区间直到长度为1
  let pivot = Math.floor(arr.length/2);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivot) {
      if (arr[i] < arr[pivot]) {
        left.push(arr[i]);
      } else right.push(arr[i]);
    }
  }
//   console.log(left,right);
  let result = quickSort(left).concat(arr[pivot],quickSort(right))
  return result;
};

console.log(quickSort([2, 6, 3, 5, 16, 3, 12]));

