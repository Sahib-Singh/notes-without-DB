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

const remove = function (arg) {

   const notesExist = loadNotes();

    const updatedList = notesExist.filter(data => {
        return data.title != arg.title
    })
    if(notesExist.length > updatedList.length ){
        console.log("note removed sucessfully");
        saveNotes(updatedList)
    }else{
        console.log("note dosen't exist");
    }

}

module.exports = {
    addNotes: add,
    removeNotes: remove
}