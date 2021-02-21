import { Trie } from './../trie'


// path to large list of words for testing
// https://github.com/dwyl/english-words
// count: ~466k words

describe('trie load and identifies word (single)', () => {
    
    it('loads word (single)', () => {
        const trie = new Trie();
        
        expect(trie.isWord("apple")).toBe(false);
        
        trie.loadWord("apple");
        
        expect(trie.isWord("apple")).toBe(true);
    });

    it('loads word (multiple)', () => {
        const trie = new Trie();

        expect(trie.isWord("apple")).toBe(false);
        expect(trie.isWord("apricot")).toBe(false);
        
        trie.loadWord("apple");
        trie.loadWord("apricot");
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("apricot")).toBe(true);
    });
    
    it('loads word (same)', () => {
        const trie = new Trie();
        
        expect(trie.isWord("apple")).toBe(false);
        expect(trie.isWord("apricot")).toBe(false);
        
        trie.loadWord("apple");
        trie.loadWord("apricot");
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("apricot")).toBe(true);
        
        trie.loadWord("apple");
        trie.loadWord("apricot");
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("apricot")).toBe(true);
    });
});

describe('Trie load and identifies words (array)', () => {
    it('loads words (single)', () => {
        const trie = new Trie();
        
        expect(trie.isWord("apple")).toBe(false);
        
        trie.loadWords(["apple"]);
        
        expect(trie.isWord("apple")).toBe(true);
    });

    it('loads words (multiple)', () => {
        const trie = new Trie();
        
        expect(trie.isWord("apple")).toBe(false);
        expect(trie.isWord("apricot")).toBe(false);
        
        trie.loadWords(["apple", "apricot"]);
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("apricot")).toBe(true);
    });

    it('loads words (multiple * 2)', () => {
        const trie = new Trie();
        
        expect(trie.isWord("apple")).toBe(false);
        expect(trie.isWord("apricot")).toBe(false);
        expect(trie.isWord("car")).toBe(false);
        expect(trie.isWord("banana")).toBe(false);
        
        trie.loadWords(["apple", "apricot"]);
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("apricot")).toBe(true);
        
        trie.loadWords(["car", "banana"]);
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("apricot")).toBe(true);
        expect(trie.isWord("car")).toBe(true);
        expect(trie.isWord("banana")).toBe(true);
    });
});

describe('Trie load and identifies word testing inbetween patterns', () => {
    it('loads word without error with permutations', () => {
        const trie = new Trie();
        
        expect(trie.isWord("apple")).toBe(false);

        trie.loadWord("apple");

        expect(trie.isWord("a")).toBe(false);
        expect(trie.isWord("ap")).toBe(false);
        expect(trie.isWord("app")).toBe(false);
        expect(trie.isWord("appl")).toBe(false);
        expect(trie.isWord("apple")).toBe(true);
    });
});

describe('Trie load and identifies word (case sensitivity)', () => {
    it('loads words (case sensitive - default)', () => {
        const trie = new Trie();
        
        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.isWord("apple")).toBe(false);
        
        trie.loadWord("apple");
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("Apple")).toBe(false);
    });

    it('loads words (case sensitive - explicit)', () => {
        const trie = new Trie(false);
        
        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.isWord("apple")).toBe(false);
        
        trie.loadWord("apple");
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("Apple")).toBe(false);
    });

    it('loads words (case insensitive - explicit)', () => {
        const trie = new Trie(true);

        expect(trie.isIgnoreCase()).toBe(true);
        expect(trie.isWord("apple")).toBe(false);
        
        trie.loadWord("apple");
        
        expect(trie.isWord("apple")).toBe(true);
        expect(trie.isWord("Apple")).toBe(true);
    });
})

describe('Trie load and identifies with special characters', () => {
    it('loads words + special (case sensitive)', () => {
        const trie = new Trie();

        expect(trie.isIgnoreCase()).toBe(false);
        expect(trie.isWord("applE/<>{}")).toBe(false);
        
        trie.loadWord("applE/<>{}");
        
        expect(trie.isWord("applE/<>{}")).toBe(true);
        expect(trie.isWord("apple/<>{}")).toBe(false);
    })

    it('loads words + special (case insensitive)', () => {
        const trie = new Trie(true);

        expect(trie.isIgnoreCase()).toBe(true);
        expect(trie.isWord("applE/<>{}")).toBe(false);
        
        trie.loadWord("applE/<>{}");
        
        expect(trie.isWord("applE/<>{}")).toBe(true);
        expect(trie.isWord("apple/<>{}")).toBe(true);
    })
})

