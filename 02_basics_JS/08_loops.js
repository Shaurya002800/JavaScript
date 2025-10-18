//for 

for(let i =1; i<=10; i++){
    // console.log(i);
}



for (let i = 0; i < 10; i++) {
    const element = i
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}



// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + "=" + i*j);
//     }

// }

let array = [2,34,"luffy","zoro", 42]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
}


//break and continue

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
//     if(element == 5){
//         // console.log("got the number 5");
//         break;
//     }
    
// }

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is skipped");
//         continue;
//     }
//     console.log(element);
    
// }



// while
// let i = 0
// while(i <=10){
//     // console.log(`value of indes is ${i}`);
//     i+=2

// }

// arr = ["luffy", "zoro", "sanji", "nami", "robin"]
// i = 0
// while (i < arr.length) {
//     console.log(`value is ${arr[i]}`)
//     i++
// }



//do while 

// i = 0
// do{
//     console.log(i);
//     i++
// } while (i<10)

// i = 10
// do{
//     console.log(i);
//     i++
// } while (i<10)






// high order array loops


//for of 

// const arr = [1, 4, 42, 2, 23]

// for (const p of arr){
//     // console.log(arr);
//     console.log(p);
// }


// const greeting = "it's okay shaurya"

// for(const sighn of greeting){
//     console.log(sighn);
// }


  
// maps                     // takes only unique elements

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// // console.log(map);

// for (const key of map) {              // this prints everything but u only want keys then put keys and values in square brackets
//     console.log(key);
// }

// for (const [key, value] of map) {              // this prints everything but u only want keys then put keys and values in square brackets
//     console.log(key, ":-" , value);
// }


// for (const key in map) {         // not works inp map
//     console.log(key);
// }


// const myOBj = {
//     'game1': "GTA",
//     'game2': "COD"
// }

// for (const [key, value] of myOBj) {               // this can not used in objects
//     console.log(key);
// }   



// const Obj1 = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in Obj1) {
//     console.log(key , "shortcut is for", Obj1[key]);
// }


// const prog = ["js", "rb", "py", "java", "cpp"]

// for (const key in prog) {
//     console.log(key, ":-", prog[key]);
// }












// // most common loop for array

// const prog = ["js", "rb", "py", "java", "cpp"]
// prog.forEach( function (kuchBhiLeloLoYehape){
//     // console.log(kuchBhiLeloLoYehape);
// })


// prog.forEach((T)=> {
//     // console.log(T);
// })



// function printMe(item){
//     console.log(item);
// }

// // prog.forEach(printMe)


// prog.forEach((item, I, arr)=> {                // remember the placement for each element
//     console.log(item, I, arr);
// })




// // THIS IS VERY GOOD

// const myCoding = [
//     {
//         langName: "javascript",
//         langFileName: "js"
//     },
//     {
//         langName: "java",
      
//         langFileName: "java"
//     },
//     {
//         langName: "pyhton",
//         langFileName: "py"
//     }
// ]

// myCoding.forEach((item) => {
//     console.log(item.langName);
// })















// some otehr imp things 

// const prog = ["js", "rb", "py", "java", "cpp"]

// const values = prog.forEach( (item)=> {                    // does not return, and gives undefined
//     // console.log(item);
//     return item
// })

// console.log(values);


// other imp method to return something
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);


// const newNums = myNums.filter( (num) => {                // very useful and very imp
//     return num > 4
// })
// console.log(newNums);





// const newNums = []        // same method nut different format  

// myNums.forEach( (num) => {
//     if(num > 4){
//         console.log(num);
//         newNums.push(num)
//     }
// })
// console.log(newNums);











 
// map function                    // very easy and useful

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbmers = myNumers.map( (num) => num +10 )

// console.log(newNumbmers);


// nN = []
// myNumers.forEach( (nums) => {                // same with foreach
//     let hi = nums + 10
//     nN.push(hi)
// })

// console.log(nN);




// newNums = myNumers             // we can apply multiple methods at a same time 
//             .map( (nums) => nums * 10)
//             .map( (nums) => nums + 1)
//             .filter( (nums) => nums > 40)

// console.log(newNums);




// another imp method, mostly used in shoppig card 

// const myTotal = [1, 2, 3, 23, 3329]           // used to add all values of array

// const ntotal = myTotal.reduce( (acc, currval) => {
//     console.log(`acc: ${acc}, cuurent value: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(ntotal);



const list = [
    {
        courseName: "js course",
        price: 5999
    },
    {
        courseName: "py course",
        price: 999
    },
    {
        courseName: "game dev course",
        price: 8999
    },
    {
        courseName: "web dev course",
        price: 9999
    }
]

const tPrice = list.reduce( (acc, item) => acc + item.price, 0)
console.log(tPrice);