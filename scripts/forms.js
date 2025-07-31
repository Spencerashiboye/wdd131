// --- Product Data Array ---
// This array holds the product objects used to populate the dropdown.
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// --- Function to Populate Product Name Options ---
// This function finds the 'productName' select element and fills it
// with options from the 'products' array.
function populateProductOptions() {
  const productSelect = document.getElementById('productName');

  // Only proceed if the 'productName' select element exists on the page.
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;       // Set the option's value to the product's ID
      option.textContent = product.name; // Set the option's display text to the product's name
      productSelect.appendChild(option); // Add the option to the select element
    });
  }
}

// --- Event Listener for DOM Content Loaded ---
// This ensures the script runs only after the entire HTML document has been parsed.
document.addEventListener('DOMContentLoaded', function() {

  // --- Call Product Options Population (for your form page) ---
  // This should be called on the page where your product selection form is located.
  populateProductOptions();

  // --- Review Counter Logic (for your review.html page) ---
  // This section increments and displays a review counter using localStorage.
  // It's intended to run on the 'review.html' page after a form submission.
  const reviewCountDisplay = document.getElementById('reviewCountDisplay');

  // Only run review counter logic if the display element exists.
  if (reviewCountDisplay) {
    let reviewCount = localStorage.getItem('reviewCount'); // Get count from localStorage

    // Initialize count if it doesn't exist, otherwise parse it to an integer.
    if (reviewCount === null) {
      reviewCount = 0;
    } else {
      reviewCount = parseInt(reviewCount, 10); // Use radix 10 for safety
    }

    reviewCount++; // Increment the counter for this page load/visit
    localStorage.setItem('reviewCount', reviewCount); // Store the updated count back
    reviewCountDisplay.textContent = reviewCount; // Display the new count on the page
  }

  // --- Footer JavaScript (Common Content for all pages) ---
  // This section dynamically updates the last modified date and current year in the footer.
  const lastModifiedElement = document.getElementById('lastmodified');
  const currentYearElement = document.getElementById('currentyear');

  // Update last modified date if the element exists.
  if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Modification: ${lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })} ${lastModified.toLocaleTimeString('en-US')}`;
  }

  // Update current year if the element exists.
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});