const navLink = document.querySelectorAll('.nav-link')
const windowPathname = window.location.pathname;

navLink.forEach(navLink => {
    const navLinkPathname = new URL(navLink.href).pathname;

    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLink.getAttribute('href') === "#")) {
        navLink.classList.add('active')
    }
})


