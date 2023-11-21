// const user = {
//     username: "hitesh",
//     price: 343, 

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);  
//          //this - is to access current context
//          console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username = "Samm"
// user.welcomeMessage()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }


const chai = ()=>{    
    let username = "hitesh"
    console.log(this.username)
    console.log(this)
}
chai()

// function functionName(){}
//const functioname = function(){}
//const functionname = ()=> {}



const addTwo = (num1, num2)=>{
     return num1+num2;
}

const addTwoo = (num1, num2)=> num1+num2;

console.log(addTwo(24,6))