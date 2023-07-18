// Object.assign方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，并返回目标对象。
// 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
// Object.assign方法只会拷贝源对象自身的并且可枚举的属性到目标对象身上。
// 该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter。因此，它分配属性，而不仅仅是复制或定义新的属性。
// Object.assign方法可以用来处理简单的数据拷贝，如将一个对象的所有属性拷贝到另一个对象中。

Object.assign = function (target, ...sources) {
  // 如果目标对象为null或undefined，则抛出错误
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  // 将目标对象转换为对象
  const to = Object(target);

  // 遍历源对象
  for (let i = 0; i < sources.length; i++) {
    const nextSource = sources[i];
    // 如果源对象为null或undefined，则跳过
    if (nextSource != null) {
      // 遍历源对象的所有可枚举属性,使用for...in和hasOwnProperty双重判断，确保只拿到本身的属性、方法（不包含继承的）
      for (const nextKey in nextSource) {
        // 检查是否为自身属性
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          // 将源对象的属性复制到目标对象中
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  // 返回目标对象
  return to;
};

// 示例
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 4, c: 5 };
const obj3 = { d: 6 };

const result = Object.assign(obj1, obj2, obj3);

console.log(result); // { a: 1, b: 4, c: 5, d: 6 }
console.log(obj1); // { a: 1, b: 4, c: 5, d: 6 }
