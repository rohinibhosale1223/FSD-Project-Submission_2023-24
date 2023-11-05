// script.js

// Function to handle adding a product to the cart
function addToCart(productName, productPrice) {
    
    alert(`Added "${productName}" to the cart. Price: ${productPrice}`);
}

// Event listener to handle adding a product to the cart when the "Add to Cart" button is clicked
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".product-card button");
    
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productCard = this.closest(".product-card");
            const productName = productCard.querySelector(".product-title").textContent;
            const productPrice = productCard.querySelector(".product-price").textContent;
            
            addToCart(productName, productPrice);
        });
    });
});
