var inp = require ( 'prompt-sync' )()
var fss = require ( 'fs' )
var fin = inp     ( 'Fájlnév: ' )
console . log     ( fin )
var str = fss
        . readFileSync
                  ( fin,'UTF-8' )
console . log     (str)
var arr = str
        . split   ( '\n' )
    arr . sort    ( )
var out = ""
    arr . forEach ( v => out += v + "\n")
console . log     ( out )
    fss . writeFileSync
                  ( 'out.txt', out )
