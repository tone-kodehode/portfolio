import iconsData from './iconsData.js';

// generate the icons
function createIcon(iconData) {
    const li = document.createElement("li");
    li.classList.add("icon");

    if (iconData.link) {
        const a = document.createElement("a");
        a.href = iconData.link;
        a.appendChild(createIconElement(iconData.iconClass));
        const span = document.createElement("span");
        span.classList.add("icon-name");
        span.textContent = iconData.name;
        a.appendChild(span);
        li.appendChild(a);
    } else {
        const icon = createIconElement(iconData.iconClass);
        li.appendChild(icon);
        const span = document.createElement("span");
        span.classList.add("icon-name");
        span.textContent = iconData.name;
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

iconsData.forEach((iconData) => {
    const iconLi = createIcon(iconData);
    iconsUl.appendChild(iconLi);
});

const iconContainer = document.createElement("aside");
iconContainer.classList.add("project-icon");
iconContainer.appendChild(iconsUl);

  