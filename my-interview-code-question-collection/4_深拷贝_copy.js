const oldObject = {
  name: "小智",
  age: 14,
  color: ["orange", "green", "blue"],
  friend: { name: "小霞" },
  set: new Set([3,4])
};
// const oldArray = [[0, 1], 2, 3];

const deepCopy = (object) => {
    // 判断终止条件
    if (typeof object !== 'object' || object===null) return object
    const newObj = (Array.isArray(object)?[]:{})
    // 递归深拷贝每个
    for (key in object) {
        newObj[key] = deepCopy(object[key])
    }
    return newObj
};

const newObj = deepCopy(oldObject);
newObj.name = "王二袜子";
newObj.friend.name = "小拉";
newObj.color[0] = 'pink'
console.log(oldObject);
console.log(newObj);
// const newArray = deepCopy(oldArray);
// newArray[0][1] = 30;
// console.log(oldArray);
// console.log(newArray);
