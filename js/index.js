const navLink = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLink.forEach(navLink => {
    if (navLink.href) {
        if (navLink.href.startsWith("mailto:")) {
           
            return;
        }

        if (navLink.getAttribute('href') === "#") {
            
            if (windowPathname === '/index.html' && window.location.hash === "") {
                navLink.classList.add('active');
                console.log(navLink, 'active');
            } else {
                navLink.classList.remove('active');
                console.log(navLink, 'remove');
            }
        } else {
           
            try {
                const navLinkPathname = new URL(navLink.href).pathname;

                if (windowPathname === navLinkPathname) {
                    navLink.classList.add('active');
                    console.log(navLink, 'active');
                } else {
                    navLink.classList.remove('active');
                    console.log(navLink, 'remove');
                }
            } catch (error) {
                console.error(`Invalid URL: ${navLink.href}`);
            }
        }
    }
});



  
  