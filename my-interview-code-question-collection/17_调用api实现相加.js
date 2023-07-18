// 加入本地没有相加的函数，执行相加操作需要调用服务端的api，本地传入的参数可能有多个，如何最快地实现这个操作
async function addNumbers(...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const response = await fetch(`/add?number=${numbers[i]}`);
    const result = await response.json();
    sum += result;
  }

  return sum;
}
