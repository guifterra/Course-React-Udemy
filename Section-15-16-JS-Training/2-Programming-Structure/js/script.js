// Variables
let name = "Matheus";
console.log(name);

name = "Ronaldo";
console.log(name);

const idade = 18;
console.log(idade);

// More about variables
let a = 10, b = 4, c = 9;

// Prompt Funciton
const x = prompt("Enter a number: ")
console.log("Number: " + x)

// Alert Function
alert("Number Target: " + x)

// Objetct Math
console.log(Math.max(5,11,2,4,6))
console.log(Math.floor(4.13))
console.log(Math.ceil(4.13))

// Object Console
console.error("Error! Something is Wrong")
console.warn("Warning!")

// If
if(x == 10){
    console.log("Success! The target is 10! ")
}else{
    console.log("Failed! The target isn't " + x)
}

// While
let number = 1;
while(number <= 10){
    console.log(number)
    number++
}

// Do While
do{
    console.log("Do While one time! ")
}while(false)

// For
for(let t = 0; t < 10; t++){
    console.log("Repeating . . .")
}

// Break
while(true){
    console.log("Breaking loop!")
    break;
}

// Switch
switch(1){
    case 1:
        console.log("Switch value: 1")
        break;
    case 2:
        console.log("Switch value: 2")
        break;
    default:
        console.log("Not found")
        break;
}