// let a = 23
// const b = 55
// var c = 53

// console.log(`a is ${a}, b is ${b}, and c is ${c}`);


// var c = 300
// if (true){
//     let a = 23
//     const b = 55
//     var c = 53
// }
// // console.log(a);
// // console.log(b);
// console.log(c);               // this is creating problem 


// let a = 32
// if (true){
//     let a = 3
//     console.log("INNER a: ", a);
// }
// console.log(a);




/*************part-2**************/


function one(){
    const username = "Shaurya"

    function two(){
        const website = "Youtube" 
        console.log(username);
    }
    // console.log(website);          //out of scope

    // two()
}

// one()



if (true) {
    const username = "Shaurya"
    if (username === "Shaurya") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);





// +++++++++++++++++++ interesting ++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}


// console.log(addTwo(5));                      // look here, how to declare it correctly
const addTwo = function(num){
    return num + 2
}

