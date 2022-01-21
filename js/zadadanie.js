class MidPrice{
    name= 'mid';
    price= 50;
    brandManager ='maciej nowak'
    display = function(){
        return console.log ('osoba odp za segment $this.name } to $this.brandManager} (cena sugerowania to: ${this.price})');
    }
}
class AAAPrice {
    name='aaa price';
    price=250;
    brandManager='Marianna Srebna';
    company=['EA', 'Microsoft'];
    display= function() {
        return console.log ('osoba odp za segment $this.name } to $this.brandManager} (cena sugerowania to: ${this.price})');
    }
}
function games(){
    let games =[];
    games.push(new MidPrice());
    games.push(new AAAPrice());
    for(let i=0; i <games.length; i++){
        console.log(games[i].display());
    }
}
document.write(games());