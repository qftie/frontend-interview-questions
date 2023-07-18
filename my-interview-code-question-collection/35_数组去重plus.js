let arr = [{ a: 1 }, { a: 1 }, { b: 2 }, [1, 2, 3], [1, 2, 3], 4, 4];
let set = new Set(
  arr.map((item) => (typeof item === "object" && typeof item !== "string" ? JSON.stringify(item) : item))
);
let result = Array.from(set).map((item) =>
  typeof item === "string" ? JSON.parse(item) : item
);

console.log(result); // [{a: 1}, {b: 2}, [1, 2, 3], 4]

/* 总结
1. 使用 Set 去重，需要注意的是 Set 只能去重基本数据类型，对于对象等引用类型需要特殊处理
2. 可以使用 JSON.stringify 将对象（非基本类型）转为 json 字符串，再进行去重操作ode
3. 去重之后使用 JSON.parse 把 json 字符串转回 js 对象
4. 联想记忆：stringfy 和 parse 对应 python 里的 dumps 和 loads
5. 进阶：如果原数组就有字符串，可以先将字符串单独提出去重最后最后再加回来
*/
