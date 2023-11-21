// //singleton

// // const tinderUser =  new Object()
// const tinderUser =   {}

// tinderUser.id = "123arvind"
// tinderUser.name = "Arvind"
// tinderUser.rollno = 343

// // console.log(tinderUser)

// const User = {
//     email: "arvind6299697165@gmail.com",
//     fullName: {
//         userfullName: {
//             first_name: "Arvind",
//             last_Name : "Kumar"
//         }
//     }
// }

// // console.log(User.fullName.userfullName.last_Name)

// const obj1 = { 1:"A" , 2: "B"}
// const obj2 = { 3:"A" , 4: "B"}

// // const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,  obj2)

// const objj3 = {...obj1, ...obj2};

// console.log(obj3)



const course = {
    couresename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {couresename : name}= course;
console.log(name);
console.log(course["price"])

const navbar = ({company}) => {

}
navbar(company = "hitesh")
