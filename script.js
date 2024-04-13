document.addEventListener('DOMContentLoaded', function () {
    const open_btn = document.querySelector('.mobile-menu-button-open');
    const close_btn = document.querySelector('.mobile-menu-button-close');
    const menu = document.querySelector('.mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const openSidebarButton = document.getElementById('open-sidebar');
    const navbar = document.getElementById('desktop-navbar');
    const scrollToTopButton = document.getElementById('scroll-to-top');

    openSidebarButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
        mainContent.classList.toggle('-translate-x-40');
        setTimeout(() => {
          }, 200);
    });

    open_btn.addEventListener('click', () => {
        menu.classList.remove('hidden');
    });

    close_btn.addEventListener('click', () => {
        menu.classList.add('hidden');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1000) {
            navbar.classList.add('bg-gray-950');
        } else {
            navbar.classList.remove('bg-gray-950');
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1000) {
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
        }
    });

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTopButton.addEventListener("click", backToTop);
});
