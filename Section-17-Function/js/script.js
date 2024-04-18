/* Class 1 - Function */
function myFunction(){
    console.log("Test");
}

myFunction();

const myVarFunction = function(){
    console.log("Var function");
};

myVarFunction();

function sum( a , b ){
    console.log( a + " + " + b + " = " + (a+b));
}

sum(1,10);

/* Class 2 - Return */
function average( a , b ){
    return (a + b) / 2;
}

console.log(average(11,2));

/* Class 3 - Scopo */

/* Class 4 - Arrow Funtion */
const testArrow = () => {
    console.log("Arrow Function");
};

testArrow();

const evenOrOdd = ( a ) => {

    if(a % 2 === 0){
        return "Even";
    }

    return "Odd";
};

console.log(evenOrOdd(0));
console.log(evenOrOdd(1));
console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(33));

/* Class 5 - More about arrow */
const pow = ( a ) => a * a;

console.log(pow(4));

/* Class 6 - Optional parameter */
const multiplication = ( a , b ) => {

    if( a === undefined || b === undefined){
        console.log("Undefined parameter")
    }else{
        console.log(`${a} * ${b} = ${a * b}`);
    }
};

multiplication(1);
multiplication(2,3);

const greeting = ( name ) => {
    
    if(!name){
        console.log("Hello!");
        return
    }

    console.log(`Hello ${name}!`);
};

greeting();
greeting("Lucas");

/* Class 8 - Default */
const r = ( text = "Default text" , qt = 5 ) => {

    for( let i = 1; i <= qt ; i++ )
        console.log(text);
}

r();
r("test", 10);

/* Class 9 - Closure */
const multpClosure = (n) => {

    return (m) => {
        return n * m;
    }
}

let c1 = multpClosure(3);
console.log(c1);
console.log(c1(10));