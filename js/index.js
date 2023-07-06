const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const hamburger = document.querySelector(".nav-toggle")

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // hamburger.style.transform = 'translateX(-35em)';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        // hamburger.style.transform = 'translateX(33em)';
    })
})

