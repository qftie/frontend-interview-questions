/**
 * 2. 请实现find函数，使下列的代码调⽤正确。
 *
 * 约定：
 * title 数据类型为 String
 * userId 为主键，数据类型为 Number
 */

// 有以下数据集
var data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];

// 实现 find 函数
Array.prototype.where = function (rules) {
  let { title: regex } = rules;
  let result = this.filter((item) => {
    console.log(item.title);
    item.title.test(regex);
  });
  return result;
};

Array.prototype.orderBy = function (attr, rule) {
  this.sort((a, b) => {
    if (rule === "desc") {
      return b[attr] - a[attr];
    } else {
      return a[attr] - b[attr];
    }
  });
};

function find(data) {
  return data;
}

// 使 find 函数满足下列执行效果：
// 1. 查找 data 中，符合条件的数据，并进⾏排序
// 2. where、orderBy 可以更换调用顺序且返回相同
// 3. 可以继续调用数组上的其它方法
var result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy("userId", "desc");

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];

// title 以数字结尾，并且以userId降序排列
