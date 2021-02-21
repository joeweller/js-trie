export { Trie };
declare class Trie {
    private _head;
    private _ignoreCase;
    /**
     * @description traverse Trie to lookup a word
     * @param word string for Trie lookup
     * @returns TrieNode element
     */
    private traverseTrie;
    /**
     * @constructor
     * @param ignoreCase identifies if Trie should ignore case
     */
    constructor(ignoreCase?: boolean);
    /**
     * @description current state of Trie ignorecase
     * @returns boolean
     */
    isIgnoreCase(): boolean;
    /**
     * @description loads a single word as string into the Trie and marked as a word
     * @param word string to be loaded
     */
    load(word: string): void;
    /**
     * @description loads an array of strings into the Trie
     * @param wordArray array of words as string
     */
    loadAll(wordArray: Array<string>): void;
    /**
     * @description checks if provided string is exists as a word within the Trie
     * @param word string to find within Trie
     * @returns boolean whether or not word exists
     */
    exists(word: string): boolean;
}
