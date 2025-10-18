// this is used in objects

// const user = {
//     username: "shaurya",
//     price: 999,

//     welcomeMessage:  function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// this gives current context 

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// function chai(){
//     let username = "shaurya"
//     console.log(this.username);           // ismai kam nhi karta 
//     console.log(this);
// }

// chai()


// const chai = function(){
//     let username = "shaurya"
//     console.log(this.username);           // same for this
//     console.log(this);
// }
// chai()



// const chai = () => {
//     let username = "shaurya"
//     // console.log(this.username);           // ismai kam nhi karta 
//     // console.log(this);
//     console.log(username);
// }
// chai()


// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(3, 5))

//OR


// const add = (num1, num2) => num1 + num2      //or (num1 + num2)
// console.log(add(3, 5))



const add = (num1, num2) =>({username: "shaurya"})    //{} without this it will give undefined
console.log(add(3, 5))