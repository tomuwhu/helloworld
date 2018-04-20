cc = require('exam-cc')
tt = cc.read('nevek.txt','\n',';',0,-1)
console.log ( tt.sort( (a, b)=> a.nev.localeCompare(b.nev) ).slice(0,5) )
