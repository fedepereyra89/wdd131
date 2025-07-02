// select the DOM elements for output
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");


const today = new Date();
const dateLastModified = new Date(document.lastModified);


currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last modification: ${dateLastModified.toLocaleString()}`;

