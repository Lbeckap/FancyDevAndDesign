const hamburger = document.querySelector("#hamburger");

const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");

const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");

// when hamburger menu is clicked, the class list item "hidden" is toggled. This comes from the function menu classlist toggle
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    bar1.classList.toggle("bg-indigo-900");
    bar2.classList.toggle("bg-indigo-900");
    bar3.classList.toggle("bg-indigo-900");
});

hLinks.forEach(link =>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden");
    });
});

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
});