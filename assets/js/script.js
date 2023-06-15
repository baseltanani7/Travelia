const preloader = document.querySelector("[data-preloader]");


$(window).on('load' ,function() {
    setTimeout(function(){
        $('.preloader').addClass('remove');
    }, 2000);
});


// add events on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for(let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


//Navbar toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");


const togglenav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggler, "click", togglenav);



//Header
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

