document.addEventListener('DOMContentLoaded', function() {
    // FOOTER JS (from previous responses)
    const lastModifiedElement = document.getElementById('lastmodified');
    const currentYearElement = document.getElementById('currentyear');

    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = `Last Modification: ${lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })} ${lastModified.toLocaleTimeString('en-US')}`;
    }

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // HAMBURGER MENU JS (New/Updated part)
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav ul');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            // Toggle the 'open' class on the navigation list
            navigation.classList.toggle('open');
            // Toggle the 'open' class on the button itself to change the icon
            hamButton.classList.toggle('open');
        });

        // Optional: Close menu when a navigation link is clicked
        navigation.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                if (navigation.classList.contains('open')) {
                    navigation.classList.remove('open');
                    hamButton.classList.remove('open');
                }
            });
        });
    }
});