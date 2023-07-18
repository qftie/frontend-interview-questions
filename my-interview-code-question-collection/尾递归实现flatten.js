let a = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
// 变成
// let a = [1,2,3,1,2,3,1,2,3]
// 具体实现
// 遍历当前数组，如果元素是数组,就flatten，如果不是，就item直接加入到结果后面
function flatten(arr = [], result = []) {
  for (item of arr) {
    if (Array.isArray(item)) {
      flatten(item, result);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten(a, []));
