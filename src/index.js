const iconToggle = document.querySelector(".toggle");
const menuToggle = document.querySelector(".header__nav");

iconToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    iconToggle.classList.toggle('active')
});