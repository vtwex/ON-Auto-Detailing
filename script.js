// ==============================
// LOADING SCREEN
// ==============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.6s";
    }, 1000);
});

// ==============================
// SCROLL PROGRESS BAR
// ==============================

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = progress + "%";
});

// ==============================
// STICKY NAVBAR EFFECT
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "0 0 20px rgba(13,110,253,.3)";
    } else {
        header.style.background = "rgba(0,0,0,.55)";
        header.style.boxShadow = "none";
    }
});

// ==============================
// MOBILE MENU TOGGLE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "80px";
        navMenu.style.right = "20px";
        navMenu.style.background = "#111";
        navMenu.style.padding = "20px";
        navMenu.style.borderRadius = "15px";
        navMenu.style.gap = "20px";
        navMenu.style.boxShadow = "0 0 20px rgba(13,110,253,.5)";
    } else {
        navMenu.style.display = "none";
    }
});

// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".card, .review, .about-box, .gallery img, .contact-box div"
);

function revealOnScroll() {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==============================
// GALLERY LIGHTBOX
// ==============================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,.9)";
        lightbox.style.display = "flex";
        lightbox.style.justifyContent = "center";
        lightbox.style.alignItems = "center";
        lightbox.style.zIndex = "100000";
        lightbox.style.cursor = "pointer";

        const lightboxImg = document.createElement("img");
        lightboxImg.src = img.src;
        lightboxImg.style.maxWidth = "90%";
        lightboxImg.style.maxHeight = "90%";
        lightboxImg.style.borderRadius = "20px";
        lightboxImg.style.boxShadow = "0 0 30px #0d6efd";

        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });
    });
});

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.4)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple 0.6s linear";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation dynamically
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// ==============================
// CONSOLE BRANDING 😎
// ==============================

console.log("%cON AUTO DETAILING", "color:#0d6efd;font-size:24px;font-weight:bold;");
console.log("%cCleaner Car. Better Drive.", "color:white;font-size:14px;");
