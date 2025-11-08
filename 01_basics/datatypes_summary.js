// Primitive Datatypes

const { useInsertionEffect } = require("react");

// 7  types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 234567845567n;



// Reference Datatype.(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "ayush",
    age: 20,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);





//////////////// ++++++++++++++++++++++++++++++++++

// Stack(Primitive),Heap (Non Primitive)

let myYoutubename = "AyushSahu.com";

let anotherName = myYoutubename;
anotherName = "Chaiaurcode";

console.log(myYoutubename);
console.log(anotherName);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 
