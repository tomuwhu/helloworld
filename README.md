# helloworld
Konzol-alkalmazások gyűjteménye: fájlkezelés, input beolvasás, vizsgafeladatok megoldásai
```javascript
cc = require('exam-cc')
t = cc.read('nevek.txt','\n',';',0,-1)
console.log(t.sort( (a, b)=> a.nev.localeCompare(b.nev) ).slice(0,5) )
```
