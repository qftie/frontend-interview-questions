const bubbleSort = (arr) => {
  // i表示遍历轮数，j表示泡泡
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  return arr;
};
console.log(bubbleSort([2,23,1,324,555,2321,2,5,878]));
const quickSort = (arr) => {
  // 找中心轴，把大于pivot的放右边，小于pivot的放左边，递归左数组和右数组
  if (arr.length <= 1) return arr; // 结束条件
  let pivot = Math.floor(arr.length / 2);
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
  let result = quickSort(left).concat(arr[pivot], quickSort(right));
  return result;
};

const testData = [];
const min = 1;
const max = 100;
for (let i = 0; i < 100; i++) {
  const array = [];
  for (let j = 0; j < 5000; j++) {
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomInt);
  }
  testData.push(array);
}

// console.time("quick");
// for (data of testData) {
//     // console.log(data);
//   quickSort(data);
// }
// console.timeEnd("quick");

// console.time("bubble")
// for (data of testData) {
//     // console.log(data);
//     bubbleSort(data)
// }
// console.timeEnd("bubble")


