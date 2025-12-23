import logger from "./bryan.js"

class People {
    constructor(name,age){
this.name = name;
this.age = age;
    }

display(){
    logger(this.name +" "+ this.age)
}
}

const person = new People("wagoki",31)
person.display()