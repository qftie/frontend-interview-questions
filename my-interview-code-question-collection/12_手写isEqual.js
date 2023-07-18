const obj1 = {
  a: 100,
  b: {
    x: 200,
    y: 300,
    z:200
  },
};

const obj2 = {
  a: 100,
  b: {
    x: 200,
    y: 300,
    z: 200,
  },
};

// 判断是否是 object，注意要判断是否是null
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
const isEqual = (a, b) => {
  // 1. 终止条件，判断是否是object
  if (!isObject(a) && !isObject(b)) {
    return a === b;
  }

  // 2. 用Object.keys判断keys长度是否相等
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  // 3. 逻辑：以a为基准，和b递归比较
  for (let key in a) { // in也可以用于数组
    if (!isEqual(a[key], b[key])) return false;
  }
  return true;
};
console.log(isEqual(obj1, obj2));
console.log(obj1 === obj2);
