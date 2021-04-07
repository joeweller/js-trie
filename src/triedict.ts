import { ThrowStatement } from 'typescript';
import { Trie, TrieNode } from './trie'

export { TrieDict }

/**
 * @private
 * @class TrieDictNode
 * @description child node class for TrieDict
 */
class TrieDictNode extends TrieNode implements TrieNode {
    public _isWord: boolean;

    /**
     * @constructor
     */
    constructor() {
        super();
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
class TrieDict extends Trie {
    private _ignoreCase: boolean;

    /**
     * @constructs
     * @param {boolean} ignoreCase identifies if Trie should ignore case
     */
    constructor(ignoreCase?: boolean) {
        super(new TrieDictNode());
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
     * @instance
     * @function isIgnoreCase
     * @description describes current Trie state that determines if methods 
     * should ignore alpha character case.
     * This state is declared upon TrieDict initialization
     * @returns {boolean} ignore case state
     */
    public isIgnoreCase(): boolean {
        return this._ignoreCase;
    };

    /**
     * @instance
     * @function add
     * @description adds a word to the Trie
     * @param {Array<string> | string} wordOrWords word or list of words to be
     * added to Trie
     * @returns {void}
     */
    public add(wordOrWords: Array<string> | string): void {
        wordOrWords = Trie.normaliseStringInput(wordOrWords);

        for (let i = 0; i < wordOrWords.length; ++i) {
            const result: Array<TrieNode> = this._add(this._alignCase(wordOrWords[i]));
            const resultItem: TrieNode = result[0];
            if (TrieDict.isTrieDictNode(resultItem)) {
                resultItem.setWord(true);
            };
        };
    };

    /**
     * @instance
     * @function delete
     * @description deletes a word from the Trie
     * @param {Array<string> | string} wordOrWords word or list of words
     * to delete from Trie
     * @returns {void}
     */
    public delete(wordOrWords: Array<string> | string): void {
        wordOrWords = Trie.normaliseStringInput(wordOrWords);

        for (let i = 0; i < wordOrWords.length; ++i) {
            let result: Array<TrieNode> | null = this._traverse(this._alignCase(wordOrWords[i]));
            let resultItem = result?.[0];
            if (TrieDict.isTrieDictNode(resultItem)) {
                resultItem.setWord(false);
            };
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
        if (TrieDict.isTrieDictNode(resultItem)) {
            return resultItem.isWord();
        };
        return false;
    };

    /**
     * @static
     * @method isTrieDictNode
     * @description determines if specified object is instance of TrieDictNode
     * @param item an object
     * @returns {boolean} result of test
     */
    public static isTrieDictNode(item?: TrieNode): item is TrieDictNode {
        return item instanceof TrieDictNode;
    };
};
