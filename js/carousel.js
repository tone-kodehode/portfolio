const cardsContainer = document.getElementById('cards');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
let currentIndex = 0;

rightButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > cardsContainer.childElementCount - 1) {
        currentIndex = 0;
    }
    updateCarousel();
});

leftButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = cardsContainer.childElementCount - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const cardWidth = cardsContainer.firstElementChild.clientWidth;
    cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// .carousel-nav {
//     display: flex;
//     justify-content: space-around;
//     text-align: center;
//     padding-bottom: 20px;
//     font-size: 25px;
//     cursor: pointer;
// }

// .fa-chevron-right:hover {
//     opacity: 0.7;
// }

// .fa-chevron-left:hover {
//     opacity: 0.7;
// }


// .carousel {
//     box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);
//     overflow: hidden;
//     width: 500px;
//     margin: 0 auto;
// }


