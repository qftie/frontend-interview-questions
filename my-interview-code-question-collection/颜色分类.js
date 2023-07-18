/* 【颜色分类】
问题描述: 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排 列。 
此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。  */
/* 输入：2 0 2 1 1 0  */
/* 输出：[0,0,1,1,2,2] */

const colorClassify = (nums) => {
  let resDictionary = {};
  let resList = [];
  for (num of nums) {
    resDictionary[String(num)]
      ? (resDictionary[String(num)] += 1)
      : (resDictionary[String(num)] = 1);
  }
  console.log(resDictionary);
  for (key in resDictionary) {
    value = resDictionary[String(key)];
    console.log(value);
    while (value) {
      resList.push(Number(key));
      value--;
    }
  }
  console.log(resList);
};
colorClassify([2, 0, 2, 1, 1, 0]);
