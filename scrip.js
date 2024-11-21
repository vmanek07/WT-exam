  const productDetails = window.location.search;
  if (productDetails.includes('?id=')) {
  const id = new URLSearchParams(productDetails).get('id');
  const product = products.find(p => p.id == id);

  if (product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-price').innerText = product.price;
  }
}
function addToCart() {
  const productId = new URLSearchParams(window.location.search).get('id');
  const product = products.find(p => p.id == productId);
  cart.push(product);
  alert('Product added to cart');
}

const cartItemsContainer = document.getElementById('cart-items');
if (cartItemsContainer) {
  cart.forEach(item => {
    const cartItem = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.price} INR</p>
        </div>
      </div>
    `;
    cartItemsContainer.innerHTML += cartItem;
  });
}

function checkout() {
    alert('Checkout functionality not implemented yet.');
  }
clicks();
function clicks(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("demo").innerHTML = localStorage.clickcount;
}