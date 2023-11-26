// const istatus = document.querySelector('h7')
// const addfrind = document.querySelector('#add')
// const removeMe = document.querySelector('#remove')
// const card = document.querySelector('#card')
// const btn = document.querySelector('#btn')

// addfrind.addEventListener('click', function(){
//     istatus.innerHTML = 'Friends'
//     istatus.style.color = "green"
// })

// removeMe.addEventListener('click',()=>{
//     istatus.innerHTML = 'Stranger'
//     istatus.style.color = 'red'
// })

// addfrind.addEventListener('click', ()=>{
//     addfrind.innerHTML = 'Friends'
//     addfrind.style.color = 'green'
//     addfrind.style.backgroundcolor = 'yellow'
// })

// removeMe.addEventListener('click',()=>{
//     addfrind.innerHTML = 'Add Friend'
//     addfrind.style.color = 'red'
// })


// btn.addEventListener('click', ()=>{
//     card.style.backgroundColor  = 'black'
// })



//  ******************************************************************

const btnn = document.querySelector('#add')
const istatus = document.querySelector('h7')
var check = 0

btnn.addEventListener('click',function(){
    if(check == 0){
        istatus.innerHTML = 'Friends'
        istatus.style.color = 'green'
        btnn.innerHTML = 'Remove Friends'

        check = 1  //eak bar hi output de is liiya check ke value 1 kr diya
    }  else{
        istatus.innerHTML = 'Add Friends'
        istatus.style.color = 'red'
        btnn.innerHTML = 'Add Friends'

        check = 0   // ab phir se dusri click me value 0 kr diya ta ki color red ho jay
    }
})