// 1 - Create Events
const btn = document.querySelector("#my-btn");

btn.addEventListener("click" , function() {
    console.log("Hello!");
});

// 2 - Remove Event
const secondBtn = document.querySelector("#btn");

function imprimeTest(){
    console.log("Testing . . .");
}

secondBtn.addEventListener("click" , imprimeTest);

const thirdButton = document.querySelector("#other-btn");

thirdButton.addEventListener("click" , () => {
    
    console.log("Event removed!");
    secondBtn.removeEventListener("click", imprimeTest);
})

// 3 - preventDefault
const tagA = document.querySelector("a");

tagA.addEventListener("click" , (e) => {
    e.preventDefault();
    console.log("Don't go to Google!");
})

// 4 - Keyup and Keydown event
document.addEventListener("keyup", (e) => {
    console.log("Released the key: " + e.key);
})

document.addEventListener("keydown", (e) => {
    console.log("Pressed the key: " + e.key);
})

// 5 - Mouse Event
const h4 = document.querySelector("h4");

h4.addEventListener("mousedown" , () => {
    console.log("Pressed the mouse!");
});

h4.addEventListener("mouseup" , () => {
    console.log("Released the mouse!");
});

h4.addEventListener("dblclick" , () => {
    console.log("Double Click!");
});

// 6 - Mousemove
document.addEventListener("mousemove", (e) => {
    console.log("No Eixo X: " + e.x);
    console.log("No Eixo Y: " + e.y);
})

// 7 - Scroll Event
window.addEventListener("scroll", (e) => {
    if( window.pageYOffset > 200 ){
        console.log("Passou de 200 em Y");
    }
})

// 8 - Focus Event
const myInput = document.querySelector("#my-inp");

myInput.addEventListener("focus", (e) => {
    console.log("In input!");
})

myInput.addEventListener("blur", (e) => {
    console.log("Out input!");
})

// 9 - Load Windown event
window.addEventListener("load", () => {
    console.log("Window loaded");
})

// 10 - Debounce
const debounce = (f , delay) => {
    
    let timeout;

    return (...arguments) => {
        
        if( timeout ){
            clearTimeout( timeout );
        }
        
        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Running . . . ");
}, 300));