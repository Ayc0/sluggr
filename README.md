# sluggr

JS light slugger 875 B (gzipped: 495 B)

## How to use

```javascript
const sluggr = require('sluggr');

// sluggr(char = "_", whitelist = "", shouldNormalize = true)
const slugger = sluggr("-", ":;");

> slugger("WDAè: ô*")
"wdae:-o"
```

### `shouldNormalize`

If `shouldNormalize` is set to `false`, sluggr will no longer replace `é` by `e`
etc. and those characters will be considered as **whitespaces**, so you'll have
to set them in the `whitelist` string

```javascript
const sluggr = require('sluggr');

const slugger = sluggr("-", "ô", false);

> slugger("WDAè: ô*")
"wda:-ô"
```
