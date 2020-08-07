"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${this.name}`);
    };
}

User.prototype.exit = function (name) {
    console.log(`Пользователь - ${this.name}- ушёл`);
};

const ivan = new User('Ivan', '00001');
const alex = new User('Alex', '00002');

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);