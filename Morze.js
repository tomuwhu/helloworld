const cc = require('exam-cc')
let abc = cc.read('./input/morzeabc.txt', '\t')
console.log(cc.yellow, `3. feladat: A morze abc ${abc.length} db karakter kódját tartalmazza.`)
let betu = cc.input('4. feladat: Kérek egy karaktert:')
  .toString()
  .toUpperCase()
let b2m = abc.toMap('Betű')
let m2b = abc.toMap('Morzejel')
console.log(
  b2m.has(betu) ?
  `            A ${ betu } karakter morze kódja: ${b2m.get(betu).Morzejel}` :
  `            Nem található a kódban ilyen karakter!`
)
let szoveg = cc.read('./input/morze.txt', ';', 0, ['szerzo', 'idezet'])
let Morze2Szöveg = szoveg =>
  szoveg
  .split(/\s{7}/) // szavak tömb
  .map(szo =>
    szo.split(/\s{3}/)
    .map(betu => m2b.get(betu).Betű)
    .join('')
  )
  .join(' ')
console.log(`7. feladat: Az első idézet szerzője: ${ Morze2Szöveg(szoveg[0].szerzo) }`)
let dszm = szoveg.map(v => ({
  szerzo: Morze2Szöveg(v.szerzo),
  idezet: Morze2Szöveg(v.idezet)
}))
let lhiesz = dszm.sort((a, b) => a.idezet - b.idezet)[0]
console.log(
  `8. feladat: A leghosszabb idézet és szerzője: ${ lhiesz.szerzo }: ${ lhiesz.idezet }`
)
console.log(
  `9. feladat: Arisztotelész idézetei:` +
  dszm.filter(v => v.szerzo === 'ARISZTOTELÉSZ')
  .map(v => '\n          - ' + v.idezet).join('')
)
cc.write('forditas.txt', dszm)