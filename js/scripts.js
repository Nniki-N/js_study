"use strict";

class Rectanbgle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea () {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectanbgle{
    constructor(height, width, text, bg) {
        super(height, width);
        this.text = text;
        this.bg = bg;
    }

    showMyProps () {
        console.log(`Текст: ${this.text}, цвет: ${this.bg}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectanbgle(10, 10);
// const long = new Rectanbgle(20, 10);

// console.log(square.calcArea());
// console.log(long.calcArea());