// 1- Moving by DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2- getElementsByTagName
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - getElementById
const title = document.getElementById("title");
console.log(title);

// 4 - getElementByClassName
const products = document.getElementsByClassName("product");
console.log(products);

// 5 - QuerySelectorAll
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - Insert Before
const createP = document.createElement("p");

const header = title.parentElement;
console.log(header);

header.insertBefore( createP , title );

// 7 - AppendChild
const navLinks = document.querySelector("nav ul");
const createLi = document.createElement("li");

navLinks.appendChild( createLi );

// 8 - replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Lorem Ipsum Test";

header.replaceChild( h2 , title );

// 9 - Change/Set Attribute
const firstLinks = navLinks.querySelector("a");
console.log(firstLinks);

firstLinks.setAttribute( "href" , "https://www.google.com" );

// 10 - get Width and Height from Elements
const footer = document.querySelector("footer");
console.log("footer Width: " + footer.offsetWidth);
console.log("footer Heigth: " + footer.offsetHeight);

// 11 - Change Style
mainContainer.style.color = "red";
