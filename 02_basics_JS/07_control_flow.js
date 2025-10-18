// if statement
// const isUserLoggedIn = true
// const temperature = 51



// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// console.log("53");

// <, >, <=, >=, ==, !=, ===,


// const score = 200
// if(score >100 ){
//     let power = "fly"
//     console.log(`power is ${power}`);
// }
// console.log(`power is ${power}`);



const balance = 1000

// if(balance > 500) console.log("test"),         //implict scope
// console.log("not a good method");                // not a tall readeble 

// if (balance < 500 ){
//     console.log("less than");
// } else if(balance < 750 ){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("your balance is less than 1200");
// }


const userLogegedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

// if(userLogegedIn && debitcard && 2==3){
//     console.log("Allow to but course");
// }

// if(loggedInFromGmail || loggedInFromGoogle){
//     console.log("user logged in");
// }



// const month = 7

// switch(month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
// }


// const userEmail = []
// if(userEmail){
//     console.log("got user Email");
// }else{
//     console.log("don't have user Email");
// }


//Falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy value

// "0", 'false', " ", [], {} , function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }





//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);


val1 = undefined ?? 15
console.log(val1);


val1 = undefined ?? null
console.log(val1);


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");