import './style.css'
import homepageContent from './homepage/homepage';

const homeButton = document.getElementById('home__button');
const menuButton = document.getElementById('menu__button');
const aboutButton = document.getElementById('about__button');

homeButton.addEventListener('click', onHomeClick);

homepageContent();

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