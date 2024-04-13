document.addEventListener('DOMContentLoaded', function () {
    const open_btn = document.querySelector('.mobile-menu-button-open');
    const close_btn = document.querySelector('.mobile-menu-button-close');
    const menu = document.querySelector('.mobile-menu');
    const navbar = document.getElementById('desktop-navbar');
    const scrollToTopButton = document.getElementById('scroll-to-top');

    open_btn.addEventListener('click', () => {
        menu.classList.remove('hidden');
    });

    close_btn.addEventListener('click', () => {
        menu.classList.add('hidden');
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1000) {
            scrollToTopButton.classList.remove('hidden');
            navbar.classList.add('bg-gray-950');
        } else {
            scrollToTopButton.classList.add('hidden');
            navbar.classList.remove('bg-gray-950');
        }
    });

});
