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