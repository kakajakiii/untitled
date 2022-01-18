class monitory
{
    name = 'namespace'
    price = '0'
    size = '0'
    Hz = '0'
}
let = 0 ;
let monitory = new set();

let samsung = new monitor;
samsung.name = 'samsung';
samsung.price = '1000';
samsung.size = '19';
samsung.Hz = '60';

monitory.add(samsung);

let lenovo = new monitor;
lenovo.name = 'lenovo';
lenovo.price = '2000';
lenovo.size = '27';
lenovo.Hz = '144';

monitory.add(lenovo);

let asus = new monitor;
asus.name = 'asus';
asus.price = '1500';
asus.size = '24';
asus.Hz = '160';

monitory.add(asus);

let choice_what = prompt("Co chcesz wyszukać?");

if(choice_what === "nazwa"){
    let choice = prompt("Podaj czego szukasz?");
}

for(let item of monitory) {
    if (choice === item.name) {
        document.write(item.name + '<br>');
        document.write(item.price + 'monitor za zł <br>');
    }
}




