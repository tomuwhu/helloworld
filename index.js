cc = require('exam-cc')
text = cc.read('forditas.txt','\n',';',0,-1,['szerzo','idezet'])
cc.initsql(text,'teszt')
szerzo = cc.input('Adja meg a keresett szerzőt!')
console.log(
  cc.query(`
      SELECT idezet
      FROM teszt
      WHERE szerzo like '%${szerzo}%'
      ORDER BY idezet
  `).map( v => v.idezet).join('\r\n')
)
