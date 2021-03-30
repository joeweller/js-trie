import { TriePopularSearch } from '../src/index'

describe('delete word (single) from Trie', () => {
    it('add word and delete it (case sensitive)', () => {
        const trie = new TriePopularSearch();
        trie.addAll(["apple", "Apple"]);

        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(true);

        trie.delete("apple");

        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(true);
    })

    it('add word and delete it (case insensitive)', () => {
        const trie = new TriePopularSearch(true);
        trie.addAll(["apple", "Apple"]);

        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(true);

        trie.delete("apple");

        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
    })

    it('add word and delete it (sequential - case sensitive)', () => {
        const trie = new TriePopularSearch();
        trie.addAll(["apple", "Apple",  "apples"]);

        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
        
        trie.delete("apple");
        
        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
        expect(trie.exists("apple")).toBe(false);
    })

    it('add word and delete it (sequential - case insensitive)', () => {
        const trie = new TriePopularSearch(true);
        trie.addAll(["apple", "Apple",  "apples"]);

        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
        
        trie.delete("apple");
        
        expect(trie.exists("apples")).toBe(true);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apple")).toBe(false);
    })
})
