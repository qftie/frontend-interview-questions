// TODO
function toCamelCase(str) {
    // macth表示匹配到的子串，p1表示匹配到的第一个括号内的字符
  return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
}

function keysToCamelCase(data) {
  // 对value执行递归函数
  // 终止条件，如果不等于object证明递归到底了，直接返回
  if (typeof data !== "object") return data;

  if (Array.isArray(data)) {
    return data.map((item) => keysToCamelCase(item));
  } else if (typeof data === "object" && data !== null) {
    // 使用Object.keys()方法和reduce()方法创建一个新对象，其中包含更改后的键名，注意在里面使用递归
    return Object.keys(data).reduce((result, key) => {
      let newKey = toCamelCase(key);
      result[newKey] = keysToCamelCase(data[key]);
      return result;
    }, {});
  }
}

const data = {
  first_name: "John",
  last_name: "Doe",
  address: {
    street_name: "123 Main St",
    city_name: "Anytown",
    state_name: "CA",
  },
};

console.log(data);
const convertedData = keysToCamelCase(data);
console.log(convertedData);
