// 1- Number
console.log(2);
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operations ( + , - , * , / )
console.log( 7 + 3 );
console.log( 10 - 9);
console.log( 2.5 * 2);
console.log( 10 / 3);

// 3 - Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

console.log(12 / 0);
console.log(-12 / 0);
console.log(12 * "a");

// 4 - String
console.log("Text 1");
console.log('Text 2');
console.log(`Text 3`);

// 5 - Break line and tab
console.log(" >> Text: \n\t Lorem ipsum!");

// 6 - Concatenation
console.log("Person " + 1 + "!");

// 7 - Interpolation
console.log(`A soma de 2 + 2: ${2 + 2}`);

// 8 - Booleans
console.log(true);
console.log(false);

// 9 - Comparisons
console.log("\n>> Comparisons: ");
console.log(`5 <= 5 : ${5 <= 5}`);
console.log(`5 <  5 : ${5 <  5}`);
console.log(`10 == 10 : ${10 == 10}`);
console.log(`10 == 9 : ${10 == 9}`);
console.log(`10 != 9 : ${10 != 9}`);

// 10 - Comparisons 2
console.log("\n>> Comparisons 2: ");
console.log(`10 == "10" : ${10 == "10"}`);
console.log(`10 === "10" : ${10 === "10"}`);

// 11 - Logic operations
console.log(true && true);
console.log(true && false);
console.log(false || false);
console.log(true || false);
console.log(!false);