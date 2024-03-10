function menuContent() {
    
    // Setting menu page title
    const menuPageTitle = document.createElement('h1');
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(menuPageTitle);
    var textNode = document.createTextNode('Menu');
    menuPageTitle.appendChild(textNode);

    // Setting container for menu items
    const menuContainer = document.createElement('div');
    contentDiv.appendChild(menuContainer);
    menuContainer.classList.add('flex');
    menuContainer.setAttribute('id', 'menu__container');

    

    // Create menu items
    for(var i = 0; i < 5; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu__item');
        menuContainer.appendChild(menuItem);

        const itemName = document.createElement('p');
        menuItem.appendChild(itemName);
    }
    const menuItems = menuContainer.getElementsByTagName('div');

    // Set id's of each menu item
    menuItems[0].setAttribute('id', 'CoqAuVin');
    menuItems[1].setAttribute('id', 'Boeuf Bourguignon');
    menuItems[2].setAttribute('id', 'Ratatouille');
    menuItems[3].setAttribute('id', 'Bouillabaisse');
    menuItems[4].setAttribute('id', 'Salade Nicoise');
    
}

export default menuContent;