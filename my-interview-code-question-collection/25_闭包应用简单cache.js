// 隐藏数据，只提供 API，不让外面直接去改变和访问，模拟私有变量
// 缓存小插件
function createCache() {
  let data = {}; // 闭包中的数据，被隐藏，不被外界访问
  return {
    set: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key];
    },
  };
}
let c = createCache();
c.set("a", 100);
console.log(c.get("a"));
