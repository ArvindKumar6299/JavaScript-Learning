// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')
const banner = document.getElementsByClassName('banner')

// for Date- Time
// let Date = new Date();
// console.log(date.toLocalTimeString());

setInterval (function(){
    let date = new Date();
//   console.log(date.toLocalTimeString());
    clock.innerHTML = date.toLocaleTimeString();

},1000);  //ab date ke value har eak second pe chala gi

//setInterval - we use setInterval for to run on every particular second bar bar