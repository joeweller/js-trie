import { Trie } from './../trie'


// path to large list of words for testing
// https://github.com/dwyl/english-words
// count: ~466k words

describe('trie load and identifies word (single)', () => {
    
    it('load all word (single)', () => {
        const trie = new Trie();
        
        expect(trie.exists("apple")).toBe(false);
        
        trie.load("apple");
        
        expect(trie.exists("apple")).toBe(true);
    });

    it('load all word (multiple)', () => {
        const trie = new Trie();

        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        
        trie.load("apple");
        trie.load("apricot");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
    });
    
    it('load all word (same)', () => {
        const trie = new Trie();
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        
        trie.load("apple");
        trie.load("apricot");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
        
        trie.load("apple");
        trie.load("apricot");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
    });
});

describe('Trie load and identifies words (array)', () => {
    it('load all words (single)', () => {
        const trie = new Trie();
        
        expect(trie.exists("apple")).toBe(false);
        
        trie.loadAll(["apple"]);
        
        expect(trie.exists("apple")).toBe(true);
    });

    it('load all words (multiple)', () => {
        const trie = new Trie();
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        
        trie.loadAll(["apple", "apricot"]);
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
    });

    it('load all words (multiple * 2)', () => {
        const trie = new Trie();
        
        expect(trie.exists("apple")).toBe(false);
        expect(trie.exists("apricot")).toBe(false);
        expect(trie.exists("car")).toBe(false);
        expect(trie.exists("banana")).toBe(false);
        
        trie.loadAll(["apple", "apricot"]);
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
        
        trie.loadAll(["car", "banana"]);
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("apricot")).toBe(true);
        expect(trie.exists("car")).toBe(true);
        expect(trie.exists("banana")).toBe(true);
    });
});

describe('Trie load and identifies word testing inbetween patterns', () => {
    it('load all word without error with permutations', () => {
        const trie = new Trie();
        
        expect(trie.exists("apple")).toBe(false);

        trie.load("apple");

        expect(trie.exists("a")).toBe(false);
        expect(trie.exists("ap")).toBe(false);
        expect(trie.exists("app")).toBe(false);
        expect(trie.exists("appl")).toBe(false);
        expect(trie.exists("apple")).toBe(true);
    });
});

describe('Trie load and identifies word (case sensitivity)', () => {
    it('load all words (case sensitive - default)', () => {
        const trie = new Trie();
        
        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.exists("apple")).toBe(false);
        
        trie.load("apple");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(false);
    });

    it('load all words (case sensitive - explicit)', () => {
        const trie = new Trie(false);
        
        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.exists("apple")).toBe(false);
        
        trie.load("apple");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(false);
    });

    it('load all words (case insensitive - explicit)', () => {
        const trie = new Trie(true);

        expect(trie.isIgnoreCase()).toBe(true);
        expect(trie.exists("apple")).toBe(false);
        
        trie.load("apple");
        
        expect(trie.exists("apple")).toBe(true);
        expect(trie.exists("Apple")).toBe(true);
    });
})

describe('Trie load and identifies with special characters', () => {
    it('load all words + special (case sensitive)', () => {
        const trie = new Trie();

        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.exists("applE/<>{}")).toBe(false);
        
        trie.load("applE/<>{}");
        
        expect(trie.exists("applE/<>{}")).toBe(true);
        expect(trie.exists("apple/<>{}")).toBe(false);
    })

    it('load all words + special (case insensitive)', () => {
        const trie = new Trie(true);

        expect(trie.isIgnoreCase()).toBe(true);
        expect(trie.exists("applE/<>{}")).toBe(false);
        
        trie.load("applE/<>{}");
        
        expect(trie.exists("applE/<>{}")).toBe(true);
        expect(trie.exists("apple/<>{}")).toBe(true);
    })
})

