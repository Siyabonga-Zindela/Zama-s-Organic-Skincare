let btnMenu = document.getElementById("btn-menu");
let sideBar = document.querySelector(".sidebar-list");
let closeSideBar = document.getElementById("btn-close-sidebar");

if (btnMenu && sideBar) {
  btnMenu.addEventListener("click", () => {
    if (sideBar.style.right === "-225px") {
      sideBar.style.right = "0px";
    } else {
      sideBar.style.right = "-225px";
    }
  });
}

if (closeSideBar && sideBar) {
  closeSideBar.addEventListener("click", () => {
    if (sideBar.style.right === "0px") {
      sideBar.style.right = "-225px";
    } else {
      sideBar.style.right = "0px";
    }
  });
}


let addProductHTML = "";

if (typeof products !== "undefined") {
  products.forEach((product) => {
    addProductHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.altText}" />

        <div class="product-description">
          <p class="product-name">${product.name}</p>
          <p class="product-price">R${product.price}</p>
        </div>

        <div class="addToCart">
          <a href="product-details.html?product=${product.name}">
            <img src="assets/add-to-cart.png" alt="Add to cart icon" />
          </a>
        </div>
      </div>
    `;
  });
}

let productsCardsWraper = document.getElementById("js-products-cards-wrapper");

if (productsCardsWraper) {
  productsCardsWraper.innerHTML = addProductHTML;
}


const productWrapper = document.getElementById("product-wrapper");

if (productWrapper && typeof products !== "undefined") {
  const getOneProduct = new URLSearchParams(window.location.search);
  const productName = getOneProduct.get("product");

  let productDescriptionsHTML = "";

  products.forEach((product) => {
    if (product.name === productName) {
      productDescriptionsHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.altText}" />

          <div class="product-description">
            <p class="product-name">${product.name}</p>
            <p class="product-price">R${product.price}</p>
          </div>

          <div class="numItems-wrapper">
            <input type="number" class="numItems" value="1" min="1" />
            
            <div class="addToCart">
              <a 
                href="cart.html" 
                class="btnIwantOne" 
                data-product-name="${product.name}" 
                data-image="${product.image}" 
                data-price="${product.price}"
              >
                I WANT ONE
              </a>
            </div>
          </div>
        </div>

        <p class="product-description-paragraph">
          ${product.description}
        </p>
      `;
    }
  });

  productWrapper.innerHTML = productDescriptionsHTML;
}

let btnIwantOne = document.querySelectorAll(".btnIwantOne");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let totCartItems = document.getElementById("#tot-cart-items");

btnIwantOne.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    let productName = button.dataset.productName;
    let image = button.dataset.image;
    let price = button.dataset.price;

    let quantityInput = document.querySelector(".numItems");
    let quantity = Number(quantityInput.value);
    
    if (!quantity || quantity < 1) {
      quantity = 1;
    }
    
    let matchingItem = cartItems.find((item) => item.Name === productName);

    if (matchingItem) {
      matchingItem.productQuantity += quantity;
      
    } else {
      cartItems.push({
        productImg: image,
        Name: productName,
        productPrice: price,
        productQuantity: quantity
      });
      
    }
    
    totCartItems += quantity;
    totCartItems.textContent = totCartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "cart.html";
  });
});



function displayCart() {
  let cartWrapper = document.querySelector(".cart-wrapper");

  if (!cartWrapper) return;

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let cartItemHTML = "";

  if (cartItems.length === 0) {
    cartWrapper.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
    return;
  }

  cartItems.forEach((item, index) => {
    cartItemHTML += `
      <div class="cart-item">
        <div class="cart-image-wrapper">
          <img src="${item.productImg}" alt="${item.Name}" />
        </div>

        <div class="product-description">
          <p class="product-name">${item.Name}</p>
          <p class="product-price">R${item.productPrice}</p>
          <p class="quantity">Quantity: ${item.productQuantity}</p>
        </div>

        <div class="delete">
          <button class="delete-item-btn" data-index="${index}">
            <img src="assets/delete-icon .png" alt="delete-icon" />
          </button>
        </div>
      </div>
    `;
  });

  cartWrapper.innerHTML = cartItemHTML;

  let deleteButtons = document.querySelectorAll(".delete-item-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let index = button.dataset.index;
      removeCartItem(index);
    });
  });
}


function removeCartItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCart();
}

displayCart();