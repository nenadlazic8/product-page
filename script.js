
//MAIN IMAGE
let mainImg = document.querySelector('.main-img img');

//LIGHTBOX VARS
let lightbox = document.querySelector('.lightbox')
let exit = document.querySelector('.exit');

//LIGHTBOX OPEN
mainImg.addEventListener('click', () => {
    lightbox.style = 'display: flex;';
})

//LIGHTBOX CLOSE
exit.addEventListener('click', () => {
    lightbox.style = 'display: none;';
})

//LEFT CHANGING COLOR
let leftArrow = document.querySelector('.left');
let leftPath = document.querySelector('.left svg path');
let leftColor = leftPath.getAttribute('stroke');

leftArrow.addEventListener('mouseover',() => {
    leftPath.setAttribute('stroke', 'hsl(26, 100%, 67%)');
});

leftArrow.addEventListener('mouseout',() => {
    leftPath.setAttribute('stroke', '#000');
})

//RIGHT CHANGING COLOR
let rightArrow = document.querySelector('.right');
let rightPath = document.querySelector('.right svg path');
let rightColor = leftPath.getAttribute('stroke');

rightArrow.addEventListener('mouseover',() => {
    rightPath.setAttribute('stroke', 'hsl(26, 100%, 67%)');
});

rightArrow.addEventListener('mouseout',() => {
    rightPath.setAttribute('stroke', '#000');
})

//LIGHTBOX IMAGES

let lightboxMainImg = document.querySelector('.light-box-main-img img');
let lightboxImages = document.querySelectorAll('.light-box-image img');
let counter = 1;

//RIGHT AROOW CHANGING MAIN IMAGE
rightArrow.addEventListener('click',() => {
    counter++;
    if(counter >= lightboxImages.length){
        counter = lightboxImages.length;
    }
    lightboxMainImg.src = 'images/image-product-'+counter+'.jpg';
});

//LEFT AROOW CHANGING MAIN IMAGE
leftArrow.addEventListener('click',() => {
    counter--;
    if(counter < 1){
        counter = 1;
    }
    lightboxMainImg.src = 'images/image-product-'+counter+'.jpg';
});

//LIGHTBOX THUMBNAILS CLICK
lightboxImages.forEach(image => {
    image.addEventListener('click', () => {
        let imageNumber = image.getAttribute('class');

        counter = imageNumber;
        
        lightboxMainImg.src = 'images/image-product-' + imageNumber + '.jpg';              
    })
    
});

//CHANGING A MAIN IMAGE
let mainGallery = document.querySelectorAll('.gallery-images img');

mainGallery.forEach(image => {
    image.addEventListener('click', () => {
        let imageNumber = image.getAttribute('class');
        mainImg.src = 'images/image-product-' + imageNumber + '.jpg';              
    });
});

//QUANTITY PLUS - MINUS

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

let quant = document.querySelector('.quant');
let quantNumber = document.querySelector('.quant').innerHTML;

plus.addEventListener('click', () =>{
    quantNumber++;
    quant.innerHTML = quantNumber;
});

minus.addEventListener('click', () =>{
    quantNumber--;
    if(quantNumber < 1){
        quantNumber = 1;
    }
    quant.innerHTML = quantNumber;
});

//ADD TO CART BUTTON
let addToCart = document.querySelector('.add-to-cart-btn');
let cart = document.querySelector('.cart');
let spanQuant = document.querySelector('.cart-quantity');
let quantity = document.querySelector('.quant');
let message = document.querySelector('.message');
let cartBtn = document.querySelector('.cart-button');

let ul = document.querySelector('.cart-body ul');
let li = document.querySelector('.cart-body ul li');

let title = document.querySelector('.product-title').innerHTML;
let price = document.querySelector('.price').innerHTML;


cartBtn.addEventListener('click', () => {
    cart.classList.toggle('d-block');
});

function emptyCart(){
    message.style = 'display: block;';
    spanQuant.innerHTML = 0;
    quantityNumber = 0;
    li.innerHTML = '';
}

addToCart.addEventListener('click', () => {

    //STYLING AND ADDING A SPAN
    let quantityNumber = quantity.innerHTML;
    
    //CHECKING QUANTITY
    if(quantityNumber > 0){
        let deleteBtn = `<svg onclick="emptyCart();" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>`
        message.style = 'display: none;';
        spanQuant.style = 'display:inline-block;';
        cart.classList.add('d-block');
        spanQuant.innerHTML = quantNumber;
        let finalPrice = price * quantNumber;
        li.innerHTML = '<img src="images/image-product-1-thumbnail.jpg">' + '<div><p>'+title+'</p><p>$'+price+' x '+quantNumber+'<b>  $'+finalPrice+'</b></p><p>'+deleteBtn+'</p></div>';
        
    }else{
        message.style = 'display: block;';
    }
});


//HAMBURGER

let hamburger = document.querySelector('.hamburger');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    line1.classList.toggle('transform1');
    line2.classList.toggle('transform2');
    line3.classList.toggle('transform3');
    navItems.classList.toggle('d-block');
})

//MOBILE ARROWS

if(window.innerWidth < 1100){
    mainImg.addEventListener('click', () => {
        lightbox.style = 'display: none;';
    })
};

//LIGHTBOX IMAGES
let leftArrowM = document.querySelector('.left-main');
let rightArrowM = document.querySelector('.right-main');
let counterM = 1;

//RIGHT AROOW CHANGING MAIN IMAGE
rightArrowM.addEventListener('click',() => {
    counterM++;
    if(counterM >= mainGallery.length){
        counterM = mainGallery.length;
    }
    mainImg.src = 'images/image-product-'+counterM+'.jpg';

    console.log(mainGallery.length)
    console.log(counterM)
});

//LEFT AROOW CHANGING MAIN IMAGE
leftArrowM.addEventListener('click',() => {
    counterM--;
    if(counterM < 1){
        counterM = 1;
    }
    mainImg.src = 'images/image-product-'+counterM+'.jpg';
});

