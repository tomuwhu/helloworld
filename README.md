# helloworld
Konzol-alkalmazások gyűjteménye: fájlkezelés, input beolvasás, vizsgafeladatok megoldásai
```javascript
var bekér  =  require ( 'prompt-sync' )()
kiír = (x) => console.log(x)

//JS kód:
var x = bekér('Írj be egy számot: ')
kiír(`A kétszerese: ${ 2 * x }`)
```


## Promise példa
```javascript
var ígéret = new Promise(
  (resolve, reject) => {
      if (Math.random()>0.5)
        setTimeout( resolve, 100, 'sikerült')
      else
        setTimeout( reject, 1000, 'sikáig vártam')
  }
)
ígéret
  .then(
    a => console.log(a)
  )
  .catch(
    a => console.log(a)
  )
console.log('most')
```

## readline példa
```javascript
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
)
```

## class példa
```javascript
class Stack {
	constructor() {
		this.container=[], this.size=0
	}
	put(x) {
		if (Array.isArray(x)) {	x.forEach(element => { this.container.push(element), this.size++ }) }
		else { this.container.push(x), this.size++ } //O(1)
	}
	get () {					// O( 1 )
		if (this.size) {
			this.size--
			return this.container.pop() // O( 1 )
		} else return false
	}
	check() {
		return this.container[0]		 // O( 1 )
	}
	toarray() {					// O( n * get() )
		let rv=[]
		while (this.size) rv.push(this.get())
		return rv
	}
	[Symbol.iterator]() {		// O( n * get() )
		return {
		  next: () => {
			if (this.size>0) { return { value: this.get(), done: false	} }
			else { return { done: true } }
		  }
		}
	}
}
class Queue_rossz extends Stack { 			//csak pĂŠlda, nem jĂł futĂĄsi idĹben!
	get () {				 // O( n ) !!!!   ezĂŠrt rossz, nem Ă­gy csinĂĄljuk!
		if (this.size) {
			this.size--
			return this.container.shift() // O( n ) !!!!
		} else return false
	}
}
class Queue extends Stack {
	constructor() {
		super()
		this.offset=0
	}
	get () { 							// O( 1 )
		if (this.size) {
			this.size--
			let elem=this.container[this.offset++]
			if (this.offset*2 >= this.container.length) {
				this.container = this.container.slice(this.offset)
				this.offset=0
			}
			return elem // O( 1 )
		} else return false
	}
	check() {
		return this.container[this.offset]		 // O( 1 )
	}
}
class PQueue extends Stack{
	put(x) { // O(1) / elem
		if (Array.isArray(x)) {	x.forEach(element => { this.container.push(element), this.fix(this.size++) }) }
		else { this.container.push(x), this.fix(this.size++) }
	}
	get() { //felĂźldefiniĂŠljuk a rossz Queue.get-et, Ă­gy O(log n)
		if (this.size) {
			let ret=this.container[0]
			if (--this.size) {
				this.container[0]=this.container.pop()
				this.fixup(0)
			} else this.container.pop()
			return ret
		} else return "Ăres"
	}
	fixup(p) { // O(log n)
		let q1=p*2, q2=q1+1, q=0
		if (q1>this.size+2) q1=p
		if (q2>this.size+2) q2=q1
		this.container[q1]>this.container[q2] ? q=q1 : q=q2
		if (p!=q) {	this.cshn(q,p),	this.fixup(q) }
	}
	fix(p) {  // O(log n)
		let q=(p/2-0.3).toFixed()
		this.cshn(p,q)
		if (q>0) this.fix(q)
	}
	cshn(a,b) { // O(1)
		if (this.container[a]>this.container[b]) {
			let tar=this.container[a]
			this.container[a]=this.container[b]
			this.container[b]=tar
		}
	}
}
class PQueue_min extends PQueue {
	cshn(a,b) {
		if (this.container[a]<this.container[b]) {
			let tar=this.container[a]
			this.container[a]=this.container[b]
			this.container[b]=tar
		}
	}
	fixup(p) {
		let q1=p*2, q2=q1+1, q=0
		if (q1>this.size+2) q1=p
		if (q2>this.size+2) q2=q1
		this.container[q1]<this.container[q2] ? q=q1 : q=q2
		if (p!=q) {	this.cshn(q,p),	this.fixup(q) }
	}
}
```
