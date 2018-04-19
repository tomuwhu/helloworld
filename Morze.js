//1. feladat
cc = require('exam-cc')
var az = {
    azt: ['a','e','i','o','u','ó','ő','ö','ű','ü','ú','í','é','á','y'],
    aaz: (c='c') => az.azt.includes(c.toLowerCase()) ? 'z' : ''
}
//6. feladat
function Morze2Szöveg(s) {
        let answ = '', szavak = s.split(/ {7}/)
        szavak.map( szo => {
            szo.split(/ {3}/)
               .forEach( betu => answ += cc.find(abc, 'Morzejel', betu, true ).Betű )
            answ += ' '
        } )
        return answ.trim()
}

//2. feladat
abc = cc.read('input/morzeabc.txt','\r\n','\t')

//3. feladat
cc.print( `3. feladat: A morze abc ${abc.length} db karakter kódját tartalmazza\n` )

//4. feladat
var karakter = cc.input('4. feladat: Kérek egy karaktert: ')
mc = cc.find(abc,'Betű',karakter)
if (typeof mc=='undefined')
  cc.print(`            Nem található a kódtárban ilyen karakter!\n`)
else
  cc.print(`            A${az.aaz(karakter)} ${karakter} karakter morze kódja: ${mc.Morzejel}\n`)

//5. feladat
text = cc.read('input/morze.txt','\r\n',undefined,0,0,['szerző','idézet'])

//10. feladat
it = text.map( v => {
    v.szerző = Morze2Szöveg(v.szerző)
    v.idézet = Morze2Szöveg(v.idézet)
    return v
})
cc.write('forditas.txt',it)

//7. feladat
cc.print('7. feladat: Az első idézet szerzője: ',it[0].szerző,'\n')

//8. feladat
it.sort( (a,b) => b.idézet.length-a.idézet.length)
cc.print('8. feladat: A leghosszabb idézet szerzője és az idézet:',it[0].szerző+": "+it[0].idézet,'\n')

//9. feladat
it_a = cc.filter( it , 'szerző', 'ARISZTOTELÉSZ' )
cc.print( '9. feladat: Arisztotelész idézetei:' )
it_a.map( v => cc.print('          -',v.idézet) )
