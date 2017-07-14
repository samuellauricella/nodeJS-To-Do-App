const fs = require('fs'); //require file system
const _ = require('lodash') //requiring lodash
const yargs = require('yargs') //yargs gives you objects
const notes = require('./notes') //importing notes

const titleOptions = {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
const bodyOptions = {
            describe: 'Body of note',
            demand:true,
            alias: 'b'
        }

const argv = yargs
    .command('add','Add a new note',{
        title: titleOptions,
        body: bodyOptions
})
    .command('list', 'List all notes')
    .command('read', 'Read a note',{
         title: titleOptions 
    })
    .command('remove', 'Remove a note',{
           title: titleOptions
    })
    .help().argv 
var command = argv._[0]


if(command === 'add'){
   let note = notes.addNote(argv.title, argv.body)
   if (note){
       console.log('Note created')
       notes.logNote(note);
   } else {
       console.log('Note title taken')
   }
}else if (command ==='list'){
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note))
} else if (command ==='read'){
    let note = notes.getNote(argv.title);
    if(note){
        console.log('Note found')
       notes.logNote(note)
    } else {
        console.log('note not found')
    }
} else if (command ==='remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)
}else {
    console.log('Command not known')
}