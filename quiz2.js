//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:


console.log("wait 5 sec");

let waite=setTimeout(()=>{

console.log("ready?");



let rocket="🚀";
let go=0;
let goRocket=setInterval(()=>{
console.log(rocket);
go++;
if (go===10){

    clearInterval(goRocket);
}


},1000)},5000);




