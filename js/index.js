// const cardSlider = document.querySelector(".card-slider");
// const cardsContainer = document.querySelector("#cards");

// const leftButton = document.getElementById("left");
// const rightButton = document.getElementById("right");

// const cardWidth = cardsContainer.querySelector(".card-row").offsetWidth;

// let currentCardIndex = 0;

// function slideCards() {
//     cardsContainer.style.transform = `translateX(-${cardWidth * currentCardIndex}px)`;  
// }

// function nextCard() {
//     currentCardIndex++;   
//     if (currentCardIndex >= cardsContainer.children.length) {
//         currentCardIndex = 0;
//     }
//     slideCards();
// }

// function prevCard() {
//     currentCardIndex--;
//     if (currentCardIndex < 0) {
//         currentCardIndex = cardsContainer.children.length - 1;
//     }
//     slideCards();
// }

// rightButton.addEventListener("click", nextCard);
// leftButton.addEventListener("click", prevCard);




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

// const navLink = document.querySelectorAll('.nav-link');
// const currentPage = window.location.href;
// const windowPathname = window.location.pathname;

// console.log(currentPage);

// navLink.forEach((link) => {
//     console.log('WTF?');
//     if (link.href == currentPage) {
//         link.classList.add('active');
//         console.log(link, 'active');
//     } else {
//         link.classList.remove('active')
//         console.log(link, 'remove');
//     }
// })




// const navLink = document.querySelectorAll('.nav-link')
// const location = window.location.pathname;

// function locationHashChanged() {
//     if (navLink.getAttribute('href') === "#home") {
//         navLink.classList.add('active')
//     } else {
//         navLink.classList.remove('active')
//     }
//   }
  
//   window.addEventListener("hashchange", locationHashChanged);




// const navLink = document.querySelectorAll(".nav-link");

// window.addEventListener("hashchange", () => {
//   const currentLocation = window.location.hash;
//   navLink.forEach((navLink) => {
//     if (navLink.getAttribute("href") === currentLocation) {
//       navLink.classList.add("active");
//     } else {
//       navLink.classList.remove("active");
//     }
//   });
// });


// const navLink = document.querySelectorAll(".nav-link");

// window.addEventListener("hashchange", () => {
//   const currentLocation = window.location.hash;
//   navLink.forEach((navLink) => {
//     if (navLink.getAttribute("href") === currentLocation) {
//       navLink.classList.add("active");
//     } else {
//       navLink.classList.remove("active");
//     }
//   });
// });





 
  



   
    








  
  