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

yargs.parse();