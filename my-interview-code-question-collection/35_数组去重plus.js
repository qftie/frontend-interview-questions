// 使用 Set 去重，需要注意的是 Set 只能去重基本数据类型，对于对象等引用类型需要特殊处理
// 可以使用 JSON.stringify 将对象转为字符串，再进行去重操作
// 如果数组中包含数组，可以使用递归进行处理

let arr = [{ a: 1 }, { a: 1 }, { b: 2 }, [1, 2, 3], [1, 2, 3], 4, 4];
let set = new Set(
  arr.map((item) => (typeof item === "object" ? JSON.stringify(item) : item))
);
let result = Array.from(set).map((item) =>
  typeof item === "string" ? JSON.parse(item) : item
);

console.log(result); // [{a: 1}, {b: 2}, [1, 2, 3], 4]
