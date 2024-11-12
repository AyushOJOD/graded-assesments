/*
    The json looks like
    products = [
    {
        "id": 1,
        "name": "Dell Inspiron",
        "category": "Laptop",
        "price" : 50000,
        "available": true
    }
    ]
 */

function parseJSONData(jsonString) {
    return JSON.parse(jsonString);
}


function addProduct(products, newProduct) {
    const parsedProduct = JSON.parse(newProduct);
    products.push(parsedProduct);
}


function updateProductPrice(products, productId, newPrice) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.price = newPrice;
    } else {
        console.log("Product not found.");
    }
}

function getAvailableProducts(products) {
    return products.filter(product => product.available);
}

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}

const jsonData = '[{"id":1,"name":"Laptop","category":"Electronics","price":1200,"available":true},{"id":2,"name":"Headphones","category":"Electronics","price":150,"available":false},{"id":3,"name":"Coffee Maker","category":"Home Appliances","price":80,"available":true}]';

// 1.
const products = parseJSONData(jsonData);
console.log(products);  

const newProduct = '{"id":4,"name":"Smartwatch","category":"Wearable Technology","price":250,"available":true}';

// 2.
addProduct(products, newProduct);
console.log(products);

// 3.
updateProductPrice(products, 1, 1300);
console.log(products);  

// 4.
const availableProducts = getAvailableProducts(products);
console.log(availableProducts);

// 5.
const filteredProducts = getProductsByCategory(products, "Electronics");
console.log(filteredProducts);  


