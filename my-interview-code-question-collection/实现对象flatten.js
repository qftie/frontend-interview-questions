// 实现一个对象的 flatten 方法
function flatten(obj) {
  let result = {};
  // 定义递归函数
  function recurse(src, prop) {
    let toString = Object.prototype.toString;
    // 如果是对象
    if (toString.call(src) === "[object Object]") {
      let isEmpty = true;
      // 遍历对象
      for (let p in src) {
        isEmpty = false;
        // 递归调用
        recurse(src[p], prop ? prop + "." + p : p);
      }
      // 如果对象为空
      if (isEmpty && prop) {
        result[prop] = {};
      }
    }
    // 如果是数组
    else if (toString.call(src) === "[object Array]") {
      let len = src.length;
      // 如果数组不为空
      if (len > 0) {
        // 遍历数组
        src.forEach(function (e, i) {
          // 递归调用
          recurse(e, prop ? prop + "[" + i + "]" : i);
        });
      }
      // 如果数组为空
      else {
        result[prop] = [];
      }
    }
    // 如果是其他类型
    else {
      result[prop] = src;
    }
  }
  // 调用递归函数
  recurse(obj, "");
  // 返回结果
  return result;
}

console.log(flatten({
	a: {
  	b: 1,
		c: 2,
		d: {
			e: 5
		}
  },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
}));