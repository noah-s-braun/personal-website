$(document).ready(function() {
    //select footer
    const footer = $('footer');


    //create all footer elements
    //logo
    const footerLogo = $('<img>');
    footerLogo.attr('src', '/res/Noah-Pencil-Logo-White.svg');
    footerLogo.attr('alt', 'Noah Scott Braun Pencil Logo');

    //button container
    const footerContactContainer = $('<div>');
    footerContactContainer.addClass('footer-contact-info-container');

    //buttons
    const footerButton = [{
        icon: 'email',
        text: 'imaginoah@icloud.com',
        href: 'mailto:imaginoah@icloud.com?subject=Message%20From%20A%20Wonderful%20Person'
    }];

    for(let i = 0; i < footerButton.length; i ++) {
        const {icon, text, href} = footerButton[i];

        //assemble icon
        const iconSpan = $('<span>');
        iconSpan.addClass(['material-symbols-outlined', 'button-icon-start']);
        iconSpan.append(icon);

        //assemble button
        footerButton[i] = $('<a>');
        footerButton[i].addClass(['button-secondary', 'button-small', 'brand']);
        footerButton[i].attr('href', href);
        footerButton[i].append(iconSpan);
        footerButton[i].append(text);
    }

    //byline
    const footerByline = $('<p>');
    footerByline.append('Designed and built by Noah Scott Braun');
    footerByline.addClass('footer-name');


    //assemble footer
    footer.append(footerLogo);
    footer.append(footerContactContainer);
    for(let i = 0; i < footerButton.length; i++) {
        footerContactContainer.append(footerButton[i]);
    }
    footer.append(footerByline);
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
