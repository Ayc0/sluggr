# sluggr

JS light slugger

## How to use

```javascript
const sluggr = require('sluggr');

// sluggr(char = "_", whitelist = "")
const slugger = sluggr("-", ":;");

slug("WDAè: ô*")
> wdae:-o
```
