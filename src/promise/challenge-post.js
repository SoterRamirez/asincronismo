import fetch from "node-fetch";
const API=`https://api.escuelajs.co/api/v1`;

function posData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
        body: JSON.stringify(data),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    title: "New Xamarin Course",
    price: 238,
    description: "A description",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
};

posData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("finally"));