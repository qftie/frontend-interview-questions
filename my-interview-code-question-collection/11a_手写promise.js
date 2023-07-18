/* 实现Promise的核心代码思路如下：

1. 定义一个Promise类，包含初始状态为pending的status属性，成功的值value属性，失败的原因reason属性，pending状态时存放成功回调的数组onResolvedCallbacks属性，存放失败回调的数组onRejectedCallbacks属性。

2. 定义成功的函数resolve和失败的函数reject，分别用于改变Promise实例的状态和值，并执行存放在onResolvedCallbacks和onRejectedCallbacks数组中的回调函数。

3. 在Promise类中定义then方法，用于添加成功和失败的回调函数，并返回一个新的Promise实例。

4. 在then方法中，判断当前Promise实例的状态，如果是fulfilled，则异步执行成功的回调函数，并将返回值传递给resolvePromise函数处理；如果是rejected，则异步执行失败的回调函数，并将错误原因传递给resolvePromise函数处理；如果是pending，则将成功和失败的回调函数分别存放在onResolvedCallbacks和onRejectedCallbacks数组中。

5. 在Promise类中定义catch方法，用于添加失败的回调函数，并返回一个新的Promise实例。

6. 在resolvePromise函数中，判断x是否为Promise实例，如果是，则调用then方法获取其返回值；如果不是，则直接调用resolve函数。

7. 在then方法和resolvePromise函数中，使用setTimeout函数将回调函数的执行放入异步任务队列中，以保证回调函数的执行顺序。 */
class MyPromise {
  constructor(executor) {
    this.status = "pending"; // 初始状态为pending
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的原因
    this.onResolvedCallbacks = []; // 存放成功的回调
    this.onRejectedCallbacks = []; // 存放失败的回调

    // 成功的函数
    let resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    // 失败的函数
    let reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // then方法
  then(onFulfilled, onRejected) {
    // 如果onFulfilled不是函数，就将其设置为默认函数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // 如果onRejected不是函数，就将其设置为默认函数
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === "fulfilled") {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }

      if (this.status === "rejected") {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }

      if (this.status === "pending") {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }

  // catch方法
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 解析Promise
function resolvePromise(promise2, x, resolve, reject) {
  // 如果promise2和x指向同一对象，就抛出错误
  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }

  let called = false;

  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;

      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => resolve(value));
};
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason));
};

MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = []; // 存储 promiseList 所有的结果
    const length = promiseList.length;
    let resolvedCount = 0;

    promiseList.forEach((p) => {
      p.then((data) => {
        result.push(data);

        // resolvedCount 必须在 then 里面做 ++
        // 不能用 index
        resolvedCount++;
        if (resolvedCount === length) {
          // 已经遍历到了最后一个 promise
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
  return p1;
};

MyPromise.race = function (promiseList = []) {
  let resolved = false; // 标记
  const p1 = new Promise((resolve, reject) => {
    promiseList.forEach((p) => {
      p.then((data) => {
        if (!resolved) {
          resolve(data);
          resolved = true;
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
  return p1;
};

// 测试
const p1 = new MyPromise((resolve, reject) => {
  // resolve(100)
  // reject('错误信息...')
  setTimeout(() => {
    resolve(100);
  }, 1000);
});

// const p11 = p1.then(data1 => {
//     console.log('data1', data1)
//     return data1 + 1
// })
// const p12 = p11.then(data2 => {
//     console.log('data2', data2)
//     return data2 + 2
// })
// const p13 = p12.catch(err => console.error(err))

const p2 = MyPromise.resolve(200);
const p3 = MyPromise.resolve(300);
const p4 = MyPromise.reject("错误信息...");
// const p5 = MyPromise.all([p1, p2, p3]) // 传入 promise 数组，等待所有的都 fulfilled 之后，返回新 promise ，包含前面所有的结果
// p5.then(result => console.log('all result', result))
const p6 = MyPromise.race([p1, p2, p3]); // 传入 promise 数组，只要有一个 fulfilled 即可返回
p6.then((result) => console.log("race result", result));
