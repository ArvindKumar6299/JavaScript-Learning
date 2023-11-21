const codding = ['js','ruby','c++','java','python']

// const items = codding.forEach((value)=>{
//    // console.log(value);
//     return value;
// })

// console.log(items)

const numbers= [1,2,3,4,5,6,7,8]

// const newNums = numbers.filter((num)=> num>5)
// console.log(newNums)

// const newNums = numbers.filter((num)=> {
//     return num>4
// })
// console.log(newNums)

numbers.forEach((num)=>{
    if(num>=4){
        console.log(`Watch Hitesh Sir Lecture till ${num}`)
    }
})