//Object literal

// const user = {
//     username: 'hitesh',
//     loginContent: 8,
//     signedIn: true,

//     getUserDetails: function(){       //  <- it is just method
//         console.log('Got user details from database  ')

//         // this. = ka use krta hia jab hab bhar se value leta hia

//         console.log(`I am ${this.username}`);
//         console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())




// ************  Constructor  -alwas gives new instant

// new - this is constructor function  - to make new context  - it alwas gives new values
// new - alwas creates new object - then it calls constructor function-
// then this key word inject ho jata hai function me

// const promiseOne = new Promise()
// const date = new Date()

// this. = it is object jiska andar value dalta hia


function User(username, loginContent, isLoggedIn){
    this.username = username;
    this.loginContent = loginContent;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return  this
}

const userOne = new User("Arvind", 12 , true)
const userTwo  = new User("Adity", 14 , true)   // new - hamaa new value do
console.log(userOne)
console.log(userTwo)
