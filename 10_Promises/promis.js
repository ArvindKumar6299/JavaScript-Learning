// Pomise - future me hona wali koi chij hai
// Promise -resolve 

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography , networkCall
     setTimeout(function(){
        console.log('Async task is completed');
        resolve()     // ---> .then ko connect kerna ke liya
     }, 1000)
})

//JO bhi ham promise wala function me likhea ga usa ham ayha pe return kerata hia .then se

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// ---------------------------

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("How are u ?")
        resolve()
    },2000)
}).then(()=>{
    console.log("I am Good ! ")
})

// --------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve(`Date: ${Date.now()}`)
    },5000)
})
promiseThree.then((date)=>{
    console.log(date)  // resolve ke andar jo bhi parameter pass kera ga wo ayha se output mill jay ga
})
 

// ****************  Promise-reject   **************************

const promiseFour = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = true
        if(error){
            resolve({username:"YadavJI", password:"124"})
        }
        else{
            reject('ERROR: someting went wrong')
        }
    },6000)
})
promiseFour.then((user)=>{
      console.log(user);
      return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){      // catch()  function ka use error hatna ke liya kerta hu
    console.log(error)
}).finally(()=>{
    console.log('Finnaly the Promise is either resolved or rejected')
})


//  ----------------------------- Promise -async

const promiseFive = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = true
        if(error){
            resolve({username:"YadavJI", password:"124"})
        }
        else{
            reject('ERROR: someting went wrong')
        }
    },6000)
})
// async - wait krta hai data ana ka phir run hota hia
async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   } catch (error){
    console.log(error)
   }
}
consumePromiseFive()


//  ***************  // async - wait krta hai data ana ka phir run hota hia

// async function getAllusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json()   //vale ko string se convert kerna ke liya - json ka use krta hia
//         console.log(data);
//     }catch(error){
//         console.log('Bhai ayha to Error aa gya',error)
//     }
// }

// getAllusers()

// ------------------------ **********

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

