function homepageContent() {

    // Setting central homepage blurb
    const homepageBlurb = document.createElement("div");
    document.getElementById("content").appendChild(homepageBlurb);
    homepageBlurb.setAttribute('id', 'homepage__blurb');

    // Setting title
    const homepageTitle = document.createElement("h1");
    document.getElementById("homepage__blurb").appendChild(homepageTitle);
    var textNode = document.createTextNode("Maison de la Côte");
    homepageTitle.appendChild(textNode);

    // Setting restaurant blurb
    const homepageBlurbText = document.createElement("p");
    document.getElementById("homepage__blurb").appendChild(homepageBlurbText);
    textNode = document.createTextNode(
        `In the heart of Paris, Maison de la Côte is a contemporary French fine-dining restaurant, led by Chef Pierre 
        Leclerc. The menu is inspired by the rich culinary traditions of France, and the restaurant's ethos is rooted 
        in sustainability and seasonality.`
        );
        homepageBlurbText.appendChild(textNode);

    // Setting restaurant home cards container
    const restaurantAccentsContainer = document.createElement('div');
    document.getElementById("content").appendChild(restaurantAccentsContainer);
    restaurantAccentsContainer.classList.add("restaurant__accents", "grid");

    // Set restaurant homepage feature cards
    for(var i = 0; i < 3; i++) {
        const homepageFeatureCard = document.createElement('div');
        homepageFeatureCard.classList.add('homepage__card');
        restaurantAccentsContainer.appendChild(homepageFeatureCard);

        // Set empty content tags inside homepage cards
        const homepageCardImageContainer = document.createElement('div');
        homepageCardImageContainer.classList.add('homepage__card__section__image');

        homepageFeatureCard.appendChild(homepageCardImageContainer);
        for(var x = 0; x < 2; x++) {
            const homepageCardTextElement = document.createElement('p');
            if(x == 0) {
                homepageCardTextElement.classList.add('section__subtitle');
            }
            homepageFeatureCard.appendChild(homepageCardTextElement);
        }

        switch(i) {
            case 0:
                homepageCardImageContainer.setAttribute('id', 'bar__image__container');
                var paragraphs = homepageFeatureCard.getElementsByTagName("p");

                if(paragraphs.length === 2) {
                    var firstParagraph = paragraphs[0];
                    firstParagraph.textContent += 'Le Bar';
                    var secondParagraph = paragraphs[1];
                    secondParagraph.textContent += `
                    The bar serves a selection of classic and innovative cocktails,
                    as well as a variety of spirits, wines and beers.
                    `
                }
                break;
            case 1:
                homepageCardImageContainer.setAttribute('id','dining__room__image__container');
                var paragraphs = homepageFeatureCard.getElementsByTagName("p");

                if(paragraphs.length === 2) {
                    var firstParagraph = paragraphs[0];
                    firstParagraph.textContent += 'La Salle à Manger';
                    var secondParagraph = paragraphs[1];
                    secondParagraph.textContent += `
                    The dining room offers an elegant, comfortable space for guests to enjoy a meal, with a view of the
                    open kitchen.
                    `
                }
                break;
            case 2:
                homepageCardImageContainer.setAttribute('id', 'terrace__image__container');
                var paragraphs = homepageFeatureCard.getElementsByTagName("p");
                
                if(paragraphs.length === 2) {
                    var firstParagraph = paragraphs[0];
                    firstParagraph.textContent += 'La Terrasse';
                    var secondParagraph = paragraphs[1];
                    secondParagraph.textContent += `
                    The terrace provides an outdoor dining experience, offering a view of the Eiffel Tower and the 
                    surrounding neighbourhood.
                    `
                }
                break;
            default:
                null;
        }
    }
};

export default homepageContent;