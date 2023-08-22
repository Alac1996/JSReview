const log = console.log;

// function taobin(product, money) {
//   if (money < 35) {
//     return "money is not enough";
//   }
//   return product;
// }

// taobin("tea", 40);
// taobin("coffee", 50);

// // 1. Declaration
// function sayHi() {
//   console.log("Declaration");
// }

// sayHi(); //อยู่ก่อน function ได้ จะเป็น hoisting##
// ----------------------------------------------------------------------------
// // 2. Expression
// const sayHi = function () {
//   console.log("Expression");
// };

// sayHi(); // expression ไม่สามารถประกาศใช้ function ก่อน declare หรือไม่สามารถ  hoisting###
// ----------------------------------------------------------------------------
// 3. Arrow
// const sayHi = () => {
//   console.log("Arrow");
// };

// sayHi(); // เหมืิิอน expression ไม่สามารถเรียกใช้ก่อนประกาศได้#####
// call, execute, invoke
// ----------------------------------------------------------------------------

// function sayMyName(myname, phrase = "Hello") {
//   //  let myName;
//   //  let phrase = 'Hello';
//   //  myName = 'Alac'
//   //  phrase = 'Hi'
// }
// // sayMyName("Alac", "Evening", 400);
// // sayMyName("Alac");
// sayMyName("Alac", "Hi");

// function Declaration :

// function multiplyTwoNumbers(n1, n2) {
//   return n1 * n2;
// }
// const result = multiplyTwoNumbers(4, 5);
// ----------------------------------------------------------------------------
// function Expression :

// const multiplyTwoNumbers = function(n1,n2){
//     const a = n1 * n2
//     return a;

// };
// ----------------------------------------------------------------------------
// Arrow Function
// const multiplyTwoNumbers = (n1, n2) => n1 * n2; // ในกรณีที่ arrow function ข้างหน้า equation ไม่มีปีกกา จะเสหมือนว่าสิ่งที่ตามมาคือ output ที่จะ return ออกไปจาก function หรืิอไม่ต้องใส่่ return นั่นเอง
// const multiplyTwoNumbers = (n1, n2 = 0) => {
//   // ถ้ามีปีกกาจะต้องมี return######
//   return n1 * n2;
// };

// const result = multiplyTwoNumbers(4, 5);
// log(result);
// ----------------------------------------------------------------------------
// function sayHello(name) {
//   return `Hello ${name}`;
// }

// const sayHello = (name) => `Hello ${name}`; //ละวงเล็บได้ในกรณีเดียวคือ parameter มีตัวเดียว

// const result = sayHello("Jonathan");
// log(result);

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// Object & Array

// const obj = {
//   name: "aaa",
//   mobile: "0937485",
// };
// Object ไม่มีลำดับข้อมูล

// const arr = ["apple", "orange", "banana"];
// // Array ต่างจาก Object คือมีลำดับ และลำดับเป็น Index ซึ่งเรื่มนับจาก 0,1,2,...n
// // arr[2]; // 'banana'
// // arr[6] = "coconut";
// // [Index] ถ้าเพื่มไม่ตามลำดับของ array เรื่มต้นที่ให้มามันจะ เพื่ม empty มาแทนระหว่าง index เรื่มต้นตัวสุดท้ายจนถึง index ที่ต้องการ
// arr[arr.length] = "coconut"; // arr[3] = 'coconut'
// log(arr);
// arr[0] = "Pineapple";
// log(arr);

// ----------------------------------------------------------------------------
// Method in Array
// push ***, unshift,pop,shift
// const arr = [2, 6, 4];
// const result = arr.push(8); // result = 4
// log(result); //result = 4
// log(arr); //arr = [2,6,4,8]
// const result = arr.unshift(8); // arr = [8,2,6,4], result = 4
// ----------------------------------------------------------------------------

// Loop Array:

// 1st Method "for loop"

// loop Example:
// for (let i = 0; i < 20; i++) {
//   log("loppppp");
// }
// จากข้างบนจะมีการทำงานดังนี้
// let i = 0;
// if(i < 20) {
//     console.log("oppppp")
// }
// i++
// ทำงานจนกว่า
// i จะเท่ากับ 20 หรือถึง 19 ถึงจะหลุด loop

// Array loop Example:
// const arr = [2, 6, 4, 9, 7];
// for (let i = 0; i < arr.length; i++) {
//   log(arr[i]);
//   log("a");
//   log("b");
//   log(i);
// }
// ----------------------------------------------------------------------------

// 2nd Method "for..of loop"

// Array for.. of loop Example
//  Iteration: 1, item => 2
//  Iteration: 2, item => 6
//  Iteration: 3, item => 4
//  Iteration: 4, item => 9
//  Iteration: 5, item => 7
// const arr = [2, 6, 4, 9, 7];
// let j = 0; // log Index by using for..of loop
// for (let item of arr) {
//   log("loop execute");
//   log(item);
//   log(j);
//   j++; //ทุกครั้งที่จบ loop เพื่ิมค่า j ทีละ 1 ไปเรื่อยๆจนกว่าจะครบ loop การทำงาน
// }
// ----------------------------------------------------------------------------

// Method if-else แทน .filter

// Example หาตัวเลขมากว่า 5
// const arr = [2, 6, 4, 9, 7];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   //เพื่อ run iteration ให้ครบทุกตัวใน array
//   if (arr[i] > 5) {
//     result.push(arr[i]);
//   }
// }
// log(result); //[6,9,7]

// Another Example
// ทำให้ element ใน array เพิ่มเป็น 10 เท่า
// const arr = [2, 6, 4, 9, 7];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] * 10);
// }
// log(result);
// ----------------------------------------------------------------------------

// Array.map Example

// const arr = [2, 6, 4];
// const mapResult = arr.map(function mapFn(item, index, array) {
//   return item + index;
// });
// log(mapResult);
// log(mapResult);
// ข้างใน .map ก็คือการสร้าง for loop นั่นเอง
// นี่คือวิธีการทำงาน
// เมื่อเรียกใช้ map function
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   const resultMapFn = mapFn(arr[i], i, arr);
//   result.push(resultMapFn);
// }
//

// mapFn(2,0,[2,6,4]) ====> 2+0
// mapFn(6,1,[2,6,4]) ====> 6+1
// mapFn(4,2,[2,6,4]) ====> 4+2
