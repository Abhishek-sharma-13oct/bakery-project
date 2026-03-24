const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");


    searchIcon.addEventListener("click", ()=>{
    searchForm.classList.add("active");
    cartItemsContainer.classList.remove("active");
    navBar.classList.remove("active"); 
    wishlistItemsContainer.classList.remove("active");
})
    menuIcon.addEventListener("click", ()=>{
    navBar.classList.add("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    wishlistItemsContainer.classList.remove("active");
})
const cartIcon = document.querySelector(".cart-icon");
const wishlistIcon = document.querySelector(".wishlist-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");
const wishlistItemsContainer = document.querySelector(".wishlist-items-container");

    cartIcon.addEventListener("click", ()=>{
    cartItemsContainer.classList.add("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
    wishlistItemsContainer.classList.remove("active");
})
  wishlistIcon.addEventListener("click", ()=>{
  wishlistItemsContainer.classList.add("active");
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
  navBar.classList.remove("active");
})
window.onscroll =() => {
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
    wishlistItemsContainer.classList.remove("active");
};



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice, productImage) {
  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex(item => item.name === productName);

  if (existingProductIndex > -1) {
    // If the product is already in the cart, increase the quantity
    cart[existingProductIndex].quantity += 1;
  } else {
    // Otherwise, add a new product to the cart
    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    };
    cart.push(product);
  }

  // Update the cart UI
  updateCartUI();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);  // Remove the item from the cart
  updateCartUI();
}

// Function to increase the quantity of an item in the cart
function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateCartUI();
}

// Function to decrease the quantity of an item in the cart
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    updateCartUI();
  }
}

// Function to update the cart display
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  // Clear the current cart items list
  cartItems.innerHTML = '';

  let total = 0;

  // Loop through cart items and display them
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="cart-item-controls">
    <img src="${item.image}" alt="${item.name}" width="50">
    <span class="name">${item.name}</span> - 
    <span class="price">₹${(item.price).toFixed(2)}</span> 
    <button class="decreaseQuan" onclick="decreaseQuantity(${index})">-</button>
    <span> ${item.quantity}</span>
    <button class="increaseQuan" onclick="increaseQuantity(${index})">+</button>
    <button class="remove-btn" onclick="removeFromCart(${index})">⨯</button>
      </div>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  // Update total price
  totalPrice.textContent = `₹ ${total.toFixed(2)}`;
}




// Get references to the wishlist container and button
// const wishlistItemsContainer = document.getElementById('wishlist-items');
const addItemButton = document.getElementById('add-item-btn');


function addProductToWishlist(productName, productImage, price, quantity) {
    
    const li = document.createElement('li');
    li.classList.add('wishlist-item');
    
    
    const img = document.createElement('img');
    img.src = productImage; 
    img.alt = productName;
   
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const nameElem = document.createElement('p');
    nameElem.textContent = productName;

    const priceElem = document.createElement('p');
    priceElem.classList.add('price');
    priceElem.textContent = `Price: ₹${price}`;
    
    const quantityElem = document.createElement('p');
    quantityElem.classList.add('quantity');
    quantityElem.textContent = `Quantity: ${quantity}`;
    
    productInfo.appendChild(nameElem);
    productInfo.appendChild(priceElem);
    productInfo.appendChild(quantityElem);

    // Create the wishlist icon
    const wishlistIcon = document.createElement('span');
    wishlistIcon.classList.add('wishlist-icon');
    wishlistIcon.textContent = '';

    wishlistIcon.addEventListener('click', () => {
        wishlistIcon.classList.toggle('added');
    });

    
    li.appendChild(img);
    li.appendChild(productInfo);
    li.appendChild(wishlistIcon);
    
    
    wishlistItemsContainer.appendChild(li);
}


addItemButton.addEventListener('click', () => {
    
    const productName = "Product " + (wishlistItemsContainer.children.length + 1);
    const productImage = "https://via.placeholder.com/50"; 
    const price = (Math.random() * 100).toFixed(2); 
    const quantity = Math.floor(Math.random() * 5) + 1;
    
    addProductToWishlist(productName, productImage, price, quantity);
});
