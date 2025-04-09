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


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Davao Philippines ",
        location: "Davao City, Philippines",
        dedicated: "2020, November, 14",
        area: 8000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/davao-philippines-temple/davao-philippines-temple-11690.jpg"
      },
      {
        templeName: "Lagos Nigeria",
        location: "Lagos, Nigeria",
        dedicated: "2025, May, 10",
        area: 10000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577.jpg"
      },
      {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah",
        dedicated: "2015, August, 8",
        area: 10000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-2310.jpg"
      }
  ];