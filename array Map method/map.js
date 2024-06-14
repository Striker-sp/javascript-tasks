const products = ["Product-1", "Product-2", "Product-3"]

const displayItems = products.map((product) => {
    return "<li>" + product + "</li>";
});

console.log(displayItems);