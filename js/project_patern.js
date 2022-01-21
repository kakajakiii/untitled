class MidPrice
{
    Name = "mid";
    Price = 50;
    BrandManager = "Maciej Nowak";
    Display()
    {
        return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
    }
}

class AAAPrice
{
    Name = "aaa";
    Price = 250;
    BrandManager = "Marianna Srebrna";
    Company = ["EA","Microsoft"];
    Display()
    {
        return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
    }
}

class BasePrice
{
    Name = "base";
    Price = 20;
    BrandManager = "Anna Marys";
    Display()
    {
        return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
    }
    GetPrice()
    {

    }
}
/*function Games()
{
    let Gameset=[];
    Gameset.push(new MidPrice());
    Gameset.push(new AAAPrice());
    Gameset.push(new BasePrice());
    for (let i = 0; i < Gameset.length; i++)
    {
        Gameset[i].Display();
        document.write("<br>");
    }
}
Games();
*/
class PricegameTypeFactory{
    createGamePriceType = function(type){
        let priceType;
        if(type === "baseprice"){
            priceType = new BasePrice();
        }else if (type === "midprice"){
            priceType = new MidPrice();
        }else if (type === "aaaprice"){
            priceType = new AAAPrice();
        }priceType.display = function(){
            return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
        }
        return priceType
    }
}
function  gameFactory(){
    let games
        = [];
    let gameFactory = new PricegameTypeFactory();
    let aaaPrice = gameFactory.createGamePriceType('aaaprice');
    games.push(aaaPrice);
    games.push(gameFactory.createGamePriceType('baseprice'));
    games.push(gameFactory.createGamePriceType('midprace'));
    games.push(gameFactory.createGamePriceType('baseprice'));
    for (let i =0; i < games.length; i += 1){
        document.write(games[i].display());
    }
    document.write(aaaPrice.publishers);
}