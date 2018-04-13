var bekér  =  require ( 'prompt-sync' )()
kiír = (x) => console.log(x)

//JS kód:
var x = bekér('írj be egy számot: ')
kiír(`A kétszerese: ${ 2 * x }`)
