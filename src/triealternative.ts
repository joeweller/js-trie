// import { Trie, TrieNode } from './trie'
// import { exception } from "console";

// /**
//  * @exports
//  */
// export { TrieAlternative, TrieAlternativeNode }

// class TrieAlternativeNode extends TrieNode {
//     // public _node: Record<string, TrieAlternativeNode>;
//     public _alternative: string | null;

//     constructor(altWord?: string) {
//         super();
//         this._alternative = altWord? altWord : null;
//         // this._node = { };
//     };

// };

// class TrieAlternative extends Trie {
//     /**
//      * @constructor
//      * @param {boolean} ignoreCase identifies if Trie should ignore case
//      */
//     constructor(ignoreCase?: boolean) {
//         super(TrieAlternativeNode)
//     }

//     /**
//      * @description traverse Trie to lookup a word
//      * @param {string} word string for Trie lookup
//      * @returns {Array<TrieAlternativeNode>}
//      */
//     public traverse(word: string): Array<TrieAlternativeNode> {
//         var current: TrieAlternativeNode = this._head;
//         var nodeArray: Array<TrieAlternativeNode> = [ ];
//         try {
//             for (let i = 0; i < word.length; i++) {
//                 current = current.next(word[i]);
//                 nodeArray.unshift(current);
//             };
//         } catch (ex) {
//             throw exception(`TrieAlternativeNode does not exist for "${word[word.length - 1]}": word[${word.length - 1}]`);
//         };
        
//         return nodeArray;
//     };

//     /**
//      * @function module:triealternative.TrieAlternative#exists
//      * @description checks if provided string exists as a word within the Trie
//      * @param {string} word string to search within Trie
//      * @returns {boolean} result of opteration
//      */
//     public exists(word: string): boolean {
//         if (this._ignoreCase) { word = word.toLowerCase() };
//         try {
//             const nodes: Array<TrieAlternativeNode> = this.traverse(word);
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
// }