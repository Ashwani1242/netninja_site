document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const sidebarButton = document.getElementById('open-sidebar');

    sidebarButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
        mainContent.classList.toggle('-translate-x-40');
        setTimeout(() => {
        }, 200);
    });

});
