// const navLink = document.querySelectorAll('.nav-link');
// const windowPathname = window.location.pathname;

// navLink.forEach(navLink => {
//     if (navLink.href) {
//         if (navLink.href.startsWith("mailto:")) {
           
//             return;
//         }

//         if (navLink.getAttribute('href') === "#") {
            
//             if (windowPathname === '/index.html' && window.location.hash === "") {
//                 navLink.classList.add('active');
//                 console.log(navLink, 'active');
//             } else {
//                 navLink.classList.remove('active');
//                 console.log(navLink, 'remove');
//             }
//         } else {
           
//             try {
//                 const navLinkPathname = new URL(navLink.href).pathname;

//                 if (windowPathname === navLinkPathname) {
//                     navLink.classList.add('active');
//                     console.log(navLink, 'active');
//                 } else {
//                     navLink.classList.remove('active');
//                     console.log(navLink, 'remove');
//                 }
//             } catch (error) {
//                 console.error(`Invalid URL: ${navLink.href}`);
//             }
//         }
//     }
// });



// const navLink = document.querySelectorAll('.nav-link');
// const windowPathname = window.location.pathname;

// function markActiveLink(){
//     navLink.forEach(navLink => {
//         const a = window.location.href.includes(navLink.href)
//             console.log(a, window.location.fragment)
//                 if (a) {
//                     navLink.classList.add('active');
//                     console.log(navLink, 'active');
//                 } else {
//                     navLink.classList.remove('active');
//                     console.log(navLink, 'remove');
//                 }
//     });
// }

const navLink = document.querySelectorAll('.nav-link');
const currentPage = window.location.href;
const windowPathname = window.location.pathname;

console.log(currentPage);

navLink.forEach((link) => {
    console.log('WTF?');
    if (link.href == currentPage) {
        link.classList.add('active');
        console.log(link, 'active');
    } else {
        link.classList.remove('active')
        console.log(link, 'remove');
    }
})






  
  