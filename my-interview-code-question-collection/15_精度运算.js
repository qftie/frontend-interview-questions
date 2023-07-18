// 浮点数精度运算
/* 在 JavaScript 中，由于使用二进制进行数字的计算，且小数可能无法用二进制准确表达,所以存在精度丢失的问题。例如，0.1+0.2 的结果不是精确的 0.3，而是一个近似值 0.30000000000000004。 */

/* 在加法运算中，通过将小数部分的位数对齐，使得两个数的小数位数相同，相加后再将结果除以 10 的 n 次幂，就可以得到一个精确的结果。 */
function floatAddition(a, b) {
  // 取出两个浮点数里最多的小数点后的位数
  let lenA = String(a).split(".")[1].length;
  let lenB = String(b).split(".")[1].length;
  const multiplier = 10 ** Math.max(lenA, lenB);
  // console.log(multiplier);
  // 先变成整数，对齐，然后除以multiplier
  return (a * multiplier + b * multiplier) / multiplier;
}
const a = 0.1;
const b = 0.2;
const c = floatAddition(a, b);
console.log(a + b, a+b===0.3);
console.log(c, c===0.3); // 0.3

