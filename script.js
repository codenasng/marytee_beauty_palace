let cart = [];

// Function to add items to the cart
function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Clear the current items in the cart
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ₦${item.price}`;  // Corrected template literals
    cartItems.appendChild(li);
  });
}

// Function to proceed to buy via WhatsApp
function proceedToBuy() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  const productNames = cart.map((item) => item.product).join(", ");  // Get product names
  const message = `I would like to buy: ${productNames}`;  // Corrected template literals
  const whatsappUrl = `https://wa.me/+2348135978910?text=${encodeURIComponent(message)}`;  // Your WhatsApp number included
  window.location.href = whatsappUrl;  // Redirects to WhatsApp with the message
}

