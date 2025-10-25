const [, , method, resource] = process.argv
method = method.toUpperCase()
resource = resource.toLowerCase()

if (method === "GET" && resource === "products") {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));
}