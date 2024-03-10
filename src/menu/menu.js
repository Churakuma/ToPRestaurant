function menuContent() {
    
    // Setting menu page title
    const menuPageTitle = document.createElement('h1');
    document.getElementById('content').appendChild(menuPageTitle);
    var textNode = document.createTextNode('Menu');
    menuPageTitle.appendChild(textNode);

    
}

export default menuContent;