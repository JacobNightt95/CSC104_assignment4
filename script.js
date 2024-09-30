// JavaScript to toggle the navigation menu on mobile devices
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});