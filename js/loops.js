//for (let i=1;i<=30;i+=5)
//   alert(i);

//nowe zadanie

//const streets =['krucza' , 'kurza' , 'papieska' , 'jp2' ]
//for (let i=0;i<streets.length;i++)
//    alert(streets[i]);

//nowe zadanie

const shoeSize = [37,38,39,40,41,41];
let n=false, k=false;
const colorsOfShoes=['red','blue','orange','violet','green']
let answerColor = prompt( "jaki chcesz kolor buta")
let answerSize = prompt( "jaki chcesz rozmiar buta")
for (let i =0; i <colorsOfShoes.length; i++)
    if (colorsOfShoes [i] === answerColor) n=true;
        for (let i= 0; i <shoeSize.length; i++)
       if (colorsOfShoes [i] === +answerSize) k=true;
       if(n && k) alert('mamy twoj kolor i rozmiar')
        if(n && !k) alert('mamy twoj kolora ale nie rozmiar')
if (n === false && k===true) alert('mamy twoj rozmiar buta ale nie rozmiar')
if (n === false && k===false) alert('nie ma ani rozmiaru ani koloru')
