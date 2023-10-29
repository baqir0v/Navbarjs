// Navbar Part
let body = document.querySelector("body")
let navbar = document.getElementById("navbar")
let navbutton = document.getElementById("navbutton")
let navmenu = document.getElementById("navmenu")
const icon = document.getElementById("icon");

let accordions = document.getElementsByClassName("accordions")
let panels = document.getElementsByClassName("headpanel")
navbutton.addEventListener("click",function(){
    navmenu.classList.toggle("active")

    if (navmenu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times");
        document.getElementById("arrowdown").style.opacity = "1"
    } else {
        icon.classList.replace("fa-times", "fa-bars");
        document.getElementById("arrowdown").style.opacity = "0"
    }

})
// Accordion Part
let i
let openedAccordion = null  //halhazirda aciq accordionu gosterir
const accordion1 = document.getElementById("accordion1")
const accordion2 = document.getElementById("accordion2")
const accordion3 = document.getElementById("accordion3")

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click",function(){
        const panel = panels[i]
        panel.classList.toggle("active")

        if (openedAccordion && openedAccordion !== panels[i]) {
            openedAccordion.style.display = "none"
            openedAccordion.parentElement.style.marginBottom = "0"
        }

        if (panel.style.display === "none" || panel.style.display === "") {
            panel.style.display = "block"
            this.style.marginBottom = "8.5vh";
            openedAccordion = panel
        }
        else{
            panel.style.display = "none"
            this.style.marginBottom = "0px";
            openedAccordion = null
        }
    })
}