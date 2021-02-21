"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
var console_1 = require("console");
/**
 * @type TrieNode
 * @description an inner node element Trie class
 * @param isEnd denotes Trie node is end of a word upon instantiation
 */
var TrieNode = /** @class */ (function () {
    /**
     * @constructor
     * @param isEnd denotes Trie node is end of a word upon instantiation
     */
    function TrieNode(isEnd) {
        this._node = {};
        this._isWord = isEnd;
    }
    /**
     * @description retrieves the node associated with the element
     * @param element string represeting a character
     * @returns TrieNode for element
     */
    TrieNode.prototype.next = function (element) {
        return this._node[element];
    };
    ;
    /**
     * @description adds a new TrieNode for the specified element if needed. If
     * TrieNode exists then modify if it is end of a word
     * @param element string representing a characrer
     * @param isEnd determins if new node should be marked as end of word
     */
    TrieNode.prototype.add = function (element, isEnd) {
        if (this._node[element] === undefined) {
            this._node[element] = new TrieNode(isEnd);
        }
        else if (false === this._node[element].nodeIsWord() && isEnd === true) {
            this._node[element].nodeIsWord(true);
        }
        return this.next(element);
    };
    ;
    /**
     * @description returns current state of the TrieNode denoting. Optional
     * boolean param will modify existing state
     * @param option modifies current state of node to received param
     * @returns current TrieNode "is word" state
     */
    TrieNode.prototype.nodeIsWord = function (option) {
        if (option) {
            this._isWord = option;
        }
        ;
        return this._isWord;
    };
    ;
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    /**
     * @constructor
     * @param ignoreCase identifies if Trie should ignore case
     */
    function Trie(ignoreCase) {
        this._head = new TrieNode(false);
        this._ignoreCase = ignoreCase || false;
    }
    /**
     * @description traverse Trie to lookup a word
     * @param word string for Trie lookup
     * @returns TrieNode element
     */
    Trie.prototype.traverseTrie = function (word) {
        var node = this._head;
        for (var i = 0; i < word.length; i++) {
            node = node.next(word[i]);
        }
        ;
        if (node === undefined || node === null) {
            var indicies = (word.length - 1);
            throw console_1.exception("TrieNode does not exist for \"" + word[indicies] + "\": word[" + indicies + "]");
        }
        else {
            return node;
        }
        ;
    };
    ;
    /**
     * @description current state of Trie ignorecase
     * @returns boolean
     */
    Trie.prototype.isIgnoreCase = function () {
        return this._ignoreCase;
    };
    ;
    /**
     * @description loads a single word as string into the Trie and marked as a word
     * @param word string to be loaded
     */
    Trie.prototype.load = function (word) {
        if (this._ignoreCase) {
            word = word.toLowerCase();
        }
        ;
        var wordEnd = (word.length - 1);
        var current = this._head;
        for (var i = 0; i < word.length; i++) {
            current = current.add(word[i], (wordEnd === i));
        }
        ;
    };
    /**
     * @description loads an array of strings into the Trie
     * @param wordArray array of words as string
     */
    Trie.prototype.loadAll = function (wordArray) {
        for (var i = 0; i < wordArray.length; i++) {
            this.load(wordArray[i]);
        }
        ;
    };
    ;
    /**
     * @description checks if provided string is exists as a word within the Trie
     * @param word string to find within Trie
     * @returns boolean whether or not word exists
     */
    Trie.prototype.exists = function (word) {
        if (this._ignoreCase) {
            word = word.toLowerCase();
        }
        ;
        try {
            return this.traverseTrie(word).nodeIsWord();
        }
        catch (ex) {
            if (!(ex instanceof TypeError)) {
                throw ex;
            }
            // something happened during traversal.
            // this will usually 
            // it probably is not a word, swallow exception and return false
            return false;
        }
        ;
    };
    ;
    return Trie;
}());
exports.Trie = Trie;
