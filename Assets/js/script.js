const mobileMenuButton = document.getElementById('mobile-menu');
const navigationList = document.getElementById('nav-list');

if (mobileMenuButton && navigationList) {
    mobileMenuButton.addEventListener('click', () => {
        navigationList.classList.toggle('show');
    });
}
