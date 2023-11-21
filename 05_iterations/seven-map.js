
const numbers = [1,23,45,6,7,74,77]

// const NewNums = numbers.map((num)=>{
//     return num+10
// })

//chaing
const newly  = numbers
   .map((num)=> num*10)
   .map((num)=>num+5)
   .filter((num)=>num >= 40)


console.log(newly)