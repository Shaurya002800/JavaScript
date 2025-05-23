console.log(2>1);
console.log(2>=1);
console.log(2<1);


console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//===

console.log("2"===2);
console.log("2"==2);




// some other basics 


// primittive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference(Non primitive)

//Array, Objects, Functions

const sub = ["math, eng, phy, chem"]

let listOp={
    name : "shaurya",
    age : 18
}


let yo = function(){
    console.log("Hello World ");
}