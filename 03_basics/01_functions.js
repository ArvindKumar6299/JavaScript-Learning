

// function Arvind(){
//       console.log("YadavJi")
// }
// Arvind()

// const num1 = 343;
// const num2 = 343;

// function Learn(num1, num2,num3){
//     let result = num1+num2*num3;
//     return result;
// }

// const result = Learn(34, 23 ,123)
// Learn("result:" , result)

// function loginUser(username="Arvind") {
//     if(!username){
//         console.log("ayar username dalo")
//         return
//     }
//     return `${username} is just loged in `
// }
// const username = loginUser("Arvind")

// console.log(loginUser())


// function stocks(income){
    
//     if(income==undefined){
//         console.log("bhai sahi se valuse pass kr")
//     }
    
//     return `${income} in this mounth`
// }
// const income = stocks(99.450);
// console.log(stocks(income))


// function newd(...num){
//    return num
// }

// console.log(newd(34,121,11))

// const Obj1 = {
//     "userName": "Arvind Kumar",
//     "Marks": 1204
// }

function handleObj(anyObj){
    console.log(`This boy ${anyObj.userName} have scored ${anyObj.Marks}`)
}
handleObj({
    userName: "Arvind Kumar",
    Marks: 2342
})

const myArr = ['a', 's', 1, 3]

function newfun(Arrytype){
    return Arrytype[3]
}
console.log(newfun(myArr))