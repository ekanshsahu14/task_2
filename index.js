const fs = require('fs');
const myArgs = process.argv
console.log(myArgs[2])
const example = fs.readFileSync('./example.txt','utf-8');
const result = example.toLowerCase().includes(myArgs[2].toLowerCase());
console.log(result)