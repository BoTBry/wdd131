const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Updated ${lastModified}` 

console.warn("WARNNING SD");

let name = prompt("What is your name?");
confirm("Are you sure?")
alert(`Hello ${name}, Welcome to my page!!!`);