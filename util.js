const fs = require('fs')

function add(arg) {
    const notes = loadNotes()
    const dublicateNotes = notes.filter(data => {
        return data.title === arg.title
    })
    if (dublicateNotes.length === 0) {
        notes.push({
            title: arg.title,
            body: arg.body
        })
        saveNotes(notes)
    } else {
        console.log("duplicate notes found");
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return []
    }
}

const showAll = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = JSON.parse(dataBuffer.toString())
        result = dataJson.map(({ title }) => ({ title }));
        console.log(result);

    } catch (error) {
        console.log("List is empty");
    }
}

const remove = function (arg) {

    const notesExist = loadNotes();
    const updatedList = notesExist.find(data => {
        return data.title != arg.title
    })
    if (notesExist.length > updatedList.length) {
        console.log("note removed sucessfully");
        saveNotes(updatedList)
    } else {
        console.log("note dosen't exist");
    }
}

const editNote = function (arg) {
    const notesExist = loadNotes();
    const index = notesExist.findIndex(obj => obj.title === arg.title);
    notesExist[index].body = arg.body
    saveNotes(notesExist)
}

const showNote = function (arg) {
    const notesExist = loadNotes();
    const displayNotes = notesExist.find(res => {
        return res.title === arg.title
    })
    console.log(displayNotes);
}

module.exports = {
    addNotes: add,
    removeNotes: remove,
    editNote: editNote,
    loadNotes: showAll,
    showNote: showNote
}