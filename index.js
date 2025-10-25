const method = process.argv[2].toUpperCase()
const resource = process.argv[3].toLowerCase()

// npm start GET products
if (method === "GET" && resource === "products") {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));
}


// npm start GET products/4
if (method === "GET" && resource.startsWith("products/")) {
    const productId = parseInt(resource.split("/")[1]);
    if (!productId || productId < 1) {
        console.log("Error: Debe ingresar un número positivo.");
    } else {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => console.log(data));
    }
}

