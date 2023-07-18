function shallowClone(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}
// 浅拷贝
const obj1 = {
  name: "init",
  arr: [1, [2, 3], 4],
};
const obj3 = Object.assign({}, ); // 一个浅拷贝方法
obj3.name = "update";
obj3.arr = [5, 6, 7]; // 新旧对象还是共享同一块内存

console.log("obj1", obj1); // obj1 { name: 'init',  arr: [ 1, [ 5, 6, 7 ], 4 ] }
console.log("obj3", obj3); // obj3 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }
