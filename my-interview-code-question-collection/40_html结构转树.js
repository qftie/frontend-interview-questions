// 定义一个函数，参数为html字符串
function htmlStrToTree(htmlStr) {
  // 创建一个虚拟的根节点
  const rootNode = {
    tagName: "root",
    children: [],
  };
  // 创建一个栈，用于存储当前节点的父节点
  const stack = [rootNode];
  // 使用正则表达式匹配html标签
  const tagReg = /<([a-zA-Z]+)\s*([^>]*)>/g;
  // 使用正则表达式匹配html标签的属性
  const attrReg = /([a-zA-Z]+)="([^"]*)"/g;
  // 记录上一个标签的结束位置
  let lastIndex = 0;
  // 循环匹配所有的标签
  let match;
  while ((match = tagReg.exec(htmlStr))) {
    // 获取标签的名称和属性
    const tagName = match[1];
    const attrsStr = match[2];
    // 创建一个新节点
    const newNode = {
      tagName,
      attrs: {},
      children: [],
    };
    // 将新节点加入父节点的children数组中
    stack[stack.length - 1].children.push(newNode);
    // 将新节点的父节点入栈
    stack.push(newNode);
    // 循环匹配标签的属性
    let attrMatch;
    while ((attrMatch = attrReg.exec(attrsStr))) {
      // 获取属性的名称和值
      const attrName = attrMatch[1];
      const attrValue = attrMatch[2];
      // 将属性加入新节点的attrs对象中
      newNode.attrs[attrName] = attrValue;
    }
    // 记录上一个标签的结束位置
    lastIndex = tagReg.lastIndex;
  }
  // 将根节点的children数组返回
  return rootNode.children;
}

// 示例
const html = '<div class="container"><h1>Hello World</h1></div>';
const tree = htmlStrToTree(html);
console.log(tree);
