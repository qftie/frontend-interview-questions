function generateFn() {
  let num = 2; // 初始值为2，下一个质数从2开始
  return function getPrime() {
    while (true) {
      if (isPrime(num)) {
        const prime = num;
        num++;
        return prime;
      }
      num++;
    }
  };
}

// 判断一个数是否为质数
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 使用 generateFn 生成 getPrime 函数
const getPrime = generateFn();

// 调用 getPrime 函数获取下一个质数
console.log(getPrime()); // 输出 2
console.log(getPrime()); // 输出 3
console.log(getPrime()); // 输出 5
console.log(getPrime()); // 输出 7

/* 总结
实现getPrime()，调用一次就得到下一个质数，还是用闭包，先用一个generateFn的函数，里面搞一个变量，返回一个函数，里面的函数调用过外面区域的变量之后，这个变量作用域就不会销毁，类似一个里层的全局函数
*/
