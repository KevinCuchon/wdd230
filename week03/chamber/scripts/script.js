document.addEventListener("DOMContentLoaded", function() {

    if (!localStorage.getItem("lastVisit")) {
        document.getElementById("message").innerText = "Welcome! Let us know if you have any questions.";
    } else {

        const lastVisit = new Date(parseInt(localStorage.getItem("lastVisit")));
        const currentDate = new Date();
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        

        if (daysSinceLastVisit === 0) {
            document.getElementById("message").innerText = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            document.getElementById("message").innerText = "You last visited 1 day ago.";
        } else {
            document.getElementById("message").innerText = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }


    localStorage.setItem("lastVisit", Date.now());
});

const imgList = document.querySelectorAll('img');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

const observer = new IntersectionObserver(intersection, options);

function intersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
}

imgList.forEach(img => {
    observer.observe(img);
});




document.getElementById('lastModified').textContent = document.lastModified;