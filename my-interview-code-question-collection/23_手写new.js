// 实现一个自定义的 new 操作符
function myNew(constructor, ...args) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  //   const obj = Object.create(constructor.prototype); // 创建一个新对象，并将其原型指向构造函数的原型
  const result = constructor.apply(obj, args); // 将构造函数的 this 指向新对象，并传入参数
  return result instanceof Object ? result : obj; // 如果构造函数返回了一个对象，则返回该对象，否则返回新对象
}

// Example usage
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = myNew(Person, "John", 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30

const jane = new Person("Jane", 25);
console.log(jane.name); // Output: Jane
console.log(jane.age); // Output: 25
