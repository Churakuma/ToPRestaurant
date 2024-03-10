import './style.css'
import homepageContent from './homepage/homepage';
import menuContent from './menu/menu';
import contactContent from './contact/contact';


const homeButton = document.getElementById('home__button');
const menuButton = document.getElementById('menu__button');
const contactButton = document.getElementById('contact__button');

homeButton.addEventListener('click', onHomeClick);
menuButton.addEventListener('click', onMenuClick);
contactButton.addEventListener('click', onContactClick);

// homepageContent();
contactContent();

function clearContent() {
    const contentElement = document.getElementById('content');

    // Loop through each child element and remove it
    while (contentElement.firstChild) {
        contentElement.removeChild(contentElement.firstChild);
    }
}

function onHomeClick() {
    clearContent();
    homepageContent();
}

function onMenuClick() {
    clearContent();
    menuContent();
}

function onContactClick() {
    clearContent();
    contactContent();
}