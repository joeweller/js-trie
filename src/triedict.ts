import { Trie, TrieNode, ITrie} from './trie'

const ExceptionErrors: Record<string, string> = {
    PARAM_NOT_STRING:         ` must be a string`,
    PARAM_NOT_LIST_OF_STRING: ` must be a list of string`
}

/**
 * @private
 * @class TrieDictNode
 * @description child node class for TrieDict
 */
class TrieDictNode extends TrieNode {
    public _isWord: boolean;

    /**
     * @constructs
     */
    constructor(value: string | null) {
        super(value);
        this._isWord = false;
    };

    /**
     * @function module:triedict.TrieDictNode#setWord
     * @description update word state for node
     * @param {boolean} value modifies state of node provided value
     */
    public setWord(value: boolean): void {
        this._isWord = value;
    };

    /**
     * @function module:triedict.TrieDictNode#isWord
     * @description returns word state of the TrieDictNode
     * @returns {boolean} word state of node
     */
    public isWord(): boolean {
        return this._isWord;
    };
};

/**
 * @public
 * @constructor
 * @class TrieDict
 * @description TrieDict class
 */
class TrieDict extends Trie implements ITrie {
    private _ignoreCase: boolean;

    /**
     * @constructs
     * @param {boolean} ignoreCase identifies if Trie should ignore case
     */
    constructor(ignoreCase?: boolean) {
        super(new TrieDictNode(null));
        this._ignoreCase = ignoreCase || false;
    };

    /**
     * @private
     * @function _alignCase
     * @description returns input string aligned with Trie case state
     * @param word for case alignment
     * @returns {string} word aligned with case state
     */
    private _alignCase(word: string): string {
        return (this._ignoreCase) ? word.toLowerCase() : word;
    };

    /**
     * @static
     * @method isTrieDictNode
     * @description determines if specified object is instance of TrieDictNode
     * @param item an object
     * @returns {boolean} result of test
     */
    public static isNodeType(item?: TrieNode): item is TrieDictNode {
        return item instanceof TrieDictNode;
    };

    /**
     * @instance
     * @function ignoresCase
     * @description describes current Trie state that determines if methods
     * should ignore alpha character case.
     * This state is declared upon TrieDict initialization
     * @returns {boolean} ignore case state
     */
    public ignoresCase(): boolean {
        return this._ignoreCase;
    };

    /**
     * @instance
     * @function insert
     * @description adds a word to the Trie
     * @param {string} word word to be added to Trie
     * @returns {void}
     */
    public insert(word: string): void {
        if (typeof word !== 'string') {
            throw TypeError('\'word\' ' + ExceptionErrors['PARAM_NOT_STRING'])
        }

        const result: Array<TrieNode> = this._insert(this._alignCase(word));
        const resultItem: TrieNode = result[0];
        if (TrieDict.isNodeType(resultItem)) {
            resultItem.setWord(true);
        };
    };

    /**
     * @instance
     * @function insertMany
     * @description inserts a list of words to the Trie
     * @param {Array<string>} words list of words to be added to Trie
     * @returns {void}
     */
    public insertMany(words: Array<string>): void {
        if (!Array.isArray(words) || !words.every((word) => {return typeof word === 'string'})) {
            throw TypeError('\'words\'\ ' + ExceptionErrors['PARAM_NOT_LIST_OF_STRING']);
        }
        for (let i = 0; i < words.length; ++i) {
            this._insert(this._alignCase(words[i]));
        };
    };

    /**
     * @instance
     * @function remove
     * @description removes a word from the Trie
     * @param {string} word word to delete from Trie
     * @returns {void}
     */
    public remove(word: string): void {
        if (typeof word !== 'string') {
            throw TypeError('\'word\' ' + ExceptionErrors['PARAM_NOT_STRING'])
        }
        let result: Array<TrieNode> | null = this._traverse(this._alignCase(word));
        let resultItem = result?.[0];
        if (TrieDict.isNodeType(resultItem)) {
            resultItem.setWord(false);
        };
    };

    /**
     * @instance
     * @function removeMany
     * @description deletes words from the Trie
     * @param {Array<string>} words list of words to remove from Trie
     * @returns {void}
     */
    public removeMany(words: Array<string>): void {
        if (!Array.isArray(words) || !words.every((word) => {return typeof word === 'string'})) {
            throw TypeError('\'words\'\ ' + ExceptionErrors['PARAM_NOT_LIST_OF_STRING']);
        }
        for (let i = 0; i < words.length; ++i) {
            this.remove(this._alignCase(words[i]));
        };
    };

    /**
     * @instance
     * @function exists
     * @description checks if provided string exists as a word within the Trie
     * @param {string} word string to search within Trie
     * @returns {boolean} isWord state for node
     */
    public exists(word: string): boolean {
        const result: Array<TrieNode> | null = this._traverse(this._alignCase(word));
        const resultItem = result?.[0];
        if (TrieDict.isNodeType(resultItem)) {
            return resultItem.isWord();
        };
        return false;
    };
};

export { TrieDict }
