for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, 0);
} // 6 6 6 6 6

for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, 0);
} // 1 2 3 4 5

for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, 0);
  })(i);
} // 1 2 3 4 5
