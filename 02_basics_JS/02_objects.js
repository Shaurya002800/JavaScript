//singletone
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shaurya",
    "full name": "Kunwar Shaurya Pratap Singh",
    [mySym]: "Yohohoho",
    age: 18,
    location: "UP",
    email: "kunwarshaurya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday, Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);                // LOok Heree

JsUser.email = "madhav@microsoft.com"
// // console.log(JsUser.email);

// // Object.freeze(JsUser)
JsUser.email = "madhav@chatgpt.com"
// console.log(JsUser.email);

// JsUser.hi = "bye"
// console.log(JsUser);
// console.log(JsUser.hi);

JsUser.greeting = function(){
    console.log("Hi JS user");
}

// console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hi JS user, ${JsUser.name}`);
}
// console.log(JsUser.greetingTwo());






//************part-2************

//cosnt tinderUSer = new Object() ---> give empty object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Chemuoles"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Shaurya",
            lastname: "Madhav"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userFullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign(obj2, obj1)
// console.log(obj3 === obj2);

const obj4 = Object.assign({}, obj2, obj1)
// console.log(obj4);

const obj5 = {...obj1, ...obj2}
// console.log(obj5);

const users = [
    {
        name: "shaurya",
        id: 22
    },
    {
        name: "madhav",
        id: 28
    },
    {
        name: "sid",
        id: 5
    },
    {
        name: "kunwar",
        id: 7
    }
]

// console.log(users[1].id);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




/********************part-3*******************/


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Time"
}

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : God} = course
console.log(God);



// this is how API looks  ( In JSon )

// {
//     "name": "shaurya",
//     "coursename": "js in hindi ",                     // API's cann be define in array also
//     "price": "free"
// }

// some imp links for API's
//JSon formatter