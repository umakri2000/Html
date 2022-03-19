const menu = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");


menu.onclick = function () {
    if (navbar.style.height == "0vh") {
        navbar.style.height = "100vh";
    } else{
        navbar.style.height = "0vh";
    }
}
 


// ADD AND MINUS FUNCTION
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const value = document.querySelector(".addon");

plusBtn.onclick = function () {
    value.innerHTML++;
}

minusBtn.onclick = function () {
    value.innerHTML--;
}


const addcart = document.getElementById("itemadd");

const btnAdd = document.querySelector(".btn-right");




btnAdd.onclick = function () {
    addcart.innerHTML = value.innerHTML;
    addcart.style.display = "block";

}

// CART FUNCTION

const cartbox = document.getElementById("cart");
const section = document.querySelector(".section");
const number = document.getElementById("number");
const limited = document.querySelector(".limited");

const realPrice = document.querySelector(".real-price");
cartbox.addEventListener("click", addCart)
function addCart() {

    section.style.display = "block";
    let div = document.createElement("div");
    div.setAttribute("class", "divContent");

    let paraHead = document.createElement("h2");
    paraHead.innerHTML = limited.innerHTML;

    paraHead.style.fontSize = "1.1rem";
    let paragraph = document.createElement("p");
     let del = document.createElement("img");
    let pdtDes = document.createElement("div");
    let product = document.createElement("img");
    let pdtImg = document.createElement("div");
    
    let ans = "$" + value.innerHTML * number.innerHTML;

    let answer = document.createElement("p");
    let allCart = document.createElement("div");
     let btn = document.createElement("button");
    answer.innerText = ans;

    if (value.innerHTML == 0) {


        let noItem = document.createElement('div');
        noItem.innerHTML = "You have no item added in cart";
        del.style.display = "none";
        pdtDes.style.display = "none";
        pdtImg.style.display = "none";
        paraHead.style.display = "none";
        paragraph.style.display = "none";
        btn.style.display="none"
        allCart.appendChild(noItem);

        section.appendChild(allCart);

        allCart.style.padding = "4rem";
        allCart.style.textAlign = "center"
    } 

    paragraph.innerHTML = `${realPrice.innerHTML} * ${ value.innerHTML}` + " " + " $" + value.innerHTML * number.innerHTML
    
   

    // ans.innerContent = value.innerHTML * number.innerHTML;
    // ans.setAttribute("class", "answer");

   



    
    

    product.setAttribute("class", "cartPdt")

    product.src = "images/image-product-1-thumbnail.jpg";
   

    del.src = "images/icon-delete.svg";
    del.style.cursor = "pointer";
    del.addEventListener("click", function() {
        allCart.remove();
    })

    pdtDes.appendChild(del);
    pdtImg.appendChild(product)
   
 
    div.appendChild(paraHead);
     div.appendChild(paragraph)
   
   

    btn.innerHTML = "Checkout";

    btn.setAttribute("class", "btnCheckout");

    
    

    allCart.setAttribute("class", "allCart");

    allCart.appendChild(pdtImg);
    allCart.appendChild(div);
    allCart.appendChild(pdtDes);
    div.style.textAlign = "left"

section.appendChild(allCart);

section.appendChild(btn)
    

}


const imgDisplay = document.querySelector(".img-display");
const imgShow = document.querySelectorAll(".img-show");

const display = document.querySelector(".imgdisplay");
const show = document.querySelectorAll(".img-modal");



const img = [
    { show: "images/image-product-1.jpg" },
    {  show: "images/image-product-2.jpg" },
    {  show: "images/image-product-3.jpg" },
    {  show: "images/image-product-4.jpg" } 
]

const photo = [
    { img: "images/image-product-1.jpg" },
    {  img: "images/image-product-2.jpg" },
    {  img: "images/image-product-3.jpg" },
    {  img: "images/image-product-4.jpg" } 
]

const heroImages = [
    { img: "images/image-product-1.jpg" },
    {  img: "images/image-product-2.jpg" },
    {  img: "images/image-product-3.jpg" },
    {  img: "images/image-product-4.jpg" } 
]

for(let x = 0; x < imgShow.length; x++) {
    imgShow[x].addEventListener("click", function () {
        imgDisplay.src = photo[x].img;
    })
}

// NEXT AND PREV BTN FUNCTION FOR MODAL
const prevBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");

const modalshow = document.querySelectorAll(".modal-show");

 let y = 0;
prevBtn.addEventListener("click", prev)
   
    function prev() {
    y--;
   

    if (y < 0) {
        y = 3;
        }
        
    show[y]
    display.src = img[y].show;
}

nextBtn.addEventListener("click", next) 

    
    function  next() {
    y++;
  

    if(y > 3) {
        y = 0;
    }
        
    show[y]
        display.src = img[y].show;
}

// NEXT AND PREV BTN FOR MOBILE HERO

const btnPrev = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nxtBtn");

const heroImg = document.querySelector(".hero-img");
let current = 0;

btnNext.addEventListener("click", function () {
      current++;
  

    if(current > 3) {
        current = 0;
    }
        
        heroImg.src = heroImages[current].img;

})

btnPrev.addEventListener("click", function () {
      current--;
  

    if(current < 0) {
        current = 3;
    }
        
        heroImg.src = heroImages[current].img;

})

// modal toggle


const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", function () {
    modal.style.height = "0vh"
});

const showImg = document.querySelector(".show-img");

imgDisplay.addEventListener("click", function () {
    modal.style.height = "100vh";
    
})