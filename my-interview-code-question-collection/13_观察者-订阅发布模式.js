/* 在 addEventListener 中，添加事件处理程序的元素是发布者，而事件处理程序函数则是订阅者。当事件被触发时，事件的发布者会调用所有已注册的事件处理程序函数（也就是订阅者），并将事件对象作为参数传递给它们。 */

/* 可以将示例中的PubSub类看作是一个简单的消息代理，它负责维护事件和回调函数之间的关系，并在事件被触发时将事件和相关参数传递给已注册的回调函数。在这个示例中，回调函数可以被视为订阅者，它们通过调用subscribe方法将自己注册到指定的事件上，然后通过调用unsubscribe方法取消自己的注册。当事件被触发时，消息代理会遍历已注册的回调函数并将事件和参数传递给它们，这相当于向订阅者发送消息。 */

/* 在这个示例中，我们定义了一个PubSub类，它具有subscribe、unsubscribe和publish方法来实现发布-订阅模式。subscribe方法用于将一个回调函数注册到指定的事件名上，unsubscribe方法用于取消已注册的回调函数，publish方法用于触发指定事件，并将数据传递给所有已注册的回调函数。

在示例中，我们创建了一个PubSub实例，并在其中注册了两个回调函数callback1和callback2，它们都被注册到event1事件上。然后我们调用publish方法触发event1事件，并传递了一个字符串作为参数。这会导致所有已注册的回调函数都被调用，并将这个字符串打印到控制台上。

接着，我们调用unsubscribe方法，从event1事件中取消了callback2回调函数的注册。最后，我们再次调用publish方法触发event1事件，并传递了另一个字符串作为参数。这次，只有callback1回调函数被调用，并将这个字符串打印到控制台上。 */
class PubSub {
  // PubSub：消息代理，连接事件和回调函数
  // 回调函数：订阅者，订阅或取消订阅事件，可以有多个
  // 事件：发布者，发布的信息就是回调函数需要的参数，可以有多个
  constructor() {
    // 创建一个空对象来存储事件和对应的回调函数
    // 例如：{事件1：[callback1, callback2], 事件2：[callback1, callback2,3]}
    this.events = {};
  }

  // 向指定事件添加一个回调函数
  subscribe(eventName, callback) {
    // 如果事件尚未存在，则将其添加到事件列表中
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    // 将回调函数添加到事件的回调函数列表中
    this.events[eventName].push(callback);
  }

  // 从指定事件中删除一个回调函数
  unsubscribe(eventName, callback) {
    // 如果事件存在，则查找回调函数并将其删除
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(callback);
      if (index > -1) {
        this.events[eventName].splice(index, 1);
      }
    }
  }

  // 触发指定事件，并将参数传递给每个已注册的回调函数
  publish(eventName, ...args) {
    // 如果事件存在，则调用订阅了该事件的每个回调函数并传递参数
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback.apply(this, args);
      });
    }
  }
}


// Example usage:
const pubsub = new PubSub();

// 订阅者1
const callback1 = (data) => {
  console.log("Callback 1:", data);
};

// 订阅者2
const callback2 = (data) => {
  console.log("Callback 2:", data);
};

// callback1订阅事件1
pubsub.subscribe("event1", callback1);
// callback2订阅事件1
pubsub.subscribe("event1", callback2);

// 事件1发布参数（hello world）给所有订阅者（callback1 2执行）
pubsub.publish("event1", "Hello, world!");

// callback2取消对事件1的订阅
pubsub.unsubscribe("event1", callback2);

// 事件1发布参数（hello world）给所有订阅者（callback1执行）
pubsub.publish("event1", "Goodbye, world!");
