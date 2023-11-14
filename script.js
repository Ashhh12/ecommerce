const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
} 
// Sample product data
const products = [
    { 
        id: 1, title: 'Floral Print Midi Dress With Tied Strap', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price: $75, image: 'https://img101.urbanic.com/v1/goods-pic/f9f7d318d4254c64a21df94a08bc1105UR_w1440_q90.webp',  
        id: 2, title: 'Gathered Tied Strap Midi Dress With Slit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price: $89, image: 'https://img101.urbanic.com/v1/goods-pic/cd73b86b2fc54521a87136546b01fca5UR_w1440_q90.webp',
        id: 3, title: 'Slit Bodycon Dress', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price: $23, image: 'https://img101.urbanic.com/v1/goods-pic/a0a99ff10ac741418074d1c93c4654f4UR_w1440_q90.webp',
        id: 4, title: 'Tie Dye Open Back Satin Dress With Slit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price: $56, image: "https://img101.urbanic.com/v1/goods-pic/377215f17d354e73848df274becb61a2UR_w1440_q90.webp",
        id: 5, title: 'Feather Slip Dress', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price: $91, image: "https://img101.urbanic.com/v1/goods-pic/8ba8684f520c419dacff463668997449UR_w1440_q90.webp",
        id: 6, title: 'Tied Straps Open Back Cami Dress', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price:$81, image: "https://img101.urbanic.com/v1/goods-pic/8a2ad3c4e0f446d4bccef90b96497005UR_w1440_q90.webp",
        id: 7, title: 'Split Sports T-Shirt', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price: $66, image: "https://img101.urbanic.com/v1/goods-pic/5797e43b98df416e833a394f5724de2eUR_w1440_q90.webp",
        id: 8, title: 'Cropped Sports Top', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vitae justo tincidunt fermentum. Vestibulum vehicula quam ac odio efficitur, vel rhoncus libero fermentum. Quisque vitae tortor quis tellus ultrices tempus. Duis eu erat nec elit interdum cursus non in ligula. Nullam nec nunc id augue fermentum ultricies. Sed sit amet risus auctor, feugiat nisi non, fringilla dui. In hac habitasse platea dictumst. Pellentesque vel libero eget libero tempus consectetur a et sapien. Integer id nulla vel est consectetur commodo ut a libero. Vivamus tristique justo a dui sagittis, sit amet tincidunt elit posuere. Maecenas vel tortor eu risus tincidunt vestibulum eget vel libero. Curabitur congue enim in tellus bibendum, vel luctus justo varius. Suspendisse potenti.', price: $70, image: "https://img101.urbanic.com/v1/goods-pic/0ca0a2ebf0fd4dccb081dcd75d31ca31UR_w1440_q90.webp",
    } 
];

function displayProductDetails(productId) {
    // Find the selected product based on the productId
    const selectedProduct = products.find(product => product.id === productId);

    // Display product details in the product-details container
    const productDetailsContainer = document.getElementById("product-details");
    if (selectedProduct) {
        productDetailsContainer.innerHTML = `
            <img src="${selectedProduct.imageUrl}" alt="${selectedProduct.name}">
            <h2>${selectedProduct.name}</h2>
            <p>${selectedProduct.description}</p>
            <button onclick="addToCart(${selectedProduct.id})">Add to Cart</button>
            <button onclick="buyNow(${selectedProduct.id})">Buy Now</button>
        `;
    }
}

// Function to add product to cart
function addToCart(productId) {
    // Implement your addToCart logic here
    console.log(Product ${productId} added to cart);
}

// Function to handle Buy Now action
function buyNow(productId) {
    // Implement your buyNow logic here
    console.log(Buy Now clicked for Product ${productId});
}

// Function to update product details based on product ID
function updateProductDetails(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    // Update product details in the HTML
    document.getElementById('product-title').innerText = selectedProduct.title;
    document.getElementById('product-description').innerText = selectedProduct.description;
    document.getElementById('product-price').innerText = $${selectedProduct.price.toFixed(2)};
}
// Function to handle "Add to Cart" button click
function addToCart() {
    // Implement your logic for adding the product to the cart
    console.log('Product added to cart');
}

// Function to handle "Buy Now" button click
function buyNow() {
    // Implement your logic for the "Buy Now" functionality
    console.log('Buy Now clicked');
}

// Append product elements to the container
const productContainer = document.getElementById('product-container');
products.forEach(product => {
    productContainer.appendChild(createProductElement(product));
});
const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
    image.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        updateProductDetails(productId);
    });
});