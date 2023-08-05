import iconsData from './iconsData.js';

// generate the icons
function createIcon(iconsData) {
    const li = document.createElement("li");
    li.classList.add("icon");
  
    if (iconsData.link) {
      const a = document.createElement("a");
      a.href = iconsData.link;
      a.appendChild(createIconElement(iconsData.iconClass));
      const span = document.createElement("span");
      span.classList.add("icon-name");
      span.textContent = iconsData.name;
      a.appendChild(span);
      li.appendChild(a);
    } else {
      const icon = createIconElement(iconsData.iconClass);
      li.appendChild(icon);
      const span = document.createElement("span");
      span.classList.add("icon-name");
      span.textContent = iconsData.name;
      li.appendChild(span);
    }
  
    return li;
}
  
function createIconElement(iconClass) {
    const icon = document.createElement("i");
    icon.classList.add(iconClass);
    return icon;
}

// create icons  
const iconsUl = document.createElement("ul");
iconsUl.classList.add("icon-list");
  
iconDataArray.forEach((iconData) => {
    const iconLi = createIcon(iconData);
    iconsUl.appendChild(iconLi);
});
  
const iconContainer = document.createElement("aside");
iconContainer.classList.add("project-icon");
iconContainer.appendChild(iconsUl);
  