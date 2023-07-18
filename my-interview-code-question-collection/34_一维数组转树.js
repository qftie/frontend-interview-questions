// 定义一个函数，输入一维数组和根节点id，返回树形结构
function arrayToTree(arr, parentId) {
  // 定义一个空数组，用来存放树形结构
  const tree = [];
  // 遍历一维数组
  arr.forEach((item) => {
    // 如果当前节点的父节点id等于传入的parentId
    if (item.parentId === parentId) {
      // 递归调用函数，将当前节点作为父节点id，继续查找子节点
      const children = arrayToTree(arr, item.id);
      // 如果当前节点存在子节点
      if (children.length) {
        // 将子节点添加到当前节点的children属性中
        item.children = children;
      }
      // 将当前节点添加到树形结构中
      tree.push(item);
    }
  });
  // 返回树形结构
  return tree;
}

// 示例
const arr = [
  { id: 1, name: "节点1", parentId: 0 },
  { id: 2, name: "节点2", parentId: 1 },
  { id: 3, name: "节点3", parentId: 1 },
  { id: 4, name: "节点4", parentId: 2 },
  { id: 5, name: "节点5", parentId: 2 },
  { id: 6, name: "节点6", parentId: 3 },
  { id: 7, name: "节点7", parentId: 3 },
  { id: 8, name: "节点8", parentId: 4 },
  { id: 9, name: "节点9", parentId: 4 },
  { id: 10, name: "节点10", parentId: 5 },
  { id: 11, name: "节点11", parentId: 5 },
  { id: 12, name: "节点12", parentId: 6 },
  { id: 13, name: "节点13", parentId: 6 },
  { id: 14, name: "节点14", parentId: 7 },
  { id: 15, name: "节点15", parentId: 7 },
];
const tree = arrayToTree(arr, 0);
console.log(tree);

/* 总结
递归地调用 children = arrayToTree(arr, item.id);
*/
