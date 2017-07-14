// var obj = {
//     name: 'Samuel'
// };

// var stringObj = JSON.stringify(obj)

// console.log(typeof stringObj);
// console.log(stringObj)


// var personString = '{"name":"Samuel", "age": 26}';

// var person = JSON.parse(personString);

// console.log(person)

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

//originalNote String 
var originalNoteString = JSON.stringify(originalNote)
//writing file
fs.writeFileSync('notes.json', originalNoteString)


var noteString = fs.readFileSync('notes.json')

// parse string into note onject

var note = JSON.parse(noteString)

console.log(note.title)