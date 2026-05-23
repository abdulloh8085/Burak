
let box: string = "hello";
box = "100";

const counter: number = 100;

let stage: number | string = "hello";

//interface
interface Person {
  name: string;
  age: number;
  nation: string;
}

let person: Person = {
  name: "martin",
  age: 30,
  nation: "australian",
};
interface Person2 {
  firstName: string;
  lastName: string;
  age: number;
}
let abdulloh: Person2 = {
  firstName: "Avraam",
  lastName: "Lincoln",
  age: 9999,
};

let skills: (number | string)[];
skills = ["Problem Sovling", "Programming"];

class Person3 {
  age: number;
  firstName: string;
  lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person4 = new Person3(20, "Aisha", "Raimjanova");


function echo(message: string): void {
  console.log(message.toUpperCase());
}

//Architecture pattern: MVC, DI, MVP
/*
Architectural pattern:MVS /manosi:MODELE VIEW CONTROL

pattern:
bu shartli ravishda Mashinani kuzovi deb olamiz */

//design pattern: Middleware , Decotar
