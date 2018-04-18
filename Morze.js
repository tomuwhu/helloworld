//1. feladat
var input = require('prompt-sync')()
var read  = require('fs').readFileSync
var write = require('fs').writeFileSync
var mcode = new Map

var azt = ['a','e','i','o','u','ó','ő','ö','ű','ü','ú','í','é','á']

az = (c='') => azt.includes(c.toLowerCase()) ? 'z' : ''

//6. feladat
class MorzeMap extends Map {
    Morze2Szöveg(s) {
            let answ = '', szavak = s.split(/ {7}/)
            szavak.forEach( szo => {
                szo.split(/ {3}/)
                   .forEach( betu => answ += this.get( betu ) )
                answ += ' '
            } )
            return answ.trim()
    }
}
var mdecode = new MorzeMap

//2. feladat
read('input/morzeabc.txt','UTF-8')
.split('\r\n').slice(1).forEach( (v,k) => {
     let ve = v.split('\t')
     mcode.set(ve[0],ve[1])
     mdecode.set(ve[1],ve[0])
})

//3. feladat
console.log( `3. feladat: A morze abc ${mcode.size} db karakter kódját tartalmazza\n` )

//4. feladat
var karakter = input('4. feladat: Kérek egy karaktert: ')
mc = mcode.get(karakter.toUpperCase())
if (typeof mc=='undefined')
    mc = 'Nem található a kódtárban ilyen karakter!'
console.log(`            A${az(karakter)} ${karakter} karakter morze kódja: ${mc}\n`)

//5. feladat
let it = []
read('input/morze.txt','UTF-8')
  .split('\r\n')
  .forEach( v => {
      let sor=v.split(';')
      it.push({
          szerző: mdecode.Morze2Szöveg(sor[0]),
          idézet: mdecode.Morze2Szöveg(sor[1])
      })
  })

//7. feladat
console.log('7. feladat: Az első idézet szerzője: ',it[0].szerző)

//8. feladat
it.sort( (a,b) => b.idézet.length-a.idézet.length)
console.log('8. feladat: A leghosszabb idézet szerzője és az idézet:'
            ,it[0].szerző+": "+it[0].idézet)

//9. feladat
itariszt = it.filter( v => v.szerző=='ARISZTOTELÉSZ' )
console.log('9. feladat: Arisztotelész idézetei:')
itariszt.forEach( v => console.log('          -',v.idézet))

//10. feladat
let s=''
it.forEach( v => s += v.szerző+':'+v.idézet+'\n' )
write( 'output/forditas.txt', s, err => {} )
