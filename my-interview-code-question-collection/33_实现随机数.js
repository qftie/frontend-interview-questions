function generateRandomArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    arr.push(randomNum);
  }
  return arr;
}

console.log(generateRandomArray());
