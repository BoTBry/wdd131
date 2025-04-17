let year = document.getElementById("currentyear");
const current_year = new Date();
const navigation = document.querySelector("#header");
const menu_btn = document.querySelector("#menu");

year.textContent = `${current_year.getFullYear()}`;
menu_btn.addEventListener("click", ()=>{
    navigation.classList.toggle("show");
})

const tracker = () =>{
    const Welcome = document.getElementById("Welcome");
    let fs_visit = localStorage.setItem("fs-visit", Date.now());
    let visit_tracker = Number(localStorage.getItem("visit-ct"));
    visit_tracker++;
    if (visit_tracker > 1){
        Welcome.textContent = `Back So Soon!!😊`;
    }
    localStorage.setItem("visit-ct", visit_tracker);
    let view_date = Number(localStorage.getItem("fs-visit"));
    console.log(view_date);
};
tracker();