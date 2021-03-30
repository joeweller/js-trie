import { TrieDict } from '../src/index'

describe('delete word (single) from Trie', () => {

    it('add word and delete it (case sensitive)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        
        trie.addAll(["apple", "Apple"]);
        trie.delete("apple");

        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(true);
    });

    it('add word and delete it (case insensitive)', () => {
        const trie = new TrieDict(true);
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        
        trie.addAll(["apple", "Apple"]);
        trie.delete("apple");

        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
    });

    it('add word and delete it (sequential - case sensitive)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apples")).toBe(false);
        
        trie.addAll(["apple", "Apple", "apples"]);
        trie.delete("apple");
        
        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
        expect(trie.exists("apple")).toBe(false);
    });

    it('add word and delete it (sequential - case insensitive)', () => {
        const trie = new TrieDict(true);
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apples")).toBe(false);

        trie.addAll(["apple", "Apple", "apples"]);
        trie.delete("apple");
        
        expect(trie.exists("apples")).toBe(true);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apple")).toBe(false);
    });
})
