export { Trie, TrieNode }

/**
 * @private
 * @type TrieNode
 * @description Base class - node element for Trie
 */
class TrieNode {
    public _node: Record<string, TrieNode>;
    public _parent: TrieNode | null; // parent node
    public _value: string | null; // string value of this node

    /**
     * @constructor
     * @param {TrieNode} parentNode which this is a child of
     * @param {string} nodeValue the string value that binds this node on the parent
     */
    constructor(parentNode?: TrieNode, nodeValue?: string) {
        this._node = { };
        this._parent = parentNode || null;
        this._value = nodeValue || null;
    };

    /**
     * @description creates a new TrieNode for the specified element if needed.
     * @param {string} element string representing a single character
     * @returns {TrieNode} node for element
     */
    public _add(element: string, nodeClass: any): any {
        if (undefined === this._node[element]) {
            this._node[element] = new nodeClass(this, element);
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
 * @private
 * @type Trie
 * @description Base class - Trie Object structure
 */
class Trie {
    public _head: any;

    /**
     * @constructor
     * @param {any} trieNodeClass TrieNode class to be instantiated
     */
    constructor(trieNodeClass: any) {
        this._head = trieNodeClass;
    };

    /**
     * @description traverse Trie to lookup a word
     * @param {string} word string for Trie lookup
     * @returns {Array<any>} array of TrieNodes
     */
    public _traverse(word: string): Array<TrieNode> | null {
        var nodeArray: Array<TrieNode> = [ this._head ];
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
     * @description adds string to Trie
     * @param {string} word data to add to Trie
     * @returns {Array<TrieNode>} array of TrieNodes
     */
    public _add(word: string, nodeClass: any): Array<TrieNode> {
        const nodeArray: Array<TrieNode> = [ this._head ];
        for (let i = 0; i < word.length; i++) {
            nodeArray.unshift(nodeArray[0]._add(word[i], nodeClass));
        };
        return nodeArray;
    };
};
