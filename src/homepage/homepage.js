function homepageContent() {
    const content = document.getElementById("content");

    // Setting central homepage blurb
    const homepageBlurb = document.createElement("div");
    homepageBlurb.setAttribute('id', 'homepage__blurb');
    content.appendChild(homepageBlurb);

    // Setting title
    const homepageTitle = document.createElement("h1");
    homepageTitle.textContent = "Maison de la Côte";
    homepageBlurb.appendChild(homepageTitle);

    // Setting restaurant blurb
    const homepageBlurbText = document.createElement("p");
    homepageBlurbText.textContent = `In the heart of Paris, Maison de la Côte is a contemporary French fine-dining restaurant, led by Chef Pierre Leclerc. The menu is inspired by the rich culinary traditions of France, and the restaurant's ethos is rooted in sustainability and seasonality.`;
    homepageBlurb.appendChild(homepageBlurbText);

    // Setting restaurant home cards container
    const restaurantAccentsContainer = document.createElement('div');
    restaurantAccentsContainer.classList.add("restaurant__accents", "grid");
    content.appendChild(restaurantAccentsContainer);

    // Set restaurant homepage feature cards
    [
        { id: 'bar__image__container', title: 'Le Bar', text: `The bar serves a selection of classic and innovative cocktails, as well as a variety of spirits, wines, and beers.` },
        { id: 'dining__room__image__container', title: 'La Salle à Manger', text: `The dining room offers an elegant, comfortable space for guests to enjoy a meal, with a view of the open kitchen.` },
        { id: 'terrace__image__container', title: 'La Terrasse', text: `The terrace provides an outdoor dining experience, offering a view of the Eiffel Tower and the surrounding neighborhood.` }
    ].forEach(item => {
        const homepageFeatureCard = document.createElement('div');
        homepageFeatureCard.classList.add('homepage__card');
        restaurantAccentsContainer.appendChild(homepageFeatureCard);

        const homepageCardImageContainer = document.createElement('div');
        homepageCardImageContainer.setAttribute('id', item.id);
        homepageCardImageContainer.classList.add('homepage__card__section__image');
        homepageFeatureCard.appendChild(homepageCardImageContainer);

        const firstParagraph = document.createElement('p');
        firstParagraph.classList.add('section__subtitle');
        firstParagraph.textContent = item.title;
        homepageFeatureCard.appendChild(firstParagraph);

        const secondParagraph = document.createElement('p');
        secondParagraph.textContent = item.text;
        homepageFeatureCard.appendChild(secondParagraph);
    });
}

export default homepageContent;