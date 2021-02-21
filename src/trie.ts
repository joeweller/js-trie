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
    }

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
     * @param element string representing a characrer
     * @param isEnd determins if new node should be marked as end of word
     */
    public add(element: string, isEnd: boolean): TrieNode {
        if (this._node[element] === undefined) {
            this._node[element] = new TrieNode(isEnd);
        } else if(false === this._node[element].nodeIsWord() && isEnd === true) {
            this._node[element].nodeIsWord(true);
        }
        return this.next(element);
    };

    /**
     * @description returns current state of the TrieNode denoting. Optional
     * boolean param will modify existing state
     * @param option modifies current state of node to received param
     * @returns current TrieNode "is word" state
     */
    public nodeIsWord(option?: boolean): boolean {
        if (option) { this._isWord = option };
        return this._isWord;
    };
}

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
            let indicies: number = (word.length - 1);
            throw exception(`TrieNode does not exist for "${word[indicies]}": word[${indicies}]`);
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
    }

    /**
     * @description current state of Trie ignorecase
     * @returns boolean
     */
    public isIgnoreCase(): boolean {
        return this._ignoreCase;
    };

    /**
     * @description loads a single word as string into the Trie and marked as a word
     * @param word string to be loaded
     */
    public loadWord(word: string): void {
        if (this._ignoreCase) { word = word.toLowerCase() };

        const wordEnd: number = (word.length - 1);
        let current: TrieNode = this._head;
        for (let i = 0; i < word.length; i++){
            current = current.add(word[i], (wordEnd === i))
        };
    }

    /**
     * @description loads an array of strings into the Trie
     * @param wordArray array of words as string
     */
    public loadWords(wordArray: Array<string>): void {
        for (let i = 0; i < wordArray.length; i++) {
            this.loadWord(wordArray[i]);
        };
    };

    /**
     * @description checks if provided string is exists as a word within the Trie
     * @param word string to find within Trie
     * @returns boolean whether or not word exists
     */
    public isWord(word: string): boolean {
        if (this._ignoreCase) { word = word.toLowerCase() };
        try {
            return this.traverseTrie(word).nodeIsWord();
        } catch (ex) {
            console.log(JSON.stringify(ex));
            // something happened during traversal.
            // this will usually 
            // it probably is not a word, swallow exception and return false
            return false;
        };
    };
}
