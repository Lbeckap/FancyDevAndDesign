const hamburger = document.querySelector("#hamburger");

const menu = document.querySelector("#menu");

const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");

// when hamburger menu is clicked, the class list item "hidden" is toggled. This comes from the function menu classlist toggle
hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    bar1.classList.toggle("bg-white");
    bar2.classList.toggle("bg-white");
    bar3.classList.toggle("bg-white");
});