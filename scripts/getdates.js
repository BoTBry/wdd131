const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Updated ${lastModified}` 