const rl =
  require('readline')
    .createInterface({
      input: process.stdin,
      output: process.stdout
    })
s = new Set()
rl.on('line', line => {
    if (line.length==0)
        console.log(s),
        rl.close()
    else
        line
          .split(",")
          .forEach( v => {
              if ( s.has(v) ) console.log('Van már ilyen!')
              else s.add(v), console.log('Beszúrva!')
          } )
})
console.log(`
Set demo.

Kilépés <Enter>!`
);
