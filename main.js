document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('.email-link');
    emailLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Email link clicked!');
    });
});