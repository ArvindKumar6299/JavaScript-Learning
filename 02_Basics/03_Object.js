// singleton


//object literals

const mySymbol = Symbol("key1")

const JsUser = {
    Name: "Arvind",
    Rollno: 343,
    [mySymbol]: "key1",
    "Full_Name" : "Arvind Kumar",
    lastLogin: ["Monday" , "Tuesday"]

}
// console.log(JsUser.Name)
// console.log(JsUser.lastLogin)
// console.log(JsUser["Rollno"])
// console.log(JsUser["mySymbol"])
// console.log(JsUser["Full_Name"])
// console.log(typeof JsUser.Name)
// console.log(typeof ["Rollno"])
// console.log(typeof JsUser)

JsUser.Name= "Dipu Yadav"
console.log(JsUser["Name"])

console.log(JsUser)


JsUser.greeting = function(){
    console.log("Kysa ho Js_Devloper");

}
JsUser.greetingtwo = function(){
    console.log(`Kysa ho Js_Devloper , ${this.Name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());