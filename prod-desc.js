// Function to open the popup window
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup window
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Event listener for the "Add to Cart" button
document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    openPopup();
});