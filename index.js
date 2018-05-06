var colors = require('colors')
function b(x) {
  return new Promise( (a,b) => {
        setTimeout(
           () => (Math.random()>0.5)
             ? a(2+x) : b(3+x), Math.random()*3000
        )
  } )
}
async function f1(y) {
  try {
    var c = await b(y)
    console.log(c.bgRed) // 20
  } catch(e) {
    console.log(e.red.bold) // 30
  }
}
f1(' cica'.yellow.reset), f1(' béka'.green.reset), f1(' kutya'.cyan.reset)
