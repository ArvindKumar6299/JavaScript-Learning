// // Mainly Data_Types iis of two types - 

// // 1. Primitive  -it has 7 types- String , Number , Boolean , Null , udefined , Symbol , BigInt

// //2. Refrence(Non Primitive) - Array , Objects , Functions


// //Declaration- 

// //symbolls
// const  id = Symbol('1234')
// const  anotherid = Symbol('1234')

// console.log(id == anotherid)

// const bigint = 739349n

// //Array ,Objects ,functions
// //array
// const heros = ['arvind' , 'aditya' , 'ankit']

// // objects
// let myObjct = {
//     name:"Arvind",
//     rollno: 86,
// }


// // Functions

// const myFunction = function(){
//     console.log("Yadav Arvind")
// }



// function mult(a,b){
//     return a*b;
// }

// console.log(mult(5,4))


// // Function to find DataType :-

// console.log(typeof id)
// console.log(typeof myFunction)

// *********************************


// Memory - Stack used in (Primitive) and Heap used in (Non-Primitive)

let userone = {
    RollNo : 3445,
    Name : "Arvind_Yadav"

}

let userTwo = userone;

userTwo.Name = "Dipu"

console.log(userone.Name);
console.log(userTwo.Name);