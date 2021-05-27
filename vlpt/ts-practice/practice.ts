// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }

// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  getArea(): number {
    throw new Error("Method not implemented.");
  }
}

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }
/*
interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: 'haha',
  age: 20,
};

const expert: Developer = {
  name: 'hoho',
  age: 30,
  skills: ['typesript'],
}
*/

type Person = {
  name: string;
  age?: number;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람'
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People = Person[]; // Person[]을 People이라는 타입으로 사용하는 것처럼의 활용도 가능
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

// 클래스와 관련된 타입의 경우엔 interface 를 사용하는게 좋고, 일반 객체의 타입의 경우엔 그냥 type을 사용해도 무방합니다


class Queue<T> {
  list: T[] = [];

  get length(): number {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}


const stringQueue = new Queue<string>();

stringQueue.enqueue('a');
stringQueue.enqueue('b');
stringQueue.enqueue('c');
stringQueue.dequeue();
console.log(stringQueue.length, stringQueue.list);