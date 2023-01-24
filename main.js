const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCart = document.querySelector(".navbar-shopping-cart");
const productsShopingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
shopingCart.addEventListener("click", toggleShopingCart);

function toggleDesktopMenu() {
  const isOpenShopingCart = !productsShopingCart.classList.contains("inactive");
  if (isOpenShopingCart) {
    productsShopingCart.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isOpenShopingCart = !productsShopingCart.classList.contains("inactive");
  if (isOpenShopingCart) {
    productsShopingCart.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleShopingCart() {
  const isOpenMobileMenu = !mobileMenu.classList.contains("inactive");
  const isOpenDesktopMenu = !desktopMenu.classList.contains("inactive");

  if (isOpenMobileMenu) {
    mobileMenu.classList.add("inactive");
  }
  if (isOpenDesktopMenu) {
    desktopMenu.classList.add("inactive");
  }
  productsShopingCart.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Pantalla",
  price: 250,
  img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Laptop",
  price: 570,
  img: "https://images.pexels.com/photos/3585014/pexels-photo-3585014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.img)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productPrice.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProducts(productList);




