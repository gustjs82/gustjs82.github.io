// // Toggle mobile menu on click of the hamburger icon
// document.getElementById('hamburger-icon').addEventListener('click', function() {
    // const mobileMenu = document.getElementById('mobile-menu');
    // mobileMenu.classList.toggle('open');  // Add or remove the 'open' class to slide in/out the menu
// });
// Hamburger menu toggle for mobile view
const hamburger = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

function showProduct(productId) {
    // Hide all products
    var products = document.querySelectorAll('.product-item');
    products.forEach(function(product) {
        product.style.display = 'none';
    });

    // Show the selected product
    document.getElementById(productId).style.display = 'block';
}
// Function to show the clicked product and hide others
// function showProduct(productId) {
    // // Hide all product items
    // var products = document.querySelectorAll('.product-item');
    // products.forEach(function(product) {
        // product.style.display = 'none';
    // });

    // // Show the selected product
    // document.getElementById(productId).style.display = 'block';
// }