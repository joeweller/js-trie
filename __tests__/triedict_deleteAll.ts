import { TrieDict } from '../src/index'

describe('delete words (multiple) from Trie', () => {
    it('add word and delete it (case sensitive)', () => {
        const trie = new TrieDict();
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        expect(trie.exists("Apricot")).toBe(false);
        
        trie.addAll(["apple", "Apple", "apricot", "Apricot"]);
        trie.deleteAll(["apple", "apricot"]);
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(false);
        expect(trie.exists("Apricot")).toBe(true);
    });

    it('add word and delete it (case insensitive)', () => {
        const trie = new TrieDict(true);
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apples")).toBe(false);

        trie.addAll(["apple", "Apple", "apples"]);
        trie.deleteAll(["apple"]);
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apples")).toBe(true);
    });

    it('add word and delete it (sequential - case sensitive)', () => {
        const trie = new TrieDict();
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apples")).toBe(false);
        
        trie.addAll(["apple", "Apple", "apples"]);
        trie.deleteAll(["apple"]);
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
    });

    it('add word and delete it (sequential - case insensitive)', () => {
        const trie = new TrieDict(true);
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apples")).toBe(false);

        trie.addAll(["apple", "Apple", "apples"]);
        trie.deleteAll(["apple"]);
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apples")).toBe(true);
    });
});
