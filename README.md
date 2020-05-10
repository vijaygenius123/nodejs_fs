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


```js
const fs = require('fs');

fs.mkdir(path.join(__dirname,'/test',{},err=>{
    if err throw err;
    console.log('Directory created');
}))
```

`fs.mkdir` will create a directory with the first argument passed, second argument is the options and the third argument is a callback.

```js
fs.writeFile(path.join(__dirname, directory, filename), file_contents, (err) => {
    if (err) throw err
    console.log('Wrote Content Into File')
})
```
`fs.writeFile` will write the contents which is passed as the second argument into the filename which is passed as the first argument, the third argument is a callback which will retur error if any.


```js
fs.readFile(path.join(__dirname, directory, filename), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})
```
`fs.writeFile` will read contents from the file passed as first argument, the second argument is the encodeding type  and the third argument is a callback which will return err and data.