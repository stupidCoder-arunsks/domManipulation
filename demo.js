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

// CALL APPLY AND BIND

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

function muliply(x,y){
    console.log(x*y);
 }

 var multipleOfTwo = muliply.bind(this,2);
 multipleOfTwo(3);


 var multipleOfThree = muliply.bind(this,3);
 multipleOfThree(10);

 // FUNCTION CURRYING WITH CLOSURE

let addition = function add(a){
   return function (b){
       console.log(a+b);
   }
}

let additionByTwo = addition(2);
additionByTwo(5);







 



