import projectsData from './projectsData.js';


  
// Get the page container element
const container = document.getElementById("cards");
  
// create a single card element
function createCard(cardData) {
    const card = document.createElement("article");
    card.classList.add("projects-card");
  
    const img = document.createElement("img");
    img.classList.add("img-projects");
    img.src = cardData.imgSrc;
    img.alt = cardData.title;
  
    const cardDescription = document.createElement("aside");
    cardDescription.classList.add("projects-description");
  
    const header = document.createElement("h4");
    header.classList.add("card-header");
    header.textContent = cardData.title;
  
    const iconsUl = document.createElement("ul");
    iconsUl.classList.add("project-icon");
  
    cardData.icons.forEach((iconClass) => {
        const iconLi = document.createElement("li");
        iconLi.classList.add("icon");
  
        const icon = document.createElement("i");
        icon.classList.add("fa-brands", iconClass);

        iconLi.appendChild(icon);


  
        iconsUl.appendChild(iconLi);
    });
  
    const p = document.createElement("p");
    p.classList.add("card-text");
    p.textContent = cardData.description;
  
    const githubLink = createLink("repository-link", cardData.githubLink, "GitHub", "fa-github");
    const liveViewLink = createLink("repository-link", cardData.liveViewLink, "Live view", "fa-github");
  
    cardDescription.appendChild(header);
    cardDescription.appendChild(iconsUl);
    cardDescription.appendChild(p);
    cardDescription.appendChild(githubLink);
    cardDescription.appendChild(liveViewLink);
  
    card.appendChild(img);
    card.appendChild(cardDescription);
    container.appendChild(card); 
  
    return card;
}
  
  // create a link element
function createLink(className, href, text, iconClass) {
    const link = document.createElement("a");
    link.classList.add(className);
    link.href = href;
  
    const icon = document.createElement("i");
    icon.classList.add("fa-brands", iconClass);
  
    const span = document.createElement("span");
    span.classList.add("icon-name");
    span.textContent = text;
  
    link.appendChild(icon);
    link.appendChild(span);
  
    return link;
}
  
// create and append all cards
function createCards() {
    projectsData.forEach((project) => {
        createCard(project); 
    });
}
  
// Call
createCards();





  


  










 
  



   
    








  
  