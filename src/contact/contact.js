function contactContent() {
    const content = document.getElementById('content');

    // Creating contact card container
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact__card__container');
    content.appendChild(contactContainer); // Append to content, not document

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123 456 789';

    const address = document.createElement('p');
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';

    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(address);
}

export default contactContent;
