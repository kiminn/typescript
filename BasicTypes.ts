//1. number
let A: number = 3;
let B: number = 5;

function addNumber(a: number, b: number): number {
  return a + b;
}

console.log(addNumber(A, B));
//8

//node 실행 명령어 : ts-node 파일명

//2. string
//함수 (이름 ) => 님 환영합니다 return
function welcome(name: string): string {
  return `${name}님 환영합니다!:)`;
}

console.log(welcome("rin"));
console.log(welcome("kimi"));

//3. boolean
const isMale: boolean = false;

//타입자체가 false로 인식이 됨 => string x , 리터럴 타입 <-> any

if (isMale) {
  console.log("남자");
} else {
  console.log("여자");
}

//4. any
function addNumber2(a: any, b: any): string {
  return a + b;
}

console.log(addNumber2(3, 5));
console.log(typeof addNumber2(3, 5)); //실행은 되지만 런타임 에러가 발생할 수 있음.
console.log(addNumber2("뽀또", "예감"));

//error가 안남 => any는 타입 검사를 생략
let obj1: any = { x: 0 };
obj1.foo();
obj1();
obj1.bar = 100;
obj1 = "hello";
const n: number = obj1;

//5. object
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//object를 쓰는 방법
//typescript를 쓰는 의미가 없기 때문에 거의 쓰지 않음.
let obj2: object = { name: "rin", age: 20 };

//interface로 정의한 방법 : 타입 검사를 할 수 있어서 좋다, 확장성
interface IUser {
  name: string;
  age: number;
}

let obj: IUser = { name: "kimi", age: 20 };

//developer-talk.tistory.com/192
//mine-it-record.tistory.com/581

//6. array
let student: string[] = ["kimi", "rin", "ann", "noel"];
let numbers: Array<number> = [1, 2, 3];

// 7. unknown

// 8. union

//9. conditional

// 10. 타입 앨리어스 (type alias)
type Person = {
  name: string;
  age?: number;
};

// {}에는 name이 필수 이지만, as를 사용해서 빈 객체를 Person 이라는 타입으로 지정하겠다!
const person1 = {} as Person;
//const person2: Person = {};

person1.name = "Kimi";
person1.age = 20;
//person1.address = "Seoul"; // Error

//타입 엘리어스 병합
type CoffeeT = {
  color: string;
  country: string;
  favor: string;
};

type MilkT = {
  price: number;
  country: string;
  favor: string;
};

//11. 유니온(|) -> 둘 중에 하나를 만족 (합집합)
type CoffeLatteT = CoffeeT | MilkT;

const coffeLatte: CoffeLatteT = {
  price: 1000,
  //color: "brown",
  country: "korea",
  favor: "sweet",
};

//color : red
//name : rose

//인터렉션(&) -> 둘 중에 하나를 만족 (교집합) -> 더 좁은의미
type CoffeLatteT2 = CoffeeT & MilkT;

// 이 속성들을 만족하는것 가장좁은 의미 (ex. 빨간장미(훨씬 좁음) >> 이름이 장미인 꽃(훨씬 넓음))
const coffeLatte2: CoffeLatteT2 = {
  price: 1000,
  color: "brown",
  country: "korea",
  favor: "sweet",
};

//인터페이스 (interface)
//상속 : extends
interface Person2 {
  name: string;
  age: number;
}

interface newPerson extends Person2 {
  // name: number;
  height: number;
}
let newPerson = { name: "Kim", age: 20, height: 200 };

//type alias vs interface
/**
 * 
 * 상속을 통해 확장이 필요하다면 타입 앨리어스보다는 인터페이스가 유리하다.
 * 





하지만 인터페이스로 표현할 수 없거나 유니온 또는 튜플을 사용해야한다면 타입 앨리어스를 사용한는 편이 유리하다.
 */
