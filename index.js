const path = require('path');
const fs = require('fs');

const directory = '/test'
const filename = 'test.js'
const file_contents = `
console.log('hello world');
`

fs.mkdir(path.join(__dirname, directory), {}, (err) => {
    if (err) throw err
    console.log('Folder Created')
})

fs.writeFile(path.join(__dirname, directory, filename), file_contents, (err) => {
    if (err) throw err
    console.log('Wrote Content Into File')
})

fs.readFile(path.join(__dirname, directory, filename), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})