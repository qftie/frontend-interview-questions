// 【编程题】链表反转
描述

// 【编程题】链表反转
// 描述

// 【编程题】反转一半的链表

// 将链表的后半部分进行反转。

// 1、若链表节点数为 2n，请反转 n+1 ~ 2n 的部分（n 为正整数）；

// 2、若链表节点数为 2n+1，请反转 n+1 ~ 2n+1 的部分（n 为正整数）。

// 语言限定：JavaScript


// 输入
// 1->2->3->4->5
// 输出
// 1->2->5->4->3

var reverseList = function (head) {
    // 如果head为空或者链表只有一个元素，直接返回head
    if (!head || !head.next) return head;

    // 设置快慢指针，快指针每次往后指两个，满指针每次往后指一个，fast结束时，slow刚好指到中间位置
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 将slow指针位置作为反转操作的开始位置，执行链表反转
    let temp = null, pre = null, cur = slow;
    while (cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    // 找到前半段链表的最后一个位置，接上后半段链表
    let firstHalf = head;
    while (firstHalf.next != slow) {
        firstHalf = firstHalf.next;
    }
    firstHalf.next = pre;
    return head;
}

function NodeList(val) {
    this.val = val
    this.next = null
}

function arrayToNodeList(list) {
    let header = new NodeList(0)
    let current = header
    for (let i = 0; i < list.length; i++) {
        current.next = { val: list[i], next: null }
        current = current.next
    }
    return header.next
}
function nodeListToArray(node) {
    const list = []
    let header = node
    while (header) {
        list.push(header.val)
        header = header.next
    }
    return list
}
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
rl.on('line', (input) => {
    if (input === '') {
        return rl.close();
    }
    console.log(nodeListToArray(reverseList(arrayToNodeList(input.split('->')))).join('->'));
});

