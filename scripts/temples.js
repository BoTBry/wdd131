//Testing Js file.
console.log("Hello world");

const year = document.getElementById("currentyear");
const lastMod = document.getElementById("lastModified");
const header = document.querySelector("#header");
const menu = document.querySelector("#menu");

//Setting click Event Listner
menu.addEventListener("click", () => {
    header.classList.toggle("toggle");
})

//Getting the year function and setting it.
const current = new Date();
year.innerHTML = `${current.getFullYear()}`;

//Setting the last modified.
const lastModified = document.lastModified;
lastMod.innerHTML = `Last Updated ${lastModified}`;
