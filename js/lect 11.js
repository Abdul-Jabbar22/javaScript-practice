// functions in JavaScript


function onePlusAverage(x,y){
    return 1+ (x+y)/2
}
let a = 1;
let b = 2;
let c = 3;
 console.log("one plus average of a and b is ", onePlusAverage(a,b))
 console.log("one plus average of b and c is ", onePlusAverage(b,c))
 console.log("one plus average of a and c is ", onePlusAverage(a,c))

// ARROW FUNCTION
const sum = (p,q)=>{
    return p+q
}

console.log(sum(3,3))