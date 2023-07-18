const myInstanceof = (leftValue, rightValue) => {
    let left = leftValue.__proto__
    let protoType = rightValue.prototype // 注意是小写
    // 一直往上遍历原型，直到找到目标原型，或者遍历到null
    while (true) {
        if (left===null) return false
        if (left===protoType) return true
        left = left.__proto__;
    }

}

let a = [1,3,4,24]
function foo() {}
console.log(a instanceof Array, myInstanceof(a, Array));
console.log(a instanceof Function, myInstanceof(a, Function));
console.log(foo instanceof Object, myInstanceof(foo, Object));
console.log(foo instanceof Function, myInstanceof(foo, Function));
