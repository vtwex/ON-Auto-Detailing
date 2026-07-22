// ON Auto Detailing Website Scripts


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});





// Add header shadow when scrolling

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if(window.scrollY > 50) {

        header.style.boxShadow =
        "0 10px 40px rgba(0,0,0,0.8)";

    } else {

        header.style.boxShadow = "none";

    }

});






// Reveal sections when scrolling

const revealElements = document.querySelectorAll(
    ".feature, .price-card, .service-box, .owner"
);


const observer = new IntersectionObserver(entries => {


    entries.forEach(entry => {


        if(entry.isIntersecting) {


            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";


        }


    });


}, {

    threshold:0.15

});





revealElements.forEach(element => {


    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";


    element.style.transition =
    "all 0.8s ease";


    observer.observe(element);


});







// Dynamic booking message


const bookingButtons =
document.querySelectorAll(".button");


bookingButtons.forEach(button => {


    button.addEventListener("click", () => {


        console.log(
        "ON Auto Detailing booking started"
        );


    });


});







// Current year automatically updates footer


const year =
document.querySelector("footer p");


if(year) {

    year.innerHTML =
    `© ${new Date().getFullYear()} ON Auto Detailing. All Rights Reserved.`;

}
