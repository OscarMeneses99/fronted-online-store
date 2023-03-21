/*-------------------------------Variables-------------------------*/
const cardsContainer = document.querySelector('.cards-container');  //
const menuPerfil = document.querySelector('.desktop-menu');     //       
const textEmail = document.querySelector('.navbar-email');      //
const menuIconMobile = document.querySelector('.menu');     //
const menuMobile = document.querySelector('.mobile-menu');      //
const menuIconCarrito = document.querySelector('.navbar-shopping-cart');        //
const productDetail = document.querySelector('.product-detail');        //
const productDetailContainer = document.querySelector('.product-detail-secundary');     //
const productDetailCloseIcon = document.querySelector('.product-detail-close-secundary');       //

/*---------------------------------Eventos------------------------------ */
textEmail.addEventListener('click',showPerfil);

menuIconMobile.addEventListener('click',showMobileMenu);

menuIconCarrito.addEventListener('click',showCarrito);

//productDetailContainer.addEventListener('click',openProductDetail);

productDetailCloseIcon.addEventListener('click',closeProductDetail);

/*---------------------------------Funciones------------------------------- */

//Para el email

function showPerfil(){
    const isAsideClosed = productDetail.classList.contains('inactive');

  if (!isAsideClosed) {
    productDetail.classList.add('inactive');
  }  
  menuPerfil.classList.toggle('inactive');
}

//Para el menu mobile

function showMobileMenu(){
    const isAsideClosed = productDetail.classList.contains('inactive');

  if (!isAsideClosed) {
    productDetail.classList.add('inactive'); 
  }
  closeProductDetail();
  menuMobile.classList.toggle('inactive');
}

//Para el Icono del Carrito

function showCarrito(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    menuMobile.classList.add('inactive'); 
  }
  
  else if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  productDetail.classList.toggle('inactive'); 
}
/*----------------Detalles del producto------------------- */

function openProductDetail(){
    productDetail.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

/*----------------Cerrar Detalles del producto------------------ */

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
  }

/*-------------------------Catalogo de productos-----------------------*/

const productList = [];
productList.push({
  name: 'Bike',
  price: 1200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 65000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 15400,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);