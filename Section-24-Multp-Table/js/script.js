// Elements
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#mult")

const multiplicationTable = document.querySelector("#multiplication-operations");

// Functions
const createTable = (number,multiplicator) => {

    multiplicationTable.innerHTML = "";

    for( i = 1; i <= multiplicator; i++){

        const result = number * i;
        
        const template = '<div class="row"><div class="operation">' + number + ' x ' + i + ' = </div><div class="result">' + result + '</div></div>';
        
        const parser = new DOMParser();
        
        const htmlTemplate = parser.parseFromString(template , "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }
}

// Evenets
multiplicationForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const  multiplicatorNumber = +numberInput.value;
    const multiplicatorMult = +multiplicationInput.value;

    if( !multiplicatorNumber || !multiplicatorMult )
        return;

    createTable(multiplicatorNumber,multiplicatorMult);
})