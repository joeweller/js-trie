import { nodeModuleNameResolver } from 'typescript';
import { Trie, TrieNode } from './trie'

/**
 * @exports
 */
export { TriePopularSearch, TriePopularSearchNode }

class TriePopularSearchNode extends TrieNode {
    public _node: Record<string, TriePopularSearchNode>;
    public _weight: BigInt;

    constructor(isEnd: boolean) {
        super(isEnd);
        this._weight = BigInt(0);
        this._node = { };
    };

    /**
     * @description retrieves the node associated with the element
     * @param {string} element string represeting a character
     * @returns {TrieNode} element's TrieNode
     */
    public next(element: string): TriePopularSearchNode {
        return this._node[element];
    };

};

class TriePopularSearch extends Trie {
    public _head: TriePopularSearchNode;
    /**
     * @constructor
     * @param {boolean} ignoreCase identifies if Trie should ignore case
     */
    constructor(ignoreCase?: boolean) {
        super(ignoreCase)
        this._head = new TriePopularSearchNode(false);
    }

    private travserse(word: string): Array<TriePopularSearchNode> {
        var nodeArray: Array<TriePopularSearchNode> = [ ];
        var node: TriePopularSearchNode = this._head;
        for (let i = 0; i < word.length; i++) {
            node = node.next(word[i]);
            nodeArray.unshift(node);
        }
        return nodeArray;
    };

    /**
     * @description traverse Trie and return the next most popular word by weight
     * @param {TriePopularSearchNode} head node to traverse Trie by weight
     * @returns {string} next most common string by weight.
     * - Returns empty string if word has not been found
     */
    private traverseWeighted(head: TriePopularSearchNode): string {
        let stringArray: Array<String> = [ ];
        let wordFound: boolean = false;
        while(false === wordFound || Object.keys(head._node).length > 0) {
            let lrgWeight: BigInt = BigInt(0);
            let lrgKey: string = '';
            
            for (let key in head._node) {
                let tempNode: TriePopularSearchNode = head._node[key];
                if (head._node[key]._weight > lrgWeight) {
                    lrgKey = key;
                    lrgWeight = tempNode._weight;
                    head = head._node[key];
                };
            };
            stringArray.push(lrgKey);
        };
        return stringArray.join();
    };

    /**
     * @function module:trie.Trie#exists
     * @description checks if provided string exists as a word within the Trie
     * @param {string} word string to search within Trie
     * @returns {boolean} result of opteration
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

    // public updateWight(word: string): boolean {
    //     var nodeArray: Array<TriePopularSearchNode> = [ ];
    //     if (this.isIgnoreCase()) { word = word.toLowerCase() };
    //     try {

    //     }
    // }
}