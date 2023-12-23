function openMobileMenuPopup() {
    document.getElementById('nav-mobile-menu-popup').style.display = 'flex';
    document.getElementById('nav-mobile-menu').style.opacity = '0';
    document.getElementById('nav-mobile-menu').style.transition = '0ms';
}
function closeMobileMenuPopup() {
    document.getElementById('nav-mobile-menu-popup').style.display = 'none';
    document.getElementById('nav-mobile-menu').style.opacity = '1';
    document.getElementById('nav-mobile-menu').style.transition = '200ms';
}