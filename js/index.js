// Your code goes here

//Mouse Over on .nav class

const nav = document.querySelector('nav');
nav.addEventListener("mouseover", ()=>{
    nav.style.transition = "2.5s";
    nav.style.backgroundColor = "blue"; 
})

//Mouse out
nav.addEventListener("mouseout", ()=>{
    nav.style.transition = "1.2s";
    nav.style.backgroundColor = "White";
})

// Body keydown Enter on keyboard EvenListener
let keydown = document.querySelector('body');
keydown.addEventListener('keydown', ()=> {
    keydown.style.color = "Maroon";
    keydown.style.backgroundColor = "Silver";
});

// Mouse Click logo EvenListener
const logo = document.querySelector('.logo-heading');
document.addEventListener('click', ()=>{
    document.querySelector('.logo-heading').innerHTML = "Welcome to THE FUN BUS"
    document.querySelector('.logo-heading').style.color = "red";
})

// Drag picture off with mouse .intro img

let dragImg = document.querySelector('.intro img');
dragImg.addEventListener('drag', ()=> {
    dragImg.style.display = "none";
})

//Load on page EventListener
window.addEventListener('load', ()=>{
    alert("WELCOME ABOARD THE FUN BUS, HAVE A SEAT!!!");
})