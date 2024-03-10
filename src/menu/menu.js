function menuContent() {
    
    // Setting menu page title
    const menuPageTitle = document.createElement('h1');
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(menuPageTitle);
    var textNode = document.createTextNode('Menu');
    menuPageTitle.setAttribute('id', 'menu__title');
    menuPageTitle.appendChild(textNode);

    // Setting container for menu items
    const menuContainer = document.createElement('div');
    contentDiv.appendChild(menuContainer);
    menuContainer.classList.add('flex');
    menuContainer.classList.add('menu__container');

    // Set menu items
    [
        { id: 'CoqAuVin', name: 'Coq Au Vin', ingredients: 'Chicken, Red Wine, Bacon, Mushroos and Onion', price: '$18.50' },
        { id: 'Boeuf__Bourguignon', name: 'Boeuf Bourguignon', ingredients: 'Beef, Red Wine, Bacon, Carrots, Onion', price: '$21' },
        { id: 'Ratatouille', name: 'Ratatouille', ingredients: 'Eggplant, Zubcchini, Bell Peppers, Tomatoes, Onion', price: '$18' },
        { id: 'Bouillabaisse', name: 'Bouillabaisse', ingredients: 'Fish, Tomatoes, Onion, Garlic, Saffron', price: '$24.50' },
        { id: 'Salade__Nicoise', name: 'Salade Nicoise', ingredients: 'Lettuce, Tuna, Hard Boiled Eggs, Tomatoes, Green Beams', price: '$22'}
    ].forEach(item => {
        const menuItemCard = document.createElement('div');
        menuItemCard.classList.add('menu__item');
        menuContainer.appendChild(menuItemCard);
        menuItemCard.setAttribute('id', item.id);

        const menuItemName = document.createElement('p');
        menuItemCard.appendChild(menuItemName);
        menuItemName.classList.add('item__name');
        menuItemName.textContent = item.name;
        
        const menuPrice = document.createElement('span');
        menuItemCard.appendChild(menuPrice);
        menuPrice.classList.add('item__price');
        menuPrice.textContent = item.price;

        const menuItemIngredients = document.createElement('p');
        menuItemCard.appendChild(menuItemIngredients);
        menuItemIngredients.classList.add('ingredients');
        menuItemIngredients.textContent = item.ingredients;
    });
}

export default menuContent;