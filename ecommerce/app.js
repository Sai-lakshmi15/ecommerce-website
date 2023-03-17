const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Chanel Classic Flap Bag",
        price:  "₹5,50,025.92",
        colors: [
            { 
                code: "rgb(143, 127, 127)",
                img: "./img/chanel1.png",
            },
            {
                code: "black",
                img: "./img/chanel2.png",                                
            },
        ],
    },
    {
        id: 2,
        title: "Lady Dior Bag",
        price:  "₹1,95,025.92",
        colors: [
            { 
                code: "black",
                img: "./img/dior1.png",
            },
            {
                code: "white",
                img: "./img/dior2.png",                                
            },
        ],
    },
    {
        id: 3,
        title: "Gucci Ophidia GG Shoulder Bag",
        price: " ₹1,50,025.92",
        colors: [
            { 
                code: "rgb(143, 127, 127)",
                img: "./img/gucci1.png",
            },
            {
                code: "black",
                img: "./img/gucci2.png",                                
            },
        ],
    },
    {
        id: 4,
        title: "Versace 'La Medusa' Bag",
        price:  "₹1,25,025.92",
        colors: [
            { 
                code: "black",
                img: "./img/versace1.png",
            },
            {
                code: "white",
                img: "./img/versace2.png",                                
            },
        ],
    },
    {
        id: 5,
        title: "Saint Laurent Collège Shoulder Bag",
        price:  "₹2,50,025.92",
        colors: [
            { 
                code: "black",
                img: "./img/saintlaurent1.png",
            },
            {
                code: " rgb(143, 127, 127);",
                img: "./img/saintlaurent2.png",                                
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".Color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        
        //chane the chosen product
        choosenProduct = products[index]

        //change texts of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assigning new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
})

close.addEventListener("click",()=>{
    payment.style.display="none";
})

