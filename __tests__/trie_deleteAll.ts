import { Trie } from '../src/trie'

describe('delete words (multiple) from Trie', () => {
    it('add word and delete it (case sensitive)', () => {
        const trie = new Trie();
        trie.addAll(["apple", "Apple", "apricot", "Apricot"]);

        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
        expect(trie.exists("Apricot")).toBe(true);
        
        trie.deleteAll(["apple", "apricot"]);
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(false);
        expect(trie.exists("Apricot")).toBe(true);
    })

    it('add word and delete it (case insensitive)', () => {
        const trie = new Trie(true);
        trie.addAll(["apple", "Apple"]);

        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(true);

        trie.deleteAll(["apple"]);

        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("Apple")).toBe(false);
    })

    it('add word and delete it (sequential - case sensitive)', () => {
        const trie = new Trie();
        trie.addAll(["apple", "Apple",  "apples"]);

        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
        
        trie.deleteAll(["apple"]);
        
        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
        expect(trie.exists("apple")).toBe(false);
    })

    it('add word and delete it (sequential - case insensitive)', () => {
        const trie = new Trie(true);
        trie.addAll(["apple", "Apple",  "apples"]);

        expect(trie.exists("Apple")).toBe(true);
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apples")).toBe(true);
        
        trie.deleteAll(["apple"]);
        
        expect(trie.exists("apples")).toBe(true);
        expect(trie.exists("Apple")).toBe(false);
        expect(trie.exists("apple")).toBe(false);
    })
})
