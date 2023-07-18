Function.prototype.myBind = function (context, ...args) {
  // 缓存原函数
  const self = this;
  // 返回一个新函数
  return function F(...args2) {
    // 判断是否通过 new 调用
    // if (this instanceof F) {
    //   // 如果是通过 new 运算符调用，那么就将 self 函数作为构造函数来创建一个新的对象，
    //   // 并将传递给 bind 函数的参数和新函数被调用时传递的参数传递给构造函数。
    //   return new self(...args, ...args2);
    // }
    // 普通函数调用，需要绑定上下文并执行
    return self.apply(context, [...args, ...args2]);
  };
};

function foo(a, b, c, d) {
  console.log(this.name, a, b, c, d);
}

const obj = { name: "moss" };
// const bound = foo.bind(obj, 1, 2,3,4);
// bound(); // 输出：moss 1 2 3 4
const bound = foo.myBind(obj, 1, 2, 3);
bound(4); // 输出：moss 1 2 3 4
