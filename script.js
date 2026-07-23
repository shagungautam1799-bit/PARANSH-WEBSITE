const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    observer.observe(counter);

});
// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}
// Back To Top Button

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===========================
// PRODUCT IMAGE GALLERY
// ===========================

const mainProductImage = document.getElementById("mainProductImage");
const thumbnails = document.querySelectorAll(".thumbnail");

if (mainProductImage && thumbnails.length > 0) {

    thumbnails.forEach((thumb) => {

        thumb.addEventListener("click", () => {

            // Change Main Image
            mainProductImage.src = thumb.src;

            // Remove Active Class
            thumbnails.forEach((item) => {
                item.classList.remove("active");
            });

            // Add Active Class
            thumb.classList.add("active");

        });

    });

}