const navLink = document.querySelectorAll('.nav-link')
const windowPathname = window.location.pathname;

navLink.forEach(navLink => {
    const navLinkPathname = URL(navLink.href).pathname;

    if ((windowPathname === navLinkPathname) || (windowPathname === '#index.html' && "#")) {
        navLink.classList.add('active')
    }
})


