
import { exception } from "console";

export { Trie, TrieNode }

/**
 * @private
 * @type TrieNode
 * @description an inner node element Trie class
 * @param isEnd denotes Trie node is end of a word upon instantiation
 */
class TrieNode {
    public _node: Record<string, any>;

    /**
     * @constructor
     * @param {boolean} isEnd denotes Trie node is end of a word upon instantiation
     */
    constructor() {
        this._node = { };
    };

    /**
     * @description creates a new TrieNode for the specified element if needed.
     * @param {string} element string representing a single character
     * @returns {TrieNode} node for element
     */
    public _add(element: string, nodeClass: any): any {
        if (this.next(element) === undefined) {
            this._node[element] = new nodeClass();
        }
        return this.next(element);
    };

    /**
     * @description retrieves the node associated with the element
     * @param {string} element string represeting a character
     * @returns {TrieNode} element's TrieNode
     */
    public next(element: string): any {
        return this._node[element];
    };
};

/**
 * @class module:trie.Trie
 * @description Trie Object structure
 */
class Trie {
    public _head: any;

    /**
     * @constructor
     */
    constructor() {  };

    /**
     * @description traverse Trie to lookup a word
     * @param {string} word string for Trie lookup
     * @returns {Array<any>}
     */
    public traverse(word: string): Array<any> {
        var current: any = this._head;
        var nodeArray: Array<any> = [ ];
        try {
            for (let i = 0; i < word.length; i++) {
                current = current.next(word[i]);
                nodeArray.unshift(current);
            };
        } catch (ex) {
            throw exception(`TrieNode does not exist for "${word[word.length - 1]}": word[${word.length - 1}]`);
        };
        
        return nodeArray;
    };
};
