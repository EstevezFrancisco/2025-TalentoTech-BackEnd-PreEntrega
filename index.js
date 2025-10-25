const method = process.argv[2].toUpperCase();
const resource = process.argv[3].toLowerCase();

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

// npm start POST products Buzo 15990 abrigo
if (method === "POST" && resource === "products") {
    let [, , , , title, price, category = "generico"] = process.argv;
    price = parseFloat(price);
    category = category.toLowerCase();

    if (!isNaN(price) && price <= 0) {
        const product = {
            title: title,
            price: price,
            category: category
        };
        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(data => console.log(data));
    } else {
        console.log("Error: El precio debe ser un valor positivo.");
    }
}

// npm start DELETE products/4
if (method === "DELETE" && resource.startsWith("products/")) {
    const productId = parseInt(resource.split("/")[1]);
    if (!productId || productId < 1) {
        console.log("Error: Debe ingresar un número positivo.");
    } else {
        fetch('https://fakestoreapi.com/products/1', {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }
}
