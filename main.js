 const menuEmail = document.querySelector('.navbar-email');
 const desktopMenu = document.querySelector('.desktop-menu');
 const menuHamIcon = document.querySelector('.menu');
 const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
 const mobileMenu = document.querySelector('.mobile-menu');
 const aside = document.querySelector('.product-detail');
 const cardsContainer = document.querySelector('.cards-container');
 
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose){
        aside.classList.add('inactive')
      } 
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose){
        aside.classList.add('inactive')
      } 
    

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
      } 
    
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',



});
productList.push({
    name:'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Computador',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/* 
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */


for(product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('product-card')
   
   //product= {name,prices, image} ->product.image
   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info')

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText ='$' + product.price;

   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const prodctInfoFigure = document.createElement('figure');
   const prodctImgCart = document.createElement('img');
   prodctImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

   prodctInfoFigure.appendChild(prodctImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(prodctInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);

}