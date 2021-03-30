
import { exception } from "console";
import { Trie, TrieNode } from './trie'

export { TrieDict, TrieDictNode }

/**
 * @private
 * @type TrieDictNode
 * @description an inner node element Trie class
 * @param isEnd denotes Trie node is end of a word upon instantiation
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
     * @description adds a new TrieDictNode for the specified element if needed. If
     * TrieDictNode exists then modify if it is end of a word
     * @param {string} element string representing a single character
     * @param {boolean} isEnd determins if new node should be marked as end of word
     * @returns {TrieDictNode} node for element
     */
    public add(element: string, isEnd: boolean): TrieDictNode {
        const childNode = this._add(element, TrieDictNode);
        childNode.isWord(isEnd);
        return childNode;
    };

    /**
     * @description returns current state of the TrieDictNode denoting. Optional
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
 * @class module:trie.Trie
 * @description Trie Object structure
 */
class TrieDict extends Trie {
    public _head: TrieDictNode;
    public _ignoreCase: boolean;

    /**
     * @constructor
     * @param {boolean} ignoreCase identifies if Trie should ignore case
     */
    constructor(ignoreCase?: boolean) {
        super();
        this._head = new TrieDictNode();
        this._ignoreCase = ignoreCase || false;
    };


    /**
     * @description describes current Trie state that detmines if methods 
     * {@link Trie#add} {@link Trie#addAll} {@link Trie#exists} should ignore
     * alpha character case. This state is declared upon Trie initialization
     * @function module:trie.Trie#isIgnoreCase
     * @returns {boolean} ignore case state
     */
    public isIgnoreCase(): boolean {
        return this._ignoreCase;
    };

    /**
     * @function module:trie.Trie#add
     * @description adds a word to the Trie
     * @param {string} word string to be loaded
     * @returns {void}
     */
    public add(word: string): void {
        if (this._ignoreCase) { word = word.toLowerCase() };

        const wordEnd: number = (word.length - 1);
        let current: TrieDictNode = this._head;
        for (let i = 0; i < word.length; i++){
            current = current.add(word[i], (wordEnd === i));
        };
    };

    /**
     * @function module:trie.Trie#addAll
     * @description adds an array of strings into the Trie
     * @param {Array<string>} wordArray array of strings to be added
     * @returns {void}
     */
    public addAll(wordArray: Array<string>): boolean {
        for (let i = 0; i < wordArray.length; i++) {
            this.add(wordArray[i]);
        };
        return true;
    };

    /**
     * @function module:trie.Trie#delete
     * @description deletes a word from the Trie
     * @param {string} word string to delete
     * @returns {void}
     */
    public delete(word: string): void {
        if (this._ignoreCase) { word = word.toLowerCase() };
        try {
            this.traverse(word)[0].isWord(false)
        } catch (ex) {
            // something happened during traversal. TypeError suggests there is
            // no further nodes to traverse. word does not exist!
            // aka.. there's nothing to delete!
            if (!(ex instanceof TypeError)) {
                throw exception(ex);
            };
        };
    };

    /**
     * @function module:trie.Trie#deleteAll
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
     * @function module:trie.Trie#exists
     * @description checks if provided string exists as a word within the Trie
     * @param {string} word string to search within Trie
     * @returns {boolean} result of opteration
     */
    public exists(word: string): boolean {
        if (this._ignoreCase === true) { word = word.toLowerCase() };
        try {
            return this.traverse(word)[0].isWord();
        } catch (ex) {
            // something happened suring traversal. TypeError suggests there is
            // no further nodes to traverse. word does not exist!
            if (!(ex instanceof TypeError)) {
                throw ex;
            };
        };
        return false;
    };
};
