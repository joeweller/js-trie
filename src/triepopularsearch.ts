// import { nodeModuleNameResolver } from 'typescript';
// import { Trie, TrieNode } from './trie'
// import { exception } from "console";

// /**
//  * @exports
//  */
// export { TriePopularSearch, TriePopularSearchNode }

// class TriePopularSearchNode extends TrieNode {
//     public _node: Record<string, TriePopularSearchNode>;
//     public _weight: bigint;

//     constructor(isEnd: boolean) {
//         super(isEnd);
//         this._weight = BigInt(0);
//         this._node = { };
//     };

//     /**
//      * @description retrieves the node associated with the element
//      * @param {string} element string represeting a character
//      * @returns {TrieNode} element's TrieNode
//      */
//     public next(element: string): TriePopularSearchNode {
//         return this._node[element];
//     };

// };

// class TriePopularSearch extends Trie {
//     public _head: TriePopularSearchNode;
//     /**
//      * @constructor
//      * @param {boolean} ignoreCase identifies if Trie should ignore case
//      */
//     constructor(ignoreCase?: boolean) {
//         super(ignoreCase)
//         this._head = new TriePopularSearchNode(false);
//     }

//     /**
//      * @description traverse Trie to lookup a word
//      * @param {string} word string for Trie lookup
//      * @returns {Array<TriePopularSearchNode>}
//      */
//     public traverse(word: string): Array<TriePopularSearchNode> {
//         var current: TriePopularSearchNode = this._head;
//         var nodeArray: Array<TriePopularSearchNode> = [ ];
//         try {
//             for (let i = 0; i < word.length; i++) {
//                 current = current.next(word[i]);
//                 nodeArray.unshift(current);
//             };
//         } catch (ex) {
//             throw exception(`TrieNode does not exist for "${word[word.length - 1]}": word[${word.length - 1}]`);
//         };
        
//         return nodeArray;
//     };

//     /**
//      * @description search Trie and return the next most popular word by weight
//      * Update weight if
//      * @param {TriePopularSearchNode} head node to traverse Trie by weight
//      * @returns {string} next most common string by weight.
//      * - Returns empty string if word has not been found
//      */
//     private suggest(word: string): string {
//         let stringArray: Array<string> = [ ];
//         let wordFound: boolean = false;
//         while(false === wordFound || Object.keys(head._node).length > 0) {
//             let lrgWeight: BigInt = BigInt(0);
//             let lrgKey: string = '';
            
//             for (let key in head._node) {
//                 let tempNode: TriePopularSearchNode = head._node[key];
//                 if (head._node[key]._weight > lrgWeight) {
//                     lrgKey = key;
//                     lrgWeight = tempNode._weight;
//                     head = head._node[key];
//                 };
//             };
//             stringArray.push(lrgKey);
//         };
//         return stringArray.join();
//     };

//     /**
//      * @function module:trie.Trie#exists
//      * @description checks if provided string exists as a word within the Trie
//      * @param {string} word string to search within Trie
//      * @returns {boolean} result of opteration
//      */
//     public exists(word: string): boolean {
//         if (this._ignoreCase) { word = word.toLowerCase() };
//         try {
//             const nodes: Array<TriePopularSearchNode> = this.traverse(word);
//             nodes.forEach((node) => { node._weight = node._weight++ });
//             return this.traverse(word)[0].isWord();
//         } catch (ex) {
//             // something happened suring traversal. TypeError suggests there is
//             // no further nodes to traverse. word does not exist!
//             if (!(ex instanceof TypeError)) {
//                 throw ex;
//             };
//         };
//         return false;
//     };

//     // public updateWight(word: string): boolean {
//     //     var nodeArray: Array<TriePopularSearchNode> = [ ];
//     //     if (this.isIgnoreCase()) { word = word.toLowerCase() };
//     //     try {

//     //     }
//     // }
// }