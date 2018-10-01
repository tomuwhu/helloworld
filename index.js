cc = require('exam-cc')
text = cc.read('forditas.txt','\n',';',0,-1,['szerzo','idezet'])
//console.log(text)
cc.initsql(text,'teszt')
//cc.initsql()
console.log(
  cc.query('SELECT * FROM teszt')[0].szerzo
)
