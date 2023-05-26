class TrieNode {
  constructor() {
    this.children = new Map();
  }
}

class Trie {
  constructor(str) {
    this.root = new TrieNode();
    this.endSymbol = '*';
    this.populateSuffixTrie(str);
  }

  populateSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      this.insertSubstring(i, str);
    }
  }

  insertSubstring(index, str) {
    let node = this.root;
    for (let i = index; i < str.length; i++) {
      const letter = str.charAt(i);
      if (!node.children.has(letter)) {
        node.children.set(letter, new TrieNode());
      }
      node = node.children.get(letter);
    }
    node.children.set(this.endSymbol, null);
  }

  contains(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      const letter = str.charAt(i);
      if (!node.children.has(letter)) {
        return false;
      }
      node = node.children.get(letter);
    }
    return node.children.has(this.endSymbol);
  }

  printAllWords() {
    const words = [];
    this.collectWords(this.root, '', words);
    console.log(words);
  }

  collectWords(node, prefix, words) {
    if (node.children.has(this.endSymbol)) {
      words.push(prefix);
    }

    for (const [letter, child] of node.children) {
      if (letter !== this.endSymbol) {
        this.collectWords(child, prefix + letter, words);
      }
    }
  }
}

const trie = new Trie('arun');
console.log(trie.contains('run'));
trie.populateSuffixTrie('ashik');
console.log(trie.contains('shik'));

trie.printAllWords();
