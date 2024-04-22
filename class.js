//Emascript 6 class (ES6)

class MyClass1 {
    constructor(name) {
        this.name = name;
    }

    sayHello() {

        console.log(`Hello ${this.name}`)
    }
}


const myObject = new  MyClass1('John')
myObject.sayHello()


class MyCar {
    constructor(car) {
        this.car = car;
    }

    carType() {
        console.log(`Your car is ${this.car}`)
    }
}

const carObject = new MyCar('Tesla')
carObject.carType();


class myPhone {
    constructor (phone) {
        this.phone = phone;
    }

    phoneType() {
        console.log(`Phone type is: ${this.phone}` )
    }
}

const phoneObject0 = new myPhone('Samsung');
const phoneObject1 = new myPhone('Iphone');

phoneObject0.phoneType();
phoneObject1.phoneType();


class MyTopic {

    constructor(topic) {
        this.topic = topic;
    }

    topicList() {
        console.log(`Topic is: ${this.topic}`)
    }
}

const topicObject = new MyTopic('Wed dev with React');
topicObject.topicList();
