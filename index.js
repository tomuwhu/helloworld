//1. feladat
//#Morze
var prompt = require('prompt-sync')()
var fs     = require('fs')

//6. feladat
class MorzeMap extends Map {
    constructor() { super() }
    Morze2Szöveg(s) {
        if (s) {
            let answ   = ''
            let szavak = s.split('       ')
            szavak.forEach( szo => {
                szo
                  .split('   ')
                  .forEach( betu => answ += this.get( betu ) )
                answ += ' '
            } )
            return answ.trim()
        }
    }
}

var mcode   = new Map
var mdecode = new MorzeMap

//2. feladat
var data    = fs
            . readFileSync('input/morzeabc.txt','UTF-8')
data.split('\r\n').forEach( (v,k) => {
     let ve = v.split('\t')
     if (k) {
         mcode   . set(ve[0],ve[1])
         mdecode . set(ve[1],ve[0])
     }
})

//3. feladat
console.log( `3. feladat: ${mcode.size}\n` )

//4. feladat
var karakter = prompt('karakter: ')
mc = mcode.get(karakter.toUpperCase())
if (typeof mc=='undefined')
    mc = 'Nem található a kódtárban ilyen karakter!'
console.log(`4. feladat: '${mc}'\n`)

//5. feladat
var data    = fs
            . readFileSync('input/morze.txt','UTF-8')
let it = []
data
  .split('\r\n')
  .forEach( v => {
      let sor=v.split(';')
      it.push({
          szerző: mdecode.Morze2Szöveg(sor[0]),
          idézet: mdecode.Morze2Szöveg(sor[1])
      })
  })

//7. feladat
console.log('7. feladat:',it[0].szerző)

//8. feladat
it.sort( (a,b) => b.idézet.length-a.idézet.length)
console.log('8. feladat:',it[0].szerző+": "+it[0].idézet)

//9. feladat
itariszt = it.filter( v => v.szerző=='ARISZTOTELÉSZ' )
console.log('9. feladat, Arisztotelész idézetei:')
itariszt.forEach( v => console.log('       - ',v.idézet))

//10. feladat
let s=''
it.forEach( v => s += v.szerző+':'+v.idézet+'\n' )
fs.writeFile( 'output/forditas.txt', s, err => {} )
