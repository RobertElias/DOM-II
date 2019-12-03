// Your code goes here

//Mouse Over on .nav class

const nav = document.querySelector('nav');
nav.addEventListener("mouseover", ()=>{
    nav.style.transition = "2.5s";
    nav.style.backgroundColor = "papawhip"; 
})