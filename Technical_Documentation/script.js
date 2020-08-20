let a = document.querySelectorAll("a")
let hamburger = document.getElementById("hamburger_container")
let navbar = document.getElementById("navbar");
let ul= navbar.querySelector("ul");
let main = document.querySelector("main");

a.forEach(function(section) {
  let navlink = section.classList.contains("navlink");
  if(navlink){
      section.classList.add("nav_color");
  }
});

function hamburgerIcon() {
  hamburger.classList.toggle("change");
  ul.classList.toggle("responsive_nav");
  main.classList.toggle("main_toggle");
}

hamburger.addEventListener("click", hamburgerIcon);
