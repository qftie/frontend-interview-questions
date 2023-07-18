
const oldObject = {
  name: "小智",
  age: 14,
  color: ["orange", "green", "blue"],
  friend: { name: "小霞" },
};

function deepCopy(obj) {
  // 终止条件：如果obj不是object或者为null，就直接返回
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // 判断object是数组还是对象,初始化新对象为Array或对象
  const newObj = Array.isArray(obj) ? [] : {};
  // for in 遍历的是数组的index和对象的key
  for (let key in obj) {
    // 不要遍历原型链中的属性
    if (obj.hasOwnProperty(key)) {
      // 递归，deepCopy嵌套的object
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}

const newObj = deepCopy(oldObject);

newObj.name = "王二袜子";
newObj.friend.name = "小拉";
newObj.color[0] = "pink";

console.log(newObj);
console.log(oldObject);
