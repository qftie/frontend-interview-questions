const curryfy = function (fn) {
  // 递归
  return function curriedFn(...args) {
    // 如果本次输入的参数长度小于原函数的参数长度,返回柯里化函数，
    // 终止条件：如果已接收的参数等于原函数参数长度（函数长度就是参数数量），将参数传入原函数返回结果
    if (args.length === fn.length) {
      return fn(...args);
    }

    // 递归逻辑，先暂存到此为止接收到的参数，返回一个函数等待接收下次传入的参数，拼接前者和后者组成新的参数，返回柯里化函数，这里用到了一个闭包
    let currentArgs = args;
    return function (...args) {
      currentArgs.push(...args); // 外层函数的args拼接内层函数的arguments
      return curriedFn(...currentArgs);
    };
  };
};
const add = (x, y, z, a) => x + y + z + a; // 原函数fn
const curryAdd = curryfy(add); // 将原函数fn柯里化得到新函数
console.log(curryAdd(1, 2)(3, 1));
console.log(curryAdd(1, 2, 3)(1));

/* 总结：
1. 函数长度是总共需要的参数数量 fnLength
2. 暂存目前为止累计收到的变量 currentVar
3. 递归 curriedFn，返回一个返回值是 curriedFn(currentVar) 的函数
4. 终止条件是 fnLength === currentVar.length
*/
