// 'use strict';

// console.log("hello");

// console.log("Hello World...")
// console.log(a)
// let a = 100;
// console.log(a)
// console.log(b)
// let a =10;
// const a = 10;
// const a = 100;
// console.log(b)
// const a = 10;
// a = 100;e

// console.log('a');

// console.log('b');

// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('y'), 10);
// setTimeout(()=> console.log('z'), 0);


// console.log('d');

// let sumOne = (a = 10,b=20) => a+b;

// console.log(sumOne());

// let greeting = `hello,
//                 world,
//                 arunsks`

// console.log(greeting)

// function getMobile(manufacturer, model, year) {
//     return {
//        manufacturer,
//        model,
//        year
//     }
//  }
//  var mobileOne = getMobile("Samsung", "Galaxy", "2020");
//  console.log(mobileOne.manufacturer);
//  console.log(mobileOne.model);
//  console.log(mobileOne.year);
// console.log("hello...")
// // var asyncCall =  new Promise((resolve, reject) => {
// //     // do something
// //     console.log("hello")
// //     resolve();
// //     // reject();
// //  }).then(()=> {   
// //     console.log('DON!');
// //  })
// console.log("hello...")
// console.log("hello 2...")
// console.log("hello 3...")
//  var a =100;
//  let b = 200;
// const c = 300;
 
// {
//  a = 10;
 
//  function b(){
//      let b = 20;
//      console.log(b);
//  }
//  const c = 30;


// console.log(a);
// b();
// // console.log(b);
// console.log(c);

// }

// console.log(a);
// console.log(b);
// console.log(c);

//CURRING USING CALL APPLY AND BIND

// var obj = {num:5};
// var obj2 = {num:20};
// var student = {age:20};

// function sum(a,b,c){
//     return this.num + a + b + c;
// }

// function printAge(){
//     return this.age;
// }

// console.log(sum.call(obj,1,2,3));

// console.log(sum.apply(obj,[5,5,5]));

// var bound = sum.bind(obj2);

// console.log(bound(1,2,2));

// var studentBound = printAge.bind(student);

// console.log(studentBound());

// FUNCTION CURRYING USING BIND

// function y(){
//     for(var i=0;i<=5;i++){
//         setTimeout(() => console.log(i), i * 1000)
//     }
//     console.log('Done Coding')
// }
   
// y();

// function a(value) {
//     return function(value1) {
//       return value + value1;
//      }
//   }

  
//   var functionOne = a(5);
//   var functionTwo = functionOne(2);
  
//    console.log(functionTwo) // it will print 7
'use strict';

// this.table = `window table`;

// function cleanTable(soap){
//     // const that = this;
//    const innerFunction = (soap) => {
//         console.log(`cleaning ${this.table} using ${soap}`);  
//     }
//     // innerFunction.call(this,soap);
//     innerFunction(soap);
// }

// let createRoom = function(name){
//      this.table = `${name}s table`
//  }

//  createRoom.prototype.cleanTable = function (soap){
//         console.log(`cleaning ${this.table} using ${soap}`);  
// }

// class createRoom {
//     constructor(name){
//         this.table = `${name}s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);  
//     }
// }

//  const arun = new createRoom('arun');
//  const kumar = new createRoom(`kumar`);
//  arun.cleanTable(`some soap`)
//  kumar.cleanTable(`some soap`)

// console.log(this.table);

// this.Garage = {
//     table: `Garage table`,
// };

// this.Hall = {
//     table: `Hall table`,
// };

// arun.cleanTable(`some soap`)
// kumar.cleanTable(`some soap`)

// cleanTable.call(this , "hamam soap");
// cleanTable.call(this.Garage , "Mysore sandal");
// cleanTable.call(this.Hall , "super soap");
// cleanTable.call(arun , `some soap`);
// cleanTable.call(kumar , `some soap`);

// console.log(this.Garage.table)
// console.log(this.Hall.table);
// this.Hall.clean();
// this.Garage.clean();
// clean.call(this);

class student {

    static count = 0;

    constructor(name,age,phoneNo,mark){
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo,
        this.mark = mark,
        student.increaseCount();
    }

    checkingEligibility(){
     if(this.mark > 40){
         console.log(`elegible`);
     }else {
         console.log('not elegible');
     }
   }

   static increaseCount(){
       student.count++;
   }

  static getCountOfStudents(){
       console.log(student.count);
   }

   setPlacementAge(minimumAgeForPlacement){
       return  (minMark) => {
         if(this.mark > minMark && this.age > minimumAgeForPlacement){
             console.log(`${this.name} elegible for placement`)
         }else {
            console.log(`${this.name} not elegible for placement`)

         }
       }
   }
}

const arun = new student(`arun`,24,12345,42);
const kumar = new student(`kumar`,26,54321,90);
const karthi = new student(`karthi`,21,54321,80);
const ajith = new student(`ajith`,23,536721,30);
const vijay = new student(`vijay`,28,5432041,80);

arun.checkingEligibility();
kumar.checkingEligibility();
student.getCountOfStudents();
arun.setPlacementAge(18)(40);

// console.log(arun.name)


 



