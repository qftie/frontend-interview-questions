// 首先将起始日期和结束日期转换为Date对象
const startDate = new Date("1999-02-27");
const endDate = new Date("1999-03-01");
// 创建一个空数组来存储有效日期
const validDates = [];
// 循环遍历起始日期和结束日期之间的每一天
for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
  // 检查当前日期是否为闰年
//   const year = date.getFullYear();
//   const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // 如果当前日期是2月29日，但不是闰年，则跳过
//   if (date.getMonth() === 1 && date.getDate() === 29 && !isLeapYear) {
//     continue;
//   }

  // 将当前日期添加到有效日期数组中
  validDates.push(date.toISOString().slice(0, 10));
//   validDates.push(new Date(date));
}
// 打印有效日期数组
console.log(validDates);
