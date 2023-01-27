// conditional Statements in 


let a = prompt("Asslam o alikum Whats your Age")
a = Number.parseInt(a)   /*converting string into Number*/
if (a<0){
    alert("This is an invalid age");
}
else if(a<9){
    alert("youn are a kid and you cannot even think about of driving");
}
else if(a<18 && a>=9){
    alert("you are a kid you can think of driving after 18");
}
else{
  alert("you can now driving as you are above ")
}
// trenaory operator

console.log("you can",(a<18? "not drive": "drive"));