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

  
  // Save to localStorage
  localStorage.setItem("contactName", name);
  localStorage.setItem("contactEmail", email);
  localStorage.setItem("contactMessage", message);

  // Feedback to the user
  alert(`Thank you, ${name}! Your message has been received.`);

  
  document.getElementById("contactForm").reset();
}

// Function to load saved data from localStorage
function loadSavedContact() {
  const savedName = localStorage.getItem("contactName");
  const savedEmail = localStorage.getItem("contactEmail");
  const savedMessage = localStorage.getItem("contactMessage");

  if (savedName || savedEmail || savedMessage) {
    document.getElementById("name").value = savedName || "";
    document.getElementById("email").value = savedEmail || "";
    document.getElementById("message").value = savedMessage || "";
    console.log("Form pre-filled with saved contact info.");
  }
}
// Attach the function to the form
document.addEventListener("DOMContentLoaded", () => {
  loadSavedContact(); 
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", handleContactForm);
});
