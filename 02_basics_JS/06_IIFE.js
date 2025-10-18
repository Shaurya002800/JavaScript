// Immediately Invoked Function Expression (IIFE)

// global scope ke pollution se problem hoti h kai barr, global scope ke variable ya jo bhi vha declare kiya h uske pollution ko heta na ke liye hamne iife ka use kiya


//named iife
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();                                      // don't know when to stop so semi colon is needed



// unnamed iife
// (
//     (name) => {
//         console.log(`DB CONNECTED TWO ${name}`);
//     }
// )("shaurya")