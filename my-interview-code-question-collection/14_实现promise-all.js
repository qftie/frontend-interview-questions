// 实现promise.all并加上示例
function promiseAll(promises) {
  // 返回一个新的Promise对象
  return new Promise((resolve, reject) => {
    // 存储每个Promise的结果
    let results = [];
    // 计数器，用于判断所有Promise是否都已经执行完毕
    let resolvedCount = 0;
    // 遍历所有Promise
    for (let i = 0; i < promises.length; i++) {
      // 对每个Promise进行处理
      promises[i]
        .then((result) => {
          // 将结果存储到results数组中
          results[i] = result;
          // 计数器加1(必须在then里面自增)
          resolvedCount++;
          // 如果所有Promise都已经执行完毕，则resolve结果
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // 如果其中一个Promise出错，则reject错误
          reject(error);
        });
    }
  });
}

// 示例
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
// const promise3 = Promise.reject(3);
const promise3 = Promise.resolve(3);

promiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });
