# helloworld
Konzol-alkalmazások gyűjteménye: fájlkezelés, input beolvasás, vizsgafeladatok megoldásai

## 1. feladat
Rendezze a rekordokat név szerint, és listázza az első 5-öt!

### megoldás kódja
```javascript
t.sort( (a, b)=> a.nev.localeCompare(b.nev) ).slice(0,5)
```

### megoldás kimenete
```javascript
[ { nev: 'Ábrahám Klára', cimsor: 'Csomorkányi u. 14.', varos: 'Szeged',
    irsz: '6722', szul: '2077.03.22', magassag: '178' },
  { nev: 'Ábrahám Terézia', cimsor: 'Dáni u. 38/A', varos: 'Szeged',
    irsz: '6721', szul: '2056.09.27',  magassag: '156' },
  { nev: 'Ábrahám Tímea', cimsor: 'Jókai u. 209.', varos: 'Kecsekmét',
    irsz: '6000', szul: '2065.03.26', magassag: '162' },
  { nev: 'Acsai Anett', cimsor: 'Álmos u. 28.', varos: 'Szeged',
    irsz: '6725', szul: '2084.09.14', magassag: '177' },
  { nev: 'Ádám Gábor Ferenc', cimsor: 'Téglás u. 3.', varos: 'Szeged',
    irsz: '6720', szul: '2072.01.26', magassag: '175' } ]
```    
