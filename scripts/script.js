const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");
const navMenu = document.getElementById("nav-menu");

// Todo: add navigation menu opening
openNav.addEventListener("click", () => {
    console.log("clicked!");
    navMenu.style.animationPlayState = "running";
    
})

// Todo: play animation in reverse
closeNav.addEventListener("click", () => {
    console.log("clicked!");
})