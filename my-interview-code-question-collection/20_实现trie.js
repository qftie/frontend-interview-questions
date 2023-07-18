/* 为了高效地实现英语单词的前缀匹配，可以使用 trie 数据结构。trie 是一种类似于树的数据结构，用于存储一组字符串，其中树中的每个节点表示一个或多个字符串的前缀。根节点表示空字符串，每个子节点表示一个字符。要搜索前缀，可以从根节点开始遍历 trie，并按照前缀中的字符对应的边进行遍历。如果到达表示单词结尾的节点，则可以将该单词添加到匹配列表中。以下是 JavaScript 中的示例实现： */
// TODO
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  search(prefix) {
    let node = this.root;
    const matches = [];
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return matches;
      }
      node = node.children.get(char);
    }
    this._collect(node, prefix, matches);
    return matches;
  }

  _collect(node, prefix, matches) {
    if (node.isEndOfWord) {
      matches.push(prefix);
    }
    for (const [char, child] of node.children) {
      this._collect(child, prefix + char, matches);
    }
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("cherry");
trie.insert("abs")
console.log(trie.search("ab")); // ['abs']
console.log(trie.search("b")); // ['banana']
console.log(trie.search("c")); // ['cherry']
console.log(trie.search("d")); // []
