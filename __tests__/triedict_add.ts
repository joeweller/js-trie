import { TrieDict } from '../src/index'

// add single words
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

// add array of words
describe('Trie add and identifies words (array)', () => {
    it('add all words (single)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        
        trie.add(["apple"]);
        
        expect(trie.exists("apple")).toBe(true);
    });

    it('add all words (single - case insensitive)', () => {
        const trie = new TrieDict(true);
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        
        trie.add(["apple"]);
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(true);
    });

    it('add all words (multiple)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        
        trie.add(["apple", "apricot"]);
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
    });

    it('add all words (multiple * 2)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        expect(trie.exists("car")).toBe(false);
        expect(trie.exists("banana")).toBe(false);
        
        trie.add(["apple", "apricot", "chicken", "beer"]);
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
        
        trie.add(["car", "banana"]);
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
        expect(trie.exists("car")).toBe(true);
        expect(trie.exists("banana")).toBe(true);
    });
});
