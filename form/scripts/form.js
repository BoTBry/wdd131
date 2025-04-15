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
const item_list =["Flux Capacitor", "Power Laces", "Time Circuits", "Low Voltage Reactor", "Warp Equalizer"];

let create_opt_list = (item) =>{
    item.forEach((element, index) => {
        const opts = document.createElement("option");
        opts.textContent = element;
        opts.setAttribute("value", element.toLowerCase());
        opt_list.appendChild(opts);
        console.log(index);
    });

}
create_opt_list(item_list);