// getdates.js

// JavaScript statements to dynamically output the current copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// JavaScript statements to dynamically output the date the document was last modified
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
