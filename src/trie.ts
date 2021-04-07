export { Trie, TrieNode }

/**
 * @private
 * @type TrieNode
 * @description Base class - node element for Trie
 */
class TrieNode {
    public _child: Record<string, TrieNode>;
    public _parent: TrieNode | null; // parent node
    public _value: string | null; // string value of this node

    /**
     * @constructs
     * @param {TrieNode} parentNode which this is a child of
     * @param {string} nodeValue the string value that binds this node on the parent
     */
    constructor(parentNode?: TrieNode, nodeValue?: string) {
        this._child = { };
        this._parent = parentNode || null;
        this._value = nodeValue || null;
    };

    /**
     * @description creates a new TrieNode for the specified element if needed.
     * @param {string} element string representing a single character
     * @returns {TrieNode} node for element
     */
    public _add(element: string): TrieNode {
        if (undefined === this._child[element]) {
            this._child[element] = new this.constructor.prototype.constructor(this, element);
        }
        return this._child[element];
    };

    /**
     * @description retrieves the node associated with the element
     * @param {string} element string represeting a character
     * @returns {TrieNode} element's TrieNode
     */
    public next(element: string): any {
        return this._child[element];
    };
};

/**
 * @private
 * @type Trie
 * @description Base class - Trie Object structure
 */
class Trie {
    public _head: TrieNode;

    /**
     * @constructor
     * @param {TrieNode} trieNodeClass TrieNode class to be instantiated
     */
    constructor(trieNodeClass: TrieNode) {
        this._head = trieNodeClass;
    };

    /**
     * @public
     * @static
     * @description normalises input to return a list of strings.
     * Checks output array types to ensure only strings are provided
     * @param input A string or list of strings
     * @throws TypeError when input is not a string
     * @return Array of normalised strings
     */
    public static normaliseStringInput(input: Array<string> | string): Array<string> {
        const result: Array<string> = [];
        
        if (Array.isArray(input)) {
            result.push(...input);
        } else {
            result.push(input);
        };

        if (!result.every(e => typeof e === 'string')) {
            throw TypeError();
        };

        return result;
    }


    // public static _isNodeType(item?: TrieNode): boolean {
    //     return item instanceof this._head;
    // };


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
    public _add(word: string): Array<TrieNode> {
        const nodeArray: Array<TrieNode> = [ this._head ];
        for (let i = 0; i < word.length; i++) {
            nodeArray.unshift(nodeArray[0]._add(word[i]));
        };
        return nodeArray;
    };
    
};
