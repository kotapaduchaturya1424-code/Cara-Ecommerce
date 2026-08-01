let cartCount = 0;

function addToCart(productName, price) {
  cartCount += 1;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${productName} added to cart! Total items in cart: ${cartCount}`);
}