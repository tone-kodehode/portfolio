const currentPage = window.location.href;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    if (link.href === currentPage) {
        link.classList.add('active-link'); 
    } else {
        link.classList.remove('active-link'); 
    }
});