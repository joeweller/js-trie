<a name="module_trie"></a>

## trie

* [trie](#module_trie)
    * [.Trie](#module_trie.Trie)
        * [new Trie()](#new_module_trie.Trie_new)
        * [.isIgnoreCase()](#module_trie.Trie+isIgnoreCase) ⇒ <code>boolean</code>
        * [.add(word)](#module_trie.Trie+add) ⇒ <code>void</code>
        * [.addAll(wordArray)](#module_trie.Trie+addAll) ⇒ <code>void</code>
        * [.delete(word)](#module_trie.Trie+delete) ⇒ <code>void</code>
        * [.deleteAll(wordArray)](#module_trie.Trie+deleteAll) ⇒ <code>void</code>
        * [.exists(word)](#module_trie.Trie+exists) ⇒ <code>boolean</code>

<a name="module_trie.Trie"></a>

### trie.Trie
**Kind**: static class of [<code>trie</code>](#module_trie)  

* [.Trie](#module_trie.Trie)
    * [new Trie()](#new_module_trie.Trie_new)
    * [.isIgnoreCase()](#module_trie.Trie+isIgnoreCase) ⇒ <code>boolean</code>
    * [.add(word)](#module_trie.Trie+add) ⇒ <code>void</code>
    * [.addAll(wordArray)](#module_trie.Trie+addAll) ⇒ <code>void</code>
    * [.delete(word)](#module_trie.Trie+delete) ⇒ <code>void</code>
    * [.deleteAll(wordArray)](#module_trie.Trie+deleteAll) ⇒ <code>void</code>
    * [.exists(word)](#module_trie.Trie+exists) ⇒ <code>boolean</code>

<a name="new_module_trie.Trie_new"></a>

#### new Trie()
Trie Object structure

<a name="module_trie.Trie+isIgnoreCase"></a>

#### trie.isIgnoreCase() ⇒ <code>boolean</code>
describes current Trie state that detmines if methods
[Trie#add](Trie#add) [Trie#addAll](Trie#addAll) [Trie#exists](Trie#exists) should ignore
alpha character case. This state is declared upon Trie initialization

**Kind**: instance method of [<code>Trie</code>](#module_trie.Trie)  
**Returns**: <code>boolean</code> - ignore case state  
<a name="module_trie.Trie+add"></a>

#### trie.add(word) ⇒ <code>void</code>
adds a word to the Trie

**Kind**: instance method of [<code>Trie</code>](#module_trie.Trie)  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | string to be loaded |

<a name="module_trie.Trie+addAll"></a>

#### trie.addAll(wordArray) ⇒ <code>void</code>
adds an array of strings into the Trie

**Kind**: instance method of [<code>Trie</code>](#module_trie.Trie)  

| Param | Type | Description |
| --- | --- | --- |
| wordArray | <code>Array.&lt;string&gt;</code> | array of strings to be added |

<a name="module_trie.Trie+delete"></a>

#### trie.delete(word) ⇒ <code>void</code>
deletes a word from the Trie

**Kind**: instance method of [<code>Trie</code>](#module_trie.Trie)  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | string to delete |

<a name="module_trie.Trie+deleteAll"></a>

#### trie.deleteAll(wordArray) ⇒ <code>void</code>
deletes an array of words from the Trie

**Kind**: instance method of [<code>Trie</code>](#module_trie.Trie)  

| Param | Type | Description |
| --- | --- | --- |
| wordArray | <code>Array.&lt;string&gt;</code> | array of strings to delete |

<a name="module_trie.Trie+exists"></a>

#### trie.exists(word) ⇒ <code>boolean</code>
checks if provided string exists as a word within the Trie

**Kind**: instance method of [<code>Trie</code>](#module_trie.Trie)  
**Returns**: <code>boolean</code> - result of opteration  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | string to search within Trie |

