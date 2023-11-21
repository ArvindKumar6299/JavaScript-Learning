const Books = [
  {
    title: "persute of Happines",
    genre: "Novel",
    publish:"1996"
  },
  {
    title: "Power of Atomic Habits",
    genre: "Novel",
    publish:"2006"
  },
  {
    title: "The CEO Club",
    genre: "Story",
    publish:"2012"
  }
];

const userBooks = Books.filter((newCollection)=>{
    return newCollection.genre === 'Story'
})

console.log(userBooks)