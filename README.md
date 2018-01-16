# sluggr

JS light slugger

## How to use

```javascript
const sluggr = require('sluggr');

// sluggr(char = "_", whitelist = "")
const slugger = sluggr("-", ":;");

> slugger("WDAè: ô*")
"wdae:-o"
```
