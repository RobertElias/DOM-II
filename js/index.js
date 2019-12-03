// Your code goes here

//Load on page EventListener
window.addEventListener('load', ()=>{
    alert("WELCOME ABOARD THE FUN BUS, HAVE A SEAT!!!");
})

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


// Mouse Click logo EvenListener
const logo = document.querySelector('.logo-heading');
document.addEventListener('click', ()=>{
    document.querySelector('.logo-heading').innerHTML = "Welcome to THE FUN BUS"
    document.querySelector('.logo-heading').style.color = "red";
})

// Body keydown Enter on keyboard EvenListener
let keydown = document.querySelector('body');
keydown.addEventListener('keydown', ()=> {
    keydown.style.color = "Maroon";
    keydown.style.backgroundColor = "Silver";
});


// Drag picture off with mouse .intro img

let dragImg = document.querySelector('.intro img');
dragImg.addEventListener('drag', ()=> {
    dragImg.style.display = "none";
})


//OnWheel through mouse zoon in or out for .footer class...
function zoom(event){
    event.preventDefault();
    if(event.deltaY < 0) {
        //Zoom in 
        scale *= event.deltaY * -2;
    }
    else {
        //Zoom out
        scale /= event.deltaY * 2;
    }
    // Restrict the scale
    scale = Math.min(Math.max(.7, scale), 1.5);
    // Apply the scale transform
    el.style.transform = `scale(${scale})`;
    }
    let scale = 1;
    const el = document.querySelector('.footer');
    document.onwheel = zoom;
    
// resizing .content-destination p element class with mouse over mouse out
const destinations = document.querySelector('.content-destination p');
destinations.addEventListener('mouseover', ()=>{
    destinations.style.transition = '1s';
    destinations.style.fontSize = '3.5rem';
    destinations.style.color = 'purple';
});

destinations.addEventListener('mouseout', ()=> {
    destinations.style.transition = '1s';
    destinations.style.fontSize = '1.5rem';
    destinations.style.color = 'gold';
})

// double click .btn EventListener
const btn = document.querySelectorAll('.content-pick .destination .btn')
    btn[0].addEventListener('dblclick', ()=>{
        document.location.href = 'https://images.unsplash.com/photo-1542332606-b2d1c52a6c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
    })
    btn[1].addEventListener("dblclick", ()=>{
        document.location.href = 'https://images.unsplash.com/photo-1553004377-62aa53df180f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80';
    });
    btn[2].addEventListener('dblclick', ()=>{
        document.location.href = 'https://images.unsplash.com/photo-1464122632645-bf5f12bbe202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80';
        event.preventDefault()
    
    });

//MouseEnter MouseLeave .card-img-top
const catImage = document.querySelector(".card-img-top")

catImage.addEventListener("mouseenter", () => {
  catImage.style.transform = "scale(1.2)";
  catImage.style.transition = "transform 0.3s"
})

catImage.addEventListener("mouseleave", () => {
  catImage.style.transform = "scale(1)"
})