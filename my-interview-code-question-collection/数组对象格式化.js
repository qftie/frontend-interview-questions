let obj = {
  a: "1",
  b: {
    c: "2",
    D: {
      E: "3",
    },
  },
};
// 转化为如下：
// let obj = {
//   a: "1",
//   b: {
//     c: "2",
//     d: {
//       e: "3",
//     },
//   },
// };

// 代码实现
function keysLower(obj) {
  let reg = new RegExp("([A-Z]+)", "g");
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let temp = obj[key];
      if (reg.test(key.toString())) {
        // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换后的属性
        temp = obj[
          key.replace(reg, function (result) {
            return result.toLowerCase();
          })
        ] = obj[key];
        // 将之前大写的键属性删除
        delete obj[key];
      }
      // 如果属性是对象或者数组，重新执行函数
      if (
        typeof temp === "object" ||
        Object.prototype.toString.call(temp) === "[object Array]"
      ) {
        keysLower(temp);
      }
    }
  }
  return obj;
}

console.log(keysLower(obj));