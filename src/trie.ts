import { exception } from "console";

export { Trie }

/**
 * @type TrieNode
 * @description an inner node element Trie class
 * @param isEnd denotes Trie node is end of a word upon instantiation
 */
class TrieNode {
    private _node: Record<string, TrieNode>;
    private _isWord: boolean;

    /**
     * @constructor
     * @param isEnd denotes Trie node is end of a word upon instantiation
     */
    constructor(isEnd: boolean) {
        this._node = { };
        this._isWord = isEnd;
    };

    /**
     * @description retrieves the node associated with the element
     * @param element string represeting a character
     * @returns TrieNode for element
     */
    public next(element: string): TrieNode {
        return this._node[element];
    };

    /**
     * @description adds a new TrieNode for the specified element if needed. If
     * TrieNode exists then modify if it is end of a word
     * @param element string representing a single character
     * @param isEnd determins if new node should be marked as end of word
     */
    public add(element: string, isEnd: boolean): TrieNode {
        if (this._node[element] === undefined) {
            this._node[element] = new TrieNode(isEnd);
        } else if(false === this._node[element].isWord() && isEnd === true) {
            this._node[element].isWord(true);
        }
        return this.next(element);
    };

    /**y
     * @description returns current state of the TrieNode denoting. Optional
     * boolean param will modify existing state
     * @param option modifies current state of node to received param
     * @returns current TrieNode "is word" state
     */
    public isWord(option?: boolean): boolean {
        if (undefined !== option) { this._isWord = option };
        return this._isWord;
    };
};

class Trie {
    private _head: TrieNode;
    private _ignoreCase: boolean;

    /**
     * @description traverse Trie to lookup a word
     * @param word string for Trie lookup
     * @returns TrieNode element
     */
    private traverseTrie(word: string): TrieNode {
        var node: TrieNode = this._head;
        for (let i = 0; i < word.length; i++) {
            node = node.next(word[i]);
        };

        if (node === undefined || node === null) {
            throw exception(`TrieNode does not exist for "${word[word.length - 1]}": word[${word.length - 1}]`);
        } else {
            return node;
        };
    };

    /**
     * @constructor
     * @param ignoreCase identifies if Trie should ignore case
     */
    constructor(ignoreCase?: boolean) {
        this._head = new TrieNode(false);
        this._ignoreCase = ignoreCase || false;
    };

    /**
     * @description current state of Trie ignorecase
     * @returns boolean
     */
    public isIgnoreCase(): boolean {
        return this._ignoreCase;
    };

    /**
     * @description loads a word into the Trie
     * @param word string to be loaded
     */
    public load(word: string): void {
        if (this._ignoreCase) { word = word.toLowerCase() };

        const wordEnd: number = (word.length - 1);
        let current: TrieNode = this._head;
        for (let i = 0; i < word.length; i++){
            current = current.add(word[i], (wordEnd === i));
        };
    };

    /**
     * @description loads an array of strings into the Trie
     * @param wordArray array of strings to be loaded
     */
    public loadAll(wordArray: Array<string>): void {
        for (let i = 0; i < wordArray.length; i++) {
            this.load(wordArray[i]);
        };
    };

    /**
     * @description deletes a word from the Trie
     * @param word string to delete
     */
    public delete(word: string): void {
        if (this._ignoreCase) { word = word.toLowerCase() };
        const wordEnd: number = (word.length - 1);
        var current: TrieNode = this._head;
        try {
            for (let i = 0; i < word.length; i++){
                current = current.next(word[i]);
            };
            current.isWord(false);
        } catch (ex) {
            // something happened suring traversal. TypeError suggests there is
            // no further nodes to traverse. word does not exist!
            // aka.. there's nothing to delete!
            if (!(ex instanceof TypeError)) {
                throw exception(ex);
            };
        };
    };

    /**
     * @description deletes an array of words from the Trie
     * @param wordArray array of strings to delete
     */
    public deleteAll(wordArray: Array<string>): void {
        for (let i = 0; i < wordArray.length; i++) {
            this.delete(wordArray[i]);
        };
    };
    
    /**
     * @description checks if provided string is exists as a word within the Trie
     * @param word string to find within Trie
     * @returns boolean whether or not word exists
     */
    public exists(word: string): boolean {
        if (this._ignoreCase) { word = word.toLowerCase() };
        try {
            return this.traverseTrie(word).isWord();
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
