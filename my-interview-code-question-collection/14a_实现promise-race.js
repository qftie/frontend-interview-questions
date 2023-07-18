// 实现一个promise.race 遍历数组使用then方法，即谁先结束就先resolve它的返回值
Promise.race = function (promises) {
  // 返回一个promise，
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      // 包裹一层promise.resolve是为了预防数组里有可能不是promise对象的情况，我们需要将其转为promise
      Promise.resolve(promise).then(
        // 有一个调用了then就完成了
        (value) => {
          resolve(value);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

// 使用示例
const promise1 = new Promise((resolve) =>
  setTimeout(resolve, 1000, "promise1")
);
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "promise2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "promise3")
);

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error)); // 输出 "promise1"
