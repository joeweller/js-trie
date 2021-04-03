
export { Trie, TrieNode }


/**
 * @private
 * @type TrieNode
 * @description an inner node element Trie class
 * @param isEnd denotes Trie node is end of a word upon instantiation
 */
abstract class TrieNode {
    public _node: Record<string, any>;
    public _parent: any | null; // parent node
    public _value: string | null; // string value of this node

    /**
     * @constructor
     * @param {any} parentNode which this is a child of
     * @param {string} nodeValue the string value that binds this node on the parent
     */
    constructor(parentNode?: any, nodeValue?: string) {
        this._node = { };
        this._parent = parentNode || null;
        this._value = nodeValue || null;
    };

    /**
     * @description creates a new TrieNode for the specified element if needed.
     * @param {string} element string representing a single character
     * @returns {TrieNode} node for element
     */
    public _add(element: string, trieNodeClass: any): any {
        if (undefined === this._node[element]) {
            this._node[element] = new trieNodeClass(this, element);
        }
        return this._node[element];
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
abstract class Trie {
    public _head: any;

    /**
     * @constructor
     * @param {any} trieNodeClass trieNodeClass to be instantiated
     */
    constructor(trieNodeClass: any) {
        this._head = trieNodeClass;
    };

    /**
     * @description traverse Trie to lookup a word
     * @param {string} word string for Trie lookup
     * @returns {Array<any>} array of TrieNodes
     */
    public _traverse(word: string): Array<any> | null {
        var nodeArray: Array<any> = [ this._head ];
        try {
            for (let i = 0; i < word.length; i++) {
                nodeArray.unshift(nodeArray[0].next(word[i]));
            };
        } catch (ex) {
            if (!(ex instanceof TypeError)) {
                throw ex;
            } else {
                return null;
            }
        };
        return nodeArray;
    };

    /**
     * @description add word to trie
     * @param {string} word string to add to trie
     * @returns {Array<any>} array of TrieNodes
     */
    public _add(word: string, trieNodeClass: any): Array<any> {
        const nodeArray: Array<any> = [ this._head ];
        for (let i = 0; i < word.length; i++) {
            nodeArray.unshift(nodeArray[0]._add(word[i], trieNodeClass));
        };
        return nodeArray;
    };


};
