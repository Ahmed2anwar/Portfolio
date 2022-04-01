// navlink active
let navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// scroll recels animation
let sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true,
});


// scroll home
sr.reveal('.home .item',{delay:200})
sr.reveal('.icons',{delay:200})
sr.reveal('img',{delay:200})

// scroll about
sr.reveal('.about h2',{delay:200})
sr.reveal('.about p',{delay:400})

// Scroll skills
sr.reveal('.skills',{delay:200})
sr.reveal('.skills h2',{delay:400})
sr.reveal('.skills p',{delay:600})
sr.reveal('.skills  .prog',{delay:600})

// scroll works
sr.reveal('.works',{delay:200})
sr.reveal('.works h2',{delay:400})


//scroll contact
sr.reveal('.contact',{delay:200})
sr.reveal('.contact h2',{delay:400})
sr.reveal('.contact input',{delay:600})
sr.reveal('.contact textarea',{delay:800})
sr.reveal('.contact  a',{delay:900})


// window screen
$(document).ready(function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
  