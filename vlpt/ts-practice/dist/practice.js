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
