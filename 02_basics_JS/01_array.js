const arr = [28, true, "Shaurya"]

const a = new Array(1, 3, 8, 4, 5, 9)

// console.log(arr);
// console.log(a[2]);


// Array method

// a.push(6)
// a.push(28)
// a.pop()

a.unshift(9)
a.shift()
a.shift()
a.unshift(1)

// console.log(a.includes(28));
// console.log(a.indexOf(11));
// console.log(a.indexOf(1));

// console.log(a);

// const na = a.join()                      // IMPORTANT
// console.log(na);
// console.log(typeof na);



//slice, splice

// console.log("A ", a);

// const n1 = a.slice(2, 4)
// console.log(n1);
// console.log("B ", a);

// const n2 = a.splice(2, 4)        // important
// console.log(n2);
// console.log("C ", a);







//************part 2*******************/


const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// const all_new_heros = [...marvel_heros, ...dc_heros,]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("shaurya"));
// console.log(Array.from("shaurya"));
console.log(Array.from({name: "shaurya"}));   //interesting


let s1 = 100
let s2 = 200
let s3 = 300

// console.log(Array.of(s1, s2, s3));