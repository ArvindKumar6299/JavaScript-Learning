//const array1 = [1,2,3,4];

// 0+1+2+3+4

// const initialValue = 0;

// const sumWithInital = array1.reduce(
//     (accumulator, currentvalue)=> accumulator+currentvalue, initialValue
// )

// console.log(sumWithInital)

// const inital = 1;

// const AddedValues = array1.reduce((accumulator, currentValue)=>accumulator*currentValue , inital)
//const AddedValues = array1.reduce((accumulator, currentValue)=>accumulator*currentValue , 1)
// console.log(AddedValues)

// const myTotal = array1.reduce((acc, current)=>{
//     console.log(`acc: ${acc} and currval: ${current}`)
//     return acc+current
// },3)
// console.log(myTotal);


const Books = [
    {
      title: "persute of Happines",
      genre: "Novel",
      publish:"1996",
      price:232
    },
    {
      title: "Power of Atomic Habits",
      genre: "Novel",
      publish:"2006",
      price:200
    },
    {
      title: "The CEO Club",
      genre: "Story",
      publish:"2012",
      price:195
    }
  ];

  const MyTotalPrice = Books.reduce((acc,item)=>acc+item.price,0)
  console.log(`The total Price of allMy books are: ${MyTotalPrice}`)
  