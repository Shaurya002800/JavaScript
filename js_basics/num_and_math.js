const score = 400


const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(typeof(balance));

const kuchor = 23.95445

console.log(kuchor.toPrecision(4));

const hundreda = 100000
console.log(hundreda.toLocaleString('en-IN'));





// +++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.53));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,2));
console.log(Math.max(4,3,6,2));


console.log(Math.random());// iski range 0 se 1 tak hoti h (dice game or puzzle)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+ 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);        // very important