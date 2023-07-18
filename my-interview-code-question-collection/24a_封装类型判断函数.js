function getType(value) {
  // 判断数据是 null 的情况
  if (value === null) {
    return value + "";
  }

  // 判断数据是引用类型的情况
  if (typeof value === "object") {
    // let type = value.toString().split(" ")[1]
    // return type.slice(0,-1).toLowerCase();
    // 需要用Object.prototype.toString,避免用到date等重写的toString方法
    let valueClass = Object.prototype.toString.call(value);

    return valueClass.split(" ")[1].slice(0, -1).toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
}

console.log(getType(new Map()));
console.log(getType(new Date()));
console.log(getType(function () {}));
