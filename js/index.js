console.log("Asslam o alikum and welcome to this javaScript course");

// var a=25;
// let b="Abdul Jabbar";
// var c= null
// var d= undefined
// const  author = 'Abdul'

// console.log(author)

// {
//     let b = 'this'
//     console.log(b)
// }
// console.log(b)

// PREMITIVES AND ObjectS IN JAVASCRIPT

// let a = null;                           //null datatype
// let b = 345 ;                           //numberDatatype
// let c = true;                          //bolean datatype 
// let d = BigInt("567") + BigInt("3");   //BigInt datatype
// let e = "Abdul Jabbar";                 // String datatype  
// let f = Symbol("i am good sybmol");     //Symbol datatype
// let g = undefined                             // undefined datatype

// console.log(a,b,c,d,e,f,)
// console.log(typeof e)
 

// // Objects in jS are NOn-primitive datatypes
// // and Objects are keyvalue pair
 
// const item = {
          
//     "Abdul" : true,
//     " Jabbar" : false,
//     "ali"     : 65,
//     "Ahmed"  :undefined
//  }
//  console.log(item[" Jabbar,ali"])


// let a = "Abdul"
// let b = 6
// console.log(a+b)

// console.log(typeof (a+b))

// const a = {

//    name : "Abdul",
//      section :1,
//      isPrincipal : false
// }


console.log(" operators in javaScript")

// let a = 10;
// let b = 4;

// console.log("a+b =", a+b)
// console.log("a-b =", a-b)
// console.log("a/b =", a/b)
// console.log("a**b =",a**b)
// console.log("a%b =", a%b)

// console.log("++a =",a++)
// console.log("a =",a)
// console.log("a--=",a--)

// Assignment Operators
 let a = 10;

 a += 5                   /*         same as a = +5            */
 console.log(a)
 a -=5                      /*       same as a = 5+          */
 console.log(a)
 a*=5                      /*        same as a = 5-           */
 console.log(a)
 a/=5                     /*         same as a = /5           */
 console.log(a)

//  Comoparison Operators

let comp1 = 6;
let comp2 = 7;

console.log( "comp1  == comp2  =",  comp1  ==   comp2)
console.log( "comp1 !=  comp2  =", comp1  !=   comp2)
console.log( "comp1 === comp2  =",  comp1  ===  comp2) /*value same but data type differnt thats y returns fals*/
console.log( "comp1 !==  comp2  =",    comp1  !==  comp2)
console.log( "comp1 >  comp2  =",    comp1  >  comp2)


// logical operators



let x = 6;
let y= 7;
 console.log(x<y && x==6)    /*And operator true and true will true other all cases will fales*/
 console.log(x<y || x==7)    /*or operator true and fales will true fales and fales will false*/

 console.log(!false) /* !false will return ture*/
 console.log(!true)  /* !true will return false*/
 