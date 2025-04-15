//Testing Js file.
console.log("Hello world");

const year = document.getElementById("currentyear");
const lastMod = document.getElementById("lastModified");

//Getting the year function and setting it.
const current = new Date();
year.innerHTML = `${current.getFullYear()}`;

//Setting the last modified.
const lastModified = document.lastModified;
lastMod.innerHTML = `Last Updated ${lastModified}`;

const opt_list = document.getElementById("slt_list");
const item_list = [
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

let create_opt_list = (item) =>{
    item.forEach((element, index) => {
        const opts = document.createElement("option");
        opts.textContent = element.name;
        opts.setAttribute("value", element.id);
        opt_list.appendChild(opts);
        console.log(index);
    });

}
create_opt_list(item_list);