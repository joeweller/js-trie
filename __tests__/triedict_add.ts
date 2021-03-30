import { TrieDict } from '../src/index'

describe('trie add and identifies word (single)', () => {
    
    it('add a word (single)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        
        trie.add("apple");
        
        expect(trie.exists("apple")).toBe(true);
    });

    it('add a word (multiple)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        
        trie.add("apple");
        trie.add("apricot");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
    });
    
    it('add a word (same)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        
        trie.add("apple");
        trie.add("apricot");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
        
        trie.add("apple");
        trie.add("apricot");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
    });
});
