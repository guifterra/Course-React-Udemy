// 1 - Axios
// console.log(axios)

// 2 - Axios First Request
const getData = async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        
        return response.data;

    } catch (error) {
        console.log("Erro: " + error);
    }
}

getData();

// 3- Printing data on Screen
const userContainer = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();
    console.log(data);

    data.forEach(user => {  
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");

        nameElement.textContent = user.name;

        div.appendChild(nameElement);
        userContainer.appendChild(div);
    });
}

printData();
