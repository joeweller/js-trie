import { TriePopularSearch } from '../src/index'

describe('Trie add and identifies word testing inbetween patterns', () => {
    it('add all word without error with permutations', () => {
        const trie = new TriePopularSearch();
        
        expect(trie.exists("apple")).toBe(false);

        trie.add("apple");

        expect(trie.exists("a")).toBe(false);
        expect(trie.exists("ap")).toBe(false);
        expect(trie.exists("app")).toBe(false);
        expect(trie.exists("appl")).toBe(false);
        expect(trie.exists("apple")).toBe(true);
    });
});

describe('Trie add and identifies word (case sensitivity)', () => {
    it('add all words (case sensitive - default)', () => {
        const trie = new TriePopularSearch();
        
        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.exists("apple")).toBe(false);
        
        trie.add("apple");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(false);
    });

    it('add all words (case sensitive - explicit)', () => {
        const trie = new TriePopularSearch(false);
        
        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.exists("apple")).toBe(false);
        
        trie.add("apple");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(false);
    });

    it('add all words (case insensitive - explicit)', () => {
        const trie = new TriePopularSearch(true);

        expect(trie.isIgnoreCase()).toBe(true);
        expect(trie.exists("apple")).toBe(false);
        
        trie.add("apple");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(true);
    });
})

describe('Trie add and identifies with special characters', () => {
    it('add all words + special (case sensitive)', () => {
        const trie = new TriePopularSearch();

        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.exists("applE/<>{}")).toBe(false);
        
        trie.add("applE/<>{}");
        
        expect(trie.exists("applE/<>{}")).toBe(true);
        expect(trie.exists("apple/<>{}")).toBe(false);
    })

    it('add all words + special (case insensitive)', () => {
        const trie = new TriePopularSearch(true);

        expect(trie.isIgnoreCase()).toBe(true);
        expect(trie.exists("applE/<>{}")).toBe(false);
        
        trie.add("applE/<>{}");
        
        expect(trie.exists("applE/<>{}")).toBe(true);
        expect(trie.exists("apple/<>{}")).toBe(true);
    })
})