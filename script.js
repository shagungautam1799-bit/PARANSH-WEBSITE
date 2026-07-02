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