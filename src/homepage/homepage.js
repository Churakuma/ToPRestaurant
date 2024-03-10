// Setting central homepage blurb

function homepageContent() {
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
        
        switch(i) {
            case 0:
                homepageCardImageContainer.setAttribute('id', 'bar__image__container');
                break;
            case 1:
                homepageCardImageContainer.setAttribute('id','dining__room__image__container');
                break;
            case 2:
                homepageCardImageContainer.setAttribute('id', 'terrace__image__container');
                break;
            default:
                null;
        }

        homepageFeatureCard.appendChild(homepageCardImageContainer);
        for(var x = 0; x < 2; x++) {
            const homepageCardTextElement = document.createElement('p');
            if(x == 0) {
                homepageCardTextElement.classList.add('section__subtitle');
            }
            homepageFeatureCard.appendChild(homepageCardTextElement);
        }
        
    }
    
};

export default homepageContent;