import { Trie, TrieNode } from './trie'

export { TrieDict, TrieDictNode }

/**
 * @class module:triedict.TrieDictNode
 * @description child node class for TrieDict
 */
class TrieDictNode extends TrieNode {
    public _isWord: boolean;

    /**
     * @constructor
     * @param {boolean} isEnd denotes Trie node is end of a word upon instantiation
     */
    constructor() {
        super()
        this._isWord = false;
    };


    /**
     * @description  current state of the TrieDictNode denoting. Optional
     * boolean param will modify existing state
     * @param {boolean} option modifies current state of node to received param
     * @returns {boolean} word state
     */
    public isWord(option?: boolean): boolean {
        if (undefined !== option) { this._isWord = option };
        return this._isWord;
    };
};

/**
 * @class module:triedict.TrieDict
 * @description TrieDict class
 */
class TrieDict extends Trie {
    public _ignoreCase: boolean;

    /**
     * @constructor
     * @param {boolean} ignoreCase identifies if Trie should ignore case
     */
    constructor(ignoreCase?: boolean) {
        super(new TrieDictNode());
        this._ignoreCase = ignoreCase || false;
    };

    public static isTrieDictNode(item?: TrieNode): item is TrieDictNode {
        return item instanceof TrieDictNode;
    };

    /**
     * @description describes current Trie state that determines if methods 
     * should ignore alpha character case.
     * This state is declared upon TrieDict initialization
     * @function module:triedict.TrieDict#isIgnoreCase
     * @returns {boolean} ignore case state
     */
    public isIgnoreCase(): boolean {
        return this._ignoreCase;
    };

    /**
     * @description returns input string aligned with current case state
     * @param word for case alignment
     * @returns {string} word aligned with case state
     */
    public alignCase(word: string): string {
        return (this._ignoreCase) ? word.toLowerCase() : word;
    };

    /**
     * @function module:triedict.TrieDict#add
     * @description adds a word to the Trie
     * @param {string} word string to be loaded
     * @returns {void}
     */
    public add(word: string): void {
        const result: Array<TrieNode> = this._add(this.alignCase(word), TrieDictNode);
        const resultItem: TrieNode = result[0];
        if (TrieDict.isTrieDictNode(resultItem)) {
            resultItem.isWord(true);
        };
    };

    /**
     * @function module:triedict.TrieDict#addAll
     * @description adds an array of strings into the Trie
     * @param {Array<string>} wordArray array of strings to be added
     * @returns {void}
     */
    public addAll(wordArray: Array<string>): void {
        for (let i = 0; i < wordArray.length; i++) {
            this.add(wordArray[i]);
        };
    };

    /**
     * @function module:triedict.TrieDict#delete
     * @description deletes a word from the Trie
     * @param {string} word string to delete
     * @returns {void}
     */
    public delete(word: string): void {
        let result: Array<TrieNode> | null = this._traverse(this.alignCase(word));
        let resultItem = result?.[0];
        if (TrieDict.isTrieDictNode(resultItem)) {
            resultItem.isWord(false)
        };
    };

    /**
     * @function module:triedict.TrieDict#deleteAll
     * @description deletes an array of words from the Trie
     * @param {Array<string>} wordArray array of strings to delete
     * @returns {void}
     */
    public deleteAll(wordArray: Array<string>): void {
        for (let i = 0; i < wordArray.length; i++) {
            this.delete(wordArray[i]);
        };
    };
    
    /**
     * @function module:triedict.TrieDict#exists
     * @description checks if provided string exists as a word within the Trie
     * @param {string} word string to search within Trie
     * @returns {boolean} result of opteration
     */
    public exists(word: string): boolean {
        const result: Array<TrieNode> | null = this._traverse(this.alignCase(word));
        const resultItem = result?.[0];
        if (TrieDict.isTrieDictNode(resultItem)) {
            return resultItem.isWord();
        }
        return false;
    };
};
