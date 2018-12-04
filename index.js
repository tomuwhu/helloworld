const cc = require('exam-cc')
let file = cc.read('./files/kekszalag.csv')
console.log(`\n1. feladat\nA beolvasásá és a tárolás kész!\n\n2. feladat\nÖsszesen ${ file.length } adatot tartalmaz az állomány`)
console.log(
    `\n3. feladat\nAz elő 10 hajó adatai:` +
    file.slice(0,10)
        .map( (v,k) => 
            `${k+1}. ${ v.hajó } -  ${ v.klub } - ${v.nap*60*24 + v.óra*60 + v.perc }`
        ).join('\n')
)
console.log(`\n4. feladat:\nA verseny kategóriái:`)
let kn=0
file.toMap('kategória').forEach( (e,k) => {
    kn++
    console.log(k)  
})
console.log(`Összesen ${kn} kategória szerepel az adatok között!`)

console.log(
    `\n5.feladat\nAz első 3 hajó átlagsebessége\n` +
    file.map( v => {
            v.as = 160 / (Number(v.nap) * 24 + Number(v.óra) + (Number(v.perc) / 60) )
            return v 
        })
        //.sort( (a,b) => b.as - a.as )
        .slice(0,3)
        .map( (v,k) => `${ k+1 }. ${ v.as.toFixed(1) }` )
        .join('\n')
)
console.log(
    `\n6. feladat\nA leggyorsabb hajó ${
        ( Number(file[0].nap) * 24 * 60 + Number(file[0].óra * 60) + Number(file[0].perc) - 7*60 - 13  )
    } perccel maradt le az abszolút rekordtól.`
    )
cc.write('./files/hajonevek.txt', file.map(v => ({
    hajo: v.hajó,
    klub: v.klub,
    ido: `${v.nap}:${v.óra}:${v.perc}`
})))
console.log(`\n7. feladat\nA fájlba írás sikeresen megtörtént!`)
