//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];


function finding(arr) {  
let things= arr.filter((item)=>item.length>6);
return things.every((word)=>word.length<10);

}


console.log(finding(array));


//!  Answer: