## Modules

<dl>
<dt><a href="#module_js-trie">js-trie</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#TrieDict">TrieDict</a></dt>
<dd><p>TrieDict</p>
</dd>
<dt><a href="#TrieDict">TrieDict</a></dt>
<dd></dd>
</dl>

<a name="module_js-trie"></a>

## js-trie
<a name="TrieDict"></a>

## TrieDict
TrieDict

**Kind**: global class  
**Access**: public  

* [TrieDict](#TrieDict)
    * [new TrieDict()](#new_TrieDict_new)
    * [new TrieDict(ignoreCase)](#new_TrieDict_new)

<a name="new_TrieDict_new"></a>

### new TrieDict()
TrieDict class

<a name="new_TrieDict_new"></a>

### new TrieDict(ignoreCase)

| Param | Type | Description |
| --- | --- | --- |
| ignoreCase | <code>boolean</code> | identifies if Trie should ignore case |

<a name="TrieDict"></a>

## TrieDict
**Kind**: global class  

* [TrieDict](#TrieDict)
    * [new TrieDict()](#new_TrieDict_new)
    * [new TrieDict(ignoreCase)](#new_TrieDict_new)

<a name="new_TrieDict_new"></a>

### new TrieDict()
TrieDict class

<a name="new_TrieDict_new"></a>

### new TrieDict(ignoreCase)

| Param | Type | Description |
| --- | --- | --- |
| ignoreCase | <code>boolean</code> | identifies if Trie should ignore case |

<a name="isIgnoreCase"></a>

## .isIgnoreCase() ⇒ <code>boolean</code>
describes current Trie state that determines if methods
should ignore alpha character case.
This state is declared upon TrieDict initialization

**Kind**: instance function  
**Returns**: <code>boolean</code> - ignore case state  
<a name="add"></a>

## .add(wordOrWords) ⇒ <code>void</code>
adds a word to the Trie

**Kind**: instance function  

| Param | Type | Description |
| --- | --- | --- |
| wordOrWords | <code>Array.&lt;string&gt;</code> \| <code>string</code> | word or list of words to be added to Trie |

<a name="delete"></a>

## .delete(wordOrWords) ⇒ <code>void</code>
deletes a word from the Trie

**Kind**: instance function  

| Param | Type | Description |
| --- | --- | --- |
| wordOrWords | <code>Array.&lt;string&gt;</code> \| <code>string</code> | word or list of words to delete from Trie |

<a name="exists"></a>

## .exists(word) ⇒ <code>boolean</code>
checks if provided string exists as a word within the Trie

**Kind**: instance function  
**Returns**: <code>boolean</code> - isWord state for node  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | string to search within Trie |

<a name="isTrieDictNode"></a>

## .isTrieDictNode(item) ⇒ <code>boolean</code>
determines if specified object is instance of TrieDictNode

**Kind**: static function  
**Returns**: <code>boolean</code> - result of test  

| Param | Description |
| --- | --- |
| item | an object |

