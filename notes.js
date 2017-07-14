const fs = require('fs');

let fetchNotes = () =>{
  try {   
      let notesString = fs.readFileSync('notes-data.json')
      return JSON.parse(notesString)
    }catch(e){
        return [];
    }
};

let saveNotes  = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

let addNote = (title, body) =>{
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title)
    
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () =>{
    return fetchNotes()
}

var getNote = (title) => {
    let notes = fetchNotes()
    let filteredNote = notes.filter((note) =>note.title === title)
    return filteredNote[0]
}

var removeNote = (title) =>{
    //fecth notes
    let notes = fetchNotes()
   
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes)
    return notes.length !== filteredNotes.length


    // filter notes, removing one with title in argument
    //save new notes
    console.log('Removing note', title)
}

let logNote = (note) => {
        console.log('--')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}