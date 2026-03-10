let btnMenu = document.getElementById("btn-menu");
let sideBar = document.querySelector(".sidebar-list");
let closeSideBar = document.getElementById("btn-close-sidebar");


btnMenu.addEventListener("click", () => {
    if (sideBar.style.right === "-225px") {
        sideBar.style.right = "0px";
        
    } else {
        sideBar.style.right = "-225px";
    }
});


closeSideBar.addEventListener("click", ()=>{
    if(sideBar.style.right==="0px"){
        sideBar.style.right = "-225px";
    }else{
        sideBar.style.right ="0px";
    }
})

let addProductHTML = "";

products.forEach((product)=>{
    addProductHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.altText}" />

            <div class="product-description">
              <p class="product-name">${product.name}</p>
              <p class="product-price">R${product.price}</p>
            </div>
            <div class="addToCart">
              <a href="product-details.html?product=${product.name}"
                ><img src="assets/add-to-cart.png" alt="Add to cart icon"
              /></a>
            </div>
          </div>
    `;
   
})

 

let productsCardsWraper = document.getElementById("js-products-cards-wrapper");

    
if (productsCardsWraper){
  productsCardsWraper.innerHTML = addProductHTML;
} 

const productWrapper = document.getElementById("product-wrapper");

if (productWrapper) {

  const getOneProduct = new URLSearchParams(window.location.search);
  const productName = getOneProduct.get("product");

  let productDescriptionsHTML = "";

  products.forEach(product => {

    if (product.name === productName) {

      productDescriptionsHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.altText}" />

          <div class="product-description">
            <p class="product-name">${product.name}</p>
            <p class="product-price">R${product.price}</p>
          </div>

          <div class="numItems-wrapper">
            <input type="number" class="numItems" placeholder="1"/>

            <div class="addToCart">
              <a href="#">I WANT ONE</a>
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

