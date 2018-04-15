cc = require('exam-cc')

//1. feladat
//#Morze

//6. feladat

function Morze2Szöveg(s) {
        let answ = '', szavak = s.split(/ {7}/)
        szavak.forEach( szo => {
            szo.split(/ {3}/)
               .forEach( betu => answ += cc.find(abc, 'Morzejel', betu, true ).Betű )
            answ += ' '
        } )
        return answ.trim()
}

//2. feladat
abc = cc.read('input/morzeabc.txt','\r\n','\t')

//3. feladat
cc.print( `3. feladat: ${abc.length}\n` )

//4. feladat
var karakter = cc.input('karakter: ')
mc = cc.find(abc,'Betű',karakter)
if (typeof mc=='undefined')
  cc.print(`4. feladat: Nem található a kódtárban ilyen karakter!\n`)
else
  cc.print(`4. feladat: '${mc.Morzejel}'\n`)

//5. feladat
text = cc.read('input/morze.txt','\r\n',';',0,0,['szerző','idézet'])

//7. feladat
cc.print('7. feladat:',Morze2Szöveg(text[0].szerző,'\n'))

//10. feladat
it = text.map( v => {
    v.szerző = Morze2Szöveg(v.szerző)
    v.idézet = Morze2Szöveg(v.idézet)
    return v
})
cc.write('forditas.txt',it)

//8. feladat
it.sort( (a,b) => b.idézet.length-a.idézet.length)
cc.print('8. feladat:',it[0].szerző+": "+it[0].idézet,'\n')

//9. feladat
it_arisztotelész = it.filter( v => v.szerző=='ARISZTOTELÉSZ' )
cc.print('9. feladat, Arisztotelész idézetei:')
it_arisztotelész.forEach( v => cc.print('       - ',v.idézet))
