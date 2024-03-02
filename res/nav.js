$(document).ready(function() {
    //select nav
    const nav = $('nav');


    //create all nav elements
    //logo link
    const navLogo = $('<a>');
    navLogo.attr('href', '/index.html');
    navLogo.addClass('header-logo');

    //logo image
    const navLogoImg = $('<img>');
    navLogoImg.attr('src', '/res/Noah-Pencil-Logo.svg');
    navLogoImg.attr('alt', 'Noah Scott Braun Pencil Logo');

    //assemble nav
    //logo
    navLogo.append(navLogoImg);
    nav.append(navLogo);
});

/* Original HTML
    <img src="/res/Noah-Pencil-Logo-White.svg" alt="N Pencil Logo"></img>
    <div class="footer-contact-info-container">
        <a class="button-primary button-small" href="mailto:imaginoah@icloud.com?subject=Message%20From%20A%20Wonderful%20Person">
            <span class="material-symbols-outlined button-icon-start">email</span>
            imaginoah@icloud.com
        </a>
        <a class="button-primary button-small">
            <span class="material-symbols-outlined button-icon-start">call</span>
            <span>314.</span><span>498.</span><span>3917</span>
        </a>
    </div>
    <p class="footer-name">Designed and built by Noah Scott Braun</p>
*/