// 实现一个类，其实例可以链式调用，它有一个 sleep 方法，可以 sleep 一段时间后再后续调用
class PlayBoy {
  constructor(name) {
    this.name = name;
    this.queue = Promise.resolve(); // promise队列
  }
  sayHi() {
    console.log(this.name);
    return this;
  }
  sleep(delay) {
    this.queue = this.queue.then((res) => {
      // 返回一个delay秒之后解决的promise
      return new Promise((resolve) => {
        const fn = () => {
          resolve(console.log(delay / 1000 + "秒之后"));
        };
        setTimeout(fn, delay);
      });
    });
    return this;
  }
  play(gameName) {
    this.queue = this.queue.then((res) => {
      console.log("我在玩" + gameName);
    });
    return this;
  }
}

const boy = new PlayBoy("Tom");
boy.sayHi().sleep(1000).play("王者").sleep(2000).play("跳一跳");
// 输出
// 大家好我是Tom
// 1s 之后
// 我在玩王者
// 2s 之后
// 我在玩跳一跳
