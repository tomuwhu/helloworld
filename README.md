# helloworld
Konzol-alkalmazások gyűjteménye: fájlkezelés, input beolvasás, vizsgafeladatok megoldásai
```javascript
var bekér  =  require ( 'prompt-sync' )()
kiír = (x) => console.log(x)

//JS kód:
var x = bekér('Írj be egy számot: ')
kiír(`A kétszerese: ${ 2 * x }`)
```