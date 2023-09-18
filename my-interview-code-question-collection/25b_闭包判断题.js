function func () {
    let i = 0
    return () => {
        i++;
        return i
    }
}

const func1 = func()
const func2 = func()

console.log(func1());
console.log(func2());
console.log(func1());
console.log(func2()); 
/* 总结
闭包判断：总的来说，就是一个闭包。。。。
1
1
2
2
*/