function debounce(fn, delay) {
  var timer; // 维护一个 timer
  // // 返回一个新函数，新函数内部实现防抖的逻辑
  return function () {
    var _this = this; // 取debounce执行作用域的this
    console.log(_this);
    var args = arguments; // // 缓存函数调用时传入的参数
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
    }, delay);
  };
}

// 定义一个需要防抖的函数
function foo(age) {
  console.log('触发了防抖函数');
  console.log(age);
}

// 使用防抖函数创建一个新的函数
var debouncedFoo = debounce(foo, 1000);

// 调用新的函数，该函数会在最后一次调用之后的1000毫秒执行
debouncedFoo(3);
debouncedFoo(3);
debouncedFoo(3); // 这里只有最后一次调用会触发函数执行