//柯里化之前
function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e);
}
sum(1, 2, 3, 4, 5);
//柯里化
function sum1(a) {
  return function sum2(b) {
    return function sum3(c) {
      return function sum4(d) {
        return function sum5(e) {
          console.log(a + b + c + d + e);
        };
      };
    };
  };
}

console.log(sum1(1)(2)(3)(4));
