
/**
 * @type TrieNode
 * @description Base class - node element for Trie
 */
class TrieNode {
    public _children: Record<string, TrieNode>;
    public _value: string | null; // string value of this node

    /**
     * @constructs
     * @param {TrieNode} parentNode which this is a child of
     * @param {string} nodeValue the string value that binds this node on the parent
     */
    constructor(nodeValue: string | null) {
        this._children = { };
        this._value = nodeValue;
    };

    /**
     * @description creates a new TrieNode for the specified element if needed.
     * @param {string} element string representing a single character
     * @returns {TrieNode} node for element
     */
    public _addChild(element: string): TrieNode {
        if (undefined === this._children[element]) {
            this._children[element] = new this.constructor.prototype.constructor(this, element);
        }
        return this._children[element];
    };

    /**
     * @description retrieves the node associated with the element
     * @param {string} element string represeting a character
     * @returns {TrieNode} element's TrieNode
     */
    public next(element: string): any {
        return this._children[element];
    };
};

/**
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
            throw TypeError('must provide \'string\' or \'Array<String>\'');
        };

        return result;
    }

    /**
     * @description traverse Trie to lookup a word
     * @param {string} word string for Trie lookup
     * @returns {Array<any>} array of TrieNodes
     */
    public _traverse(word: string): Array<TrieNode> | null {
        if (typeof word !== 'string') {
            throw TypeError('must be of type \'string\'')
        }
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
    public _insert(word: string): Array<TrieNode> {
        if (typeof word !== 'string') {
            throw TypeError('Must be type String')
        }
        const nodeArray: Array<TrieNode> = [ this._head ];
        for (let i = 0; i < word.length; i++) {
            nodeArray.unshift(nodeArray[0]._addChild(word[i]));
        };
        return nodeArray;
    };
};

interface ITrie {
    insert(word: string): void;
    remove(word: string): void;
}

export {
    Trie,
    ITrie,
    TrieNode
}
