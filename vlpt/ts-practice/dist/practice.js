"use strict";
// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.getArea = function () {
        throw new Error("Method not implemented.");
    };
    return Circle;
}());
var person = {
    name: '김사람'
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
var people = [person, expert];
var color = 'red';
var colors = ['red', 'orange'];
// 클래스와 관련된 타입의 경우엔 interface 를 사용하는게 좋고, 일반 객체의 타입의 경우엔 그냥 type을 사용해도 무방합니다
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var stringQueue = new Queue();
stringQueue.enqueue('a');
stringQueue.enqueue('b');
stringQueue.enqueue('c');
stringQueue.dequeue();
console.log(stringQueue.length, stringQueue.list);
