(async function () {
    //const { Apm } = require("./apm")
    //await new Apm().init()
    
    const { Cmd } = require('./cmd')
    new Cmd().main()
})()
