// This event listener ensures the code runs only after the full HTML document is loaded and parsed.
document.addEventListener('DOMContentLoaded', function() {

    const reviewCountDisplay = document.getElementById('reviewCountDisplay');

    // Check if the element exists on the page before trying to update it.
    if (reviewCountDisplay) {
        // Retrieve the 'reviewCount' value from the browser's localStorage.
        let reviewCount = localStorage.getItem('reviewCount');

      
        if (reviewCount === null) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount, 10);
        }

        // Increment the counter for this visit.
        reviewCount++;

        // Store the new, updated count back into localStorage.
        localStorage.setItem('reviewCount', reviewCount);

        // Display the final count on the page.
        reviewCountDisplay.textContent = reviewCount;
    }


   
    const lastModifiedElement = document.getElementById('lastmodified');
    const currentYearElement = document.getElementById('currentyear');

    // Update the last modified date if the element exists.
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = `Last Modification: ${lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })} ${lastModified.toLocaleTimeString('en-US')}`;
    }

    // Update the current year if the element exists.
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});
