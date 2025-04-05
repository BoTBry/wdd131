const year = document.getElementById("year");
const lastmodified = document.getElementById("lastModified");
let currentYear = new Date();
let updated = document.lastModified;

// year.innerHTML = "hello chsjdd";------------Testing Id
year.textContent = currentYear.getFullYear();
lastmodified.textContent = updated;

let temperature = document.querySelector(".value1");
let wind = document.querySelector(".value3");
let windChill = document.querySelector(".value4");

const windChillCal = (var_temperature, var_wind) =>{
    const BA = 13.12;
    const COT = 0.6215;
    const COWS = 11.37;
    const COTAWS = 0.3965;

    // let temperature = document.querySelector(".value1");
    // let wind = document.querySelector(".value3");
    // let windChill = document.querySelector(".value4");
    let windNum = Number(var_wind.textContent);
    let temperatureNum = Number(var_temperature.textContent);

    let solu1 = COT * temperatureNum;
    let solu2 = COWS * (Math.pow(windNum, 0.16));
    let solu3 = COTAWS * temperatureNum * (Math.pow(windNum, 0.16));

    const final_solu = BA + solu1 - solu2 + solu3;
    return `${final_solu.toFixed(2)}°C`;

    
    
}

windChill.textContent = windChillCal(temperature, wind);