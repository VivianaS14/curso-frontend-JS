/* Menu */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCartContainer');
/* Card container */
const cardsContainer = document.querySelector('.cards-container');
/* Detail container */
const detailContainer = document.querySelector('#productDetail');
const detailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', () => {
    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive');
    }
    if (!detailContainer.classList.contains('inactive')) {
        detailContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
});

hamburgerMenu.addEventListener('click', () => {
    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive');
    }
    if (!detailContainer.classList.contains('inactive')) {
        detailContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }
    if (!detailContainer.classList.contains('inactive')) {
        detailContainer.classList.add('inactive')
    }

    shoppingCart.classList.toggle('inactive');
})

detailCloseIcon.addEventListener('click', () => {
    detailContainer.classList.add('inactive');
})

/* Array que trae los datos de la base de datos */
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Compu',
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

const renderProducts = (arr) => {
    for (product of arr) {
        const divCard = document.createElement('div');
        divCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        img.addEventListener('click', () => {
            if (!shoppingCart.classList.contains('inactive')) {
                shoppingCart.classList.add('inactive')
            } 
            if (!desktopMenu.classList.contains('inactive')) {
                desktopMenu.classList.add('inactive')
            }

            detailContainer.classList.remove('inactive');
        })
        
        const divInfo = document.createElement('div');
        divInfo.classList.add('product-info');
        
        const div = document.createElement('div');
        const pName = document.createElement('p');
        pName.innerText = product.name;
        const pPrice = document.createElement('p');
        pPrice.innerText = '$' + product.price;
        
        const figure = document.createElement('figure');
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
        
        divCard.append(img, divInfo);
        divInfo.append(div, figure);
        div.append(pName, pPrice);
        figure.appendChild(imgCart);
    
        cardsContainer.appendChild(divCard);
    }
}
renderProducts(productList)