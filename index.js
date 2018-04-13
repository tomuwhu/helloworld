var prompt = require('prompt-sync')()
var fs     = require('fs')
var fn     = prompt('Fájlnév: ')
console    . log(fn)
var text   = fs
           . readFileSync(fn,'UTF-8')
console    . log(text)
