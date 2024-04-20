/* Class 1 - Arrays */
const lista = [ 1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof(lista));

/* Class 2 - Properties */
const numbers = [10 , 11 , 12];
console.log(numbers.length);

/* Class 3 - Index */
console.log(numbers[1]);

/* Class 4 - Méthods */
const otherNumbers = [1, 2, 3];
const allNumbers = otherNumbers.concat(numbers);

console.log(allNumbers);

const text = "Test";
console.log(text.toUpperCase());
console.log(text.indexOf("s"));

/* Class 5 - Objects */
const person = {
    name: "Matheus",
    age: 11,
    job: "Developer"
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.job);

/* Class 6 - Add e del atributes */
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tigan",
    km: 20000
};

console.log(car);
car.doors = 4;
console.log(car);
delete car.km;
console.log(car);

/* Class 7 - Arrays != Object */

/* Class 8 - Assign */
const obj = {
    a: "test",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: "test2"
};

Object.assign(obj2, obj);
console.log(obj2);

/* Class 9 - Key's */
console.log(Object.entries(obj));
console.log(Object.keys(obj2));

/* Class 10 - Mutability */
const x = {
    value: 10
};

const z = x;
z.value = 20;

console.log(x);
console.log(z);

/* Class 11 - Push and pop */
const array = [1, 2 , 3 , 4];
array.push(5);
console.log(array);
array.pop();
console.log(array);

/* Class 12 - Shift and Unshift */
const array2 = [19 , 12 , 13 , 14];
array2.shift();
array2.unshift(11);
console.log(array2);

/* Class 13 - indexOf lastIndexOf */
console.log(array2.indexOf(12));
console.log(array2.lastIndexOf(12));

/* Class 14 - slice */
console.log(array2.slice(1,3));

/* Class 15 - Foreach */
array2.forEach((number) => {
    console.log(number);
});

/* Example 2 */
const posts = [
    { student: "Paulo" , average: 6.0 },
    { student: "Ana" , average: 9.0 },
    { student: "Ronaldo" , average: 1.0 }
];

posts.forEach((post) =>{
    console.log(post);
});

/* Class 16 - Rest Operator */
const infinitySum = (...args) =>{

    let sum = 0;
    for(let i = 0; i < args.length; i++)
        sum += args[i];

    return sum;
}

console.log(infinitySum(1,2,3,4,5,6,7,8,9));

/* Class 17 - For of */
const infinitySum2 = (...args) =>{

    let sum = 0;
    for(element of args)
        sum += element;

    return sum;
}

console.log(infinitySum2(1,2,3,4,5,6,7,8,9));

/* Class 18 - Object destruct */
const p1 = {
    name: "A",
    age: 18
}

const { name: nameP1 , age } = p1;
console.log("P1: " + nameP1 + ", Age: " + age);

/* Class 19 - Array destruct */
const myList = ["a" , "b", "c"];

const [letraA , letraB, letraC] = myList;
console.log(letraA);

/* Class 20 - JSON */
const myJSON = '{"name": "Matheus", "age": 11, "skills": ["HTML","CSS","PHP"]}';

/* Class 21 - Json <-> Obj */
const myObject = JSON.parse(myJSON);
console.log(myObject);
const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);