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

const home_btn = document.getElementById("home");
const old_btn = document.getElementById("old");
const new_btn = document.getElementById("new");
const large_btn = document.getElementById("large");
const small_btn = document.getElementById("small");
const page_header = document.getElementById("page_header");

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
      templeName: "Newport Beach California",
      location: "Newport Beach, California, United States",
      dedicated: "2005, August, 28",
      area: 17800,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/400x250/newport-beach-temple-lds-758832-wallpaper.jpg"
    },

    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },

    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
    }
];

const home_page = (temples) => {
  document.getElementById("main_sec").innerHTML = "";
  temples.forEach((item) => {
    let card = document.createElement("section");
    card.classList.add("card")
    let temple_name = document.createElement("h3");
    let dedication = document.createElement("p");
    let locations = document.createElement("p");
    let areas = document.createElement("p");
    let images_field = document.createElement("img");
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    let table_row = document.createElement("tr");
    let table_row2 = document.createElement("tr");
    let table_row3 = document.createElement("tr");
    let table_data = document.createElement("td");
    let table_data2 = document.createElement("td");
    let table_data3 = document.createElement("td");


    temple_name.innerHTML = `<strong>${item.templeName}</strong>`
    locations.innerHTML = `<span style="color: lightblue;">Location: </span>${item.location}`;
    dedication.innerHTML = `<span style="color: lightblue;">Dedicated: </span>${item.dedicated}`;
    areas.innerHTML = `<span style="color: lightblue;">Area: </span>${item.area}`;
    images_field.setAttribute("src", item.imageUrl)
    images_field.setAttribute("alt", `${item.templeName} Temple`)
    images_field.setAttribute("loading", "lazy")

    card.appendChild(table);
    caption.appendChild(temple_name);
    table.appendChild(caption);
    table_data.appendChild(locations);
    table_data2.appendChild(dedication);
    table_data3.appendChild(areas);
    table_row.appendChild(table_data);
    table_row2.appendChild(table_data2);
    table_row3.appendChild(table_data3);
    table.appendChild(table_row);
    table.appendChild(table_row2);
    table.appendChild(table_row3);
    card.appendChild(images_field);
    const main_page = document.getElementById("main_sec");
    main_page.appendChild(card);

  })
};


home_page(temples);

home_btn.addEventListener("click", () => {
  home_page(temples);
  page_header.textContent = `Home`;
});

old_btn.addEventListener("click", () => {
  const temple_year = temples.filter(item => {
    const split_item = item.dedicated.split(",")[0];
    let convert = Number(split_item) <= 1900;
    return convert;
  });
  page_header.textContent = `Old`;
  home_page(temple_year);
});

new_btn.addEventListener("click", () => {
  const temple_year = temples.filter(item => {
    const split_item = item.dedicated.split(",")[0];
    let convert = Number(split_item) >= 2000;
    return convert;
  });
  page_header.textContent = `New`;
  home_page(temple_year);
  
});

large_btn.addEventListener("click", () => {
  page_header.textContent = `Large`;
  home_page(temples.filter(item => item.area >= 90000))
});

small_btn.addEventListener("click", () => {
  page_header.textContent = `Small`;
  home_page(temples.filter(item => item.area <= 10000))
});