// Class 01 - Method
const person = {
    name: "Alexandro",

    getName: function() {
        return this.name;
    },

    setName: function( name ){
        this.name = name;
    }
}

console.log(person.getName());
person.setName("Alex");
console.log(person.getName());

/* Class 02 - Prototype */
const text = "Hello"
console.log(Object.getPrototypeOf(text));

/* Class 03 - Class */
const veicle = {
    name: null,
    whells: 4
};

const hb20 = Object.create(veicle);
veicle.name = "HB20";
console.log(hb20.name);
console.log(hb20.whells);

/* Class 04 - Constructor */
function createPerson( name , age ){

    const person1 = Object.create({});

    person1.name = name;
    person1.age = age;

    return person1;
}

const bob = createPerson("Bob",21);
console.log(` Person: ${bob.name} , ${bob.age}`);

/* Class 05 - New */
function Dogs( name , race ){

    this.name = name;
    this.race = race;
}

const dog1 = new Dogs("Toto","buldog");
const dog2 = new Dogs("Rex","mutt");

console.log(dog1);
console.log(dog2);

/* Class 06 - ES6 */
class Book{

    constructor( title , author ){
        this.title = title;
        this.author = author;
    }

    showDetails(){
        console.log(`Book: ${this.title}, Author: ${this.author}`);
    }
}

const book1 = new Book( "A" ,"Alan B" );
const book2 = new Book( "B" ,"Clementine" );

console.log(book1);
console.log(book2);

book1.showDetails();
book2.showDetails();

/* Class 07 - Get e Set */
class Post{

    constructor( title , desciption ){
        this.title = title;
        this.description = desciption;
    }

    get getTitle(){
        return this.title;
    }

    get getDesciption(){
        return this.description;
    }

    set setTitle( title ){
        this.title = title;
    }

    set setDescription( description ){
        this.description = description;
    }
}

const post1 = new Post();
post1.setTitle = "Alice in Wonderland";
post1.setDescription = "It's a nice book!";

console.log(post1.getTitle);
console.log(post1.getDesciption);