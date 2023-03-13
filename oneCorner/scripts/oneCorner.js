"use strict";

const date = new Date().getFullYear();
const theYear = document.querySelector("#year");
theYear.textContent = date; 

const button = document.querySelector(".mobile-nav");
const nav = document.querySelector(".header");

button.addEventListener("click", ()=> {
    const isOpen = button.getAttribute("aria-expanded");
    const mainNav = nav.getAttribute("data-visible");
    if (isOpen === "false" && mainNav === "false") {
        button.setAttribute("aria-expanded", true);
        nav.setAttribute("data-visible", true);
    }else {
        button.setAttribute("aria-expanded", false);
        nav.setAttribute("data-visible", false);
    }
})

const cta3dBox = document.querySelector(".cta-3d-effect");
document.querySelector(".cta").addEventListener("mousemove", (e) => {
    rotateCTA(e, cta3dBox);
})

function rotateCTA(event, element) {
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y);
    const midWidth = window.innerWidth / 2;
    const midHeight = window.innerHeight / 2;

    const offsetX = ((x - midWidth) / midWidth) * 45;
    const offsetY = ((y - midHeight) / midHeight) * 45;

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}

const hero = document.querySelector(".hero-section");
const observer = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky-nav")
    }
    if (ent.isIntersecting) {
        document.body.classList.remove("sticky-nav")
    }
}, 
{
    root: null,
    threshold: 0
});
observer.observe(hero)

