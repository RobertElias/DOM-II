// Your code goes here

//Mouse Over on .nav class

const nav = document.querySelector('nav');
nav.addEventListener("mouseover", ()=>{
    nav.style.transition = "2.5s";
    nav.style.backgroundColor = "blue"; 
})

nav.addEventListener("mouseout", ()=>{
    nav.style.transition = "1.2s";
    nav.style.backgroundColor = "White";
})

//