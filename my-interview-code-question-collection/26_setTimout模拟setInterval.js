// 定义一个tick函数，先执行目标函数，再开启一个setTimeout递归tick
// 想象一下setTimeout的流程，时间到了，就将tick放进执行栈，tick函数内先执行目标函数，再递归执行tick
// 注意返回timerId，以便能使用clearTimeout取消
function myInterval(callback, delay) {
  let timerId = null
  const tick = () => {
    callback();
    timerId = setTimeout(tick, delay);
  };
  // 如果想要第一次立即执行
//   tick()

  // 如果不需要立即执行第一次函数
  timerId = setTimeout(tick, delay);
  return timerId;
}

// 调用示例
const intervalId = myInterval(() => {
  console.log(new Date());
}, 1000);

// 取消定时器
// clearTimeout(intervalId);
