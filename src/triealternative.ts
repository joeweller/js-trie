// import { Trie, TrieNode } from './trie'

// export { TrieAlternative }

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
//         super(new TrieAlternativeNode())
//         this._ignore
//     }

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