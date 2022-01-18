//const dayOfBirth=17;
//const guess = prompt('zgadnij dzien moich urodzin')
//let correct = false;
//if (+guess===dayOfBirth)
//   correct = false;
//if(correct===true)
//    alert('zgadza sie: dzien moich urodzin to:' dayOfBirthady
//document.write('brawo');}

//nowe zadanie

//const shoeSize = 39;
//const prise = 230;
//let answerSize = prompt("jaki masz rozmiar buta?");
//let answerPrise = prompt("ile masz pieniedzy?");
//if(+answerSize == shoeSize  && +answerSize>=shoeSize) ;
//{
//    let colorBuyer = prompt('jakiego koloru buty chcesz?');
//   if(colorBuyer==='czarny'||colorBuyer==='bialy') {
//        alert('mamy twoj rozmiar buta i kolor, a ty masz kase na te buty');
//    }
//    else {
//        alert('nie mamy twojego koloru');
//    }
//}

//if (answerSize == shoeSize && +answerPrise<=+prise)
//    alert('jest twoj rozmiar buta ale masz za malo pieniedzy');
//if(+answerSize !== shoeSize && +answerPrise>=+prise)
//    alert('nie ma twojego rozmiaru i masz za malo pieniedzy');
//if (+answerSize !== shoeSize && +answerPrise<=+prise)
//    alert ('nie ma twojego rozmiaru chociaż masz dosc pieniedzy');
//nowe zadanie

//const score = prompt( 'ile punktow dostales?')

//let grade;
//if (score>90) grade=5;
//else if (score>=80) grade=4;
//else if (score>=70) grade=3;
//else if (score>=60) grade=2;
//else grade=1;
//alert(`twoja ocena to ${grade}`);

class phone
{
    brand ='samsung';
    color ='black';
    price ='123.32';
    usbC =false;
    user ='kamil';
    sendSms =function(text)
    {
        this.sms = this.user + " wysłał sms: " + text
    }
}
let komora = new phone;
let text = prompt('podaj treść sms-a');
komora.user = 'kornel';
komora.sendSms(text);
document.write(komora.sms);


