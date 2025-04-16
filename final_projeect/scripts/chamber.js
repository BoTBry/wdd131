let year = document.getElementById("currentyear");
const current_year = new Date();
const navigation = document.querySelector("#header");
const menu_btn = document.querySelector("#menu");

year.textContent = `${current_year.getFullYear()}`;
menu_btn.addEventListener("click", ()=>{
    navigation.classList.toggle("show");
})