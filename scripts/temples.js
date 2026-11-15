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

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('#primary-navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            const isOpen = navigation.classList.toggle('open');
            hamButton.classList.toggle('open', isOpen);
            hamButton.setAttribute('aria-expanded', String(isOpen));
            hamButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        navigation.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                navigation.classList.remove('open');
                hamButton.classList.remove('open');
                hamButton.setAttribute('aria-expanded', 'false');
                hamButton.setAttribute('aria-label', 'Open navigation menu');
            });
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && navigation.classList.contains('open')) {
                navigation.classList.remove('open');
                hamButton.classList.remove('open');
                hamButton.setAttribute('aria-expanded', 'false');
                hamButton.setAttribute('aria-label', 'Open navigation menu');
                hamButton.focus();
            }
        });
    }
});