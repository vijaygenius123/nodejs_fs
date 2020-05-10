# nodejs_fs

## Using __filename & __dirname

```js
console.log(__filename)
console.log(__dirname)
```

__fileaname - Will give the absolute path of the file
__dirname - Will give the absolute path of directory the file is in


```js
const path = require('path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
```

`path.basename` Gives the name of the file
`path.dirname`  Gives the directory of the file
`path.extname` Gives the extension of the file
`path.parse` Gives an object with the properties of file like root, directory, base, name & extension. base is name + extension 