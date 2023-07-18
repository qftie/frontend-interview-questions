const list = [1, 2, 3, 4, 5];

// 1. 使用reduce方法，将Promise串行执行
// list.reduce((promise, item) => {
//   // 用Promise配合着reduce不停的在promise后面叠加.then
//   return promise.then(() => {
//     // // 返回一个新的Promise，等待1秒后输出item
//     return new Promise((resolve) => {
//       // resolve放定时器里，定时器到时间，打印完item之后才执行resolve
//       setTimeout(() => {
//         console.log(item);
//         resolve();
//       }, 1000);
//     });
//   });
// }, Promise.resolve()); // 初始值是一个resolve的promise

// 2. 使用async await更简单得实现
async function serialExecution(list) {
  // 在每个项上等待一个 Promise，在 1 秒后解决。在 Promise 解决后，它输出项并解决 Promise。
  for (const item of list) {
    // 对比以上代码，可知await其实就是相当于.then
    await new Promise((resolve) => {
        setTimeout(()=>{
            console.log(item);
            resolve()
        },1000)
    })
  }
}

serialExecution(list);
