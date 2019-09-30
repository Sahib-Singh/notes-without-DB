const yargs = require("yargs")
const util = require("./util.js")

yargs.version('2.3.4');

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note Title !',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body !',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        util.addNotes({ title: argv.title, body: argv.body });
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a existing Note',
    builder: {
        title: {
            describe: 'Note Title !',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        util.removeNotes({ title: argv.title});
    }

})

yargs.command({
    command: 'edit',
    describe: 'Edit a existing Note',
    builder: {
        title: {
            describe: 'Note Title !',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body !',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        util.editNote({title: argv.title, body: argv.body})
    }
})

yargs.command({
    command: 'list-all',
    describe: 'Get all notes',
    handler: function(){
        util.loadNotes()
    }
})

yargs.command({
    command: 'show-note',
    describe: 'Display Particular Note',
    builder: {
        title: {
            describe: 'Note Title !',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        util.showNote({title: argv.title})
    }
})

yargs.parse();