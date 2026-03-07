let btnMenu = document.getElementById("btn-menu");
let sideBar = document.querySelector(".sidebar-list");
let closeSideBar = document.getElementById("btn-close-sidebar");
let body = document.getElementsByTagName("body");

btnMenu.addEventListener("click", () => {
    if (sideBar.style.right === "-225px") {
        sideBar.style.right = "0px";
        body.style.backGroundColor = "grey";
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
              <a href="carrot-oil-details.html"
                ><img src="assets/add-to-cart.png" alt="Add to cart icon"
              /></a>
            </div>
          </div>
    `;
   
})

 let productsCardsWraper = document.getElementById("js-products-cards-wrapper");
    productsCardsWraper.innerHTML = addProductHTML;