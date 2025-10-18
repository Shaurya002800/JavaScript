function whoMI(){
    console.log("S");
    console.log("h");
    console.log("a");
    console.log("u");
    console.log("r");
    console.log("y");
    console.log("a");
}

// whoMI()

// function addTwoNumbers(num1, num2){
//     // console.log(num1 + num2);
//     let result = num1 + num2
//     console.log("Shaurya");
//     // return num1 + num2
//     return result
// }

// const result = addTwoNumbers(123, 23.2)
// addTwoNumbers(123, "23.2")
// addTwoNumbers(123, "a")
// addTwoNumbers(123, null)


// console.log("Result: ", result);
// console.log(addTwoNumbers(123, 23.2));



function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Plesae enter a message");
    //     return 
    // }
    if(!username){
        console.log("Plesae enter a message");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("YO"));




/***********part-2************/



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(23,23,2));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(23,28,21,12,2));


const user = {
    username: "shaurya",
    price: 999
}

function handleObject(getObject){
    console.log(`user name is ${getObject.username} and spent ${getObject.price} rupees`);
}

handleObject(user)