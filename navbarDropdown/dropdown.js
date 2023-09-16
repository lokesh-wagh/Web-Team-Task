const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelectorAll('.bar');
let isOpen = false;
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (isOpen) {
        bars[0].style.transform = 'rotate(0) translate(0)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0) translate(0)';
    } else {
        bars[0].style.transform = 'rotate(-45deg) translate(-6px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-6px, -6px)';
    }
    isOpen = !isOpen;
});

