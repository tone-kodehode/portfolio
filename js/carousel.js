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
//     box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.3);
//     overflow: hidden;
//     width: 500px;
//     margin: 0 auto;
// }


{/* <article class="article">
<h1 class="header">Projects</h1>
<div class="carousel">
    <div class="cards" id="cards"></div>
    <div class="carousel-nav">
        <i class="fa-solid fa-chevron-left" id="left"></i>
        <i class="fa-solid fa-chevron-right" id="right"></i>
    </div>
</div>      
</article> */}