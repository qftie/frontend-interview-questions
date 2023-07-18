// 实现 Function.prototype.call
Function.prototype.call = function (context = window, ...args) {
  // 首先判断调用 call 的对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.call called on non-function");
  }
  // 将当前函数作为传入的 context 对象的方法
  context.fn = this;
  // 执行该方法
  const result = context.fn(...args);
  // 删除该方法
  delete context.fn;
  // 返回执行结果
  return result;
};

// 示例
function greet() {
  console.log(`你好，${this.name}！`);
}

const person = {
  name: "小明",
};

greet.call(person); // 输出 "你好，小明！"
