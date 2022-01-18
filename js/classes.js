class student{
    #name = 'Piotr';
    #surname = 'bak';
    #pesel = "0011112121";

    constructor(name, surname, pesel)
    {
        this.#name=name;
        this.#surname=surname;
        this.#pesle=pesel;
    }

    getName = function(){
        return this.#name;
    }

    getSurname(){
        return this.#surname;
    }

    getPesel(){
        return this.#pesel;
    }

    display() {
        document.write(this.name+'<br>'+this.surname+'<br>'+this.pesel);
    }


}
let student1 = new student(name= 'bob','adam','123123123213');
student.display();



/*
  getBob()
  {
  let str = this.#getPesle().slice(0,6);
   let str1= 'rok' 20+ str.slice(0,2)
    let str2= str slice(2,4)-20;
  let str3= str.slice(4,6);
  let str4=

  return str1+str2+str3;
  document.write(Student1.getBob)
  }

let Student1 = new Student() //student(name= 'bob','adam','123124443');
Student1.#name=prompt('podaj imie studenta');
Student1.#surname=prompt('podaj nazwisko studenta');
Student1.#pesel=prompt('podaj pessel studenta');
*/
//var str1 = '3-5';
// var str2 = new String('3-5');
// var str ='bobak';
//var str2 = str.slice (1,4);
// var str2 = str.substring(1,4);
//documnet.write(str2);






