// Footer current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Footer last modified date
document.getElementById('lastmodified').textContent = document.lastModified;


// Function to handle contact form submission
function handleContactForm(event) {
  event.preventDefault(); // Stop form from reloading the page

  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Feedback to the user
  alert(`Thank you, ${name}! Your message has been received.`);

  
  document.getElementById("contactForm").reset();
}

// Attach the function to the form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", handleContactForm);
});
