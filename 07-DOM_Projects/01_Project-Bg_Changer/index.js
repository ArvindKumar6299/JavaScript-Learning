//queryeslectorall - to access all buttons-element here

const buttons = document.querySelectorAll('.button')  
const body = document.querySelector('body')

// querySelectorAll- sara elements ko {node.list} me deta hia 
//too main elements me access ke liya ham [forEach-function] ka use krta hia

buttons.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener('click',(event)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

