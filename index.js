const slider = document.getElementById("animate")
let container =document.querySelector(".slide-container")
let index=0
let pixel=0


var intervel = setInterval(slideranime,3000)


slider.addEventListener("mouseover",function(){

  clearInterval(intervel,100)
    
    console.log("helolo")

})







function slideranime(){

    if(index===0){
        
       slider.style.transform=`translate(${pixel}px)`
    }else {
        pixel-=350
        slider.style.transform=`translate(${pixel}px)`
    }
    index++
    if(index===8){
       
        index=0
        pixel=0
    }
    
} 


/* nav section */

var nav = document.querySelector(".sec-four")
var openbtn=document.querySelector(".nav-icon")
var closebtn =document.querySelector(".close-button")

openbtn.addEventListener("click",function(){
    nav.style.transform="translateX(0px)"
})

closebtn.addEventListener("click",function(){
    nav.style.transform="translateX(-420px)"
})


import { Cart } from "./script/cart.js"
import { gamevideo } from "./script/product.js"
var container_box=document.querySelector(".inner-container")
 let html;
gamevideo.forEach((gameFile)=>{

    html=`
    <div class="box">
    <a class="image-box" href="${gameFile.location}"><img class="games-image" src="${gameFile.image}" width="100" height="100"><p class="para">${gameFile.name}</p></a>
    
                 <div class="name">
                  
                  <p style="color:green; text-align:end;">${gameFile.rate}</p>
                </div>
        
        <div class="buying-box">
        <a href="" class="buy">BUY</a>
        <button class="cart-button" data-product-id="${gameFile.id}" >CART</button>
        </div>
    </div>
            </div>
               
            `

            container_box.innerHTML+=html
}) 


var quantity;
var cart_box=document.querySelector(".cart-count")
var cart_btn=document.querySelectorAll(".cart-button")
let matchingitem;
cart_btn.forEach((cart_button)=>{
    cart_button.addEventListener("click",function(){
      
        Cart.forEach((crt)=>{
            if(crt.productid===cart_button.dataset.productId){
                matchingitem=crt
            }
        })

if(matchingitem){
    matchingitem.quantity+=1
}else{
        Cart.push({
            productid:cart_button.dataset.productId,
            quantity:1
        })
    }
        
        let totalQuntity=0;
        Cart.forEach((quntities)=>{
        totalQuntity+=quntities.quantity
           

        })
         cart_box.innerHTML=totalQuntity
})



})