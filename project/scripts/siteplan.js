 // Basic JavaScript for footer details (similar to your other project)
        document.addEventListener('DOMContentLoaded', function() {
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
        });