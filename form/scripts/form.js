//Testing Js file.
console.log("Hello world");

const year = document.getElementById("currentyear");
const reviewCounter = document.getElementById("reviewCounter");
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





// Check if the review counter exists in localStorage, if not, initialize it
if (!localStorage.getItem("reviewCounter")) {
    localStorage.setItem("reviewCounter", 0);
}

// Function to update the review count display
function updateReviewCount() {
    let reviewCounter = parseInt(localStorage.getItem("reviewCounter"));
    document.getElementById("reviewCount").textContent = `Reviews Completed: ${reviewCounter}`;
}

// Handle form submission
const reviewForm = document.getElementById("submit");
reviewForm.addEventListener("submit", function (event) {
    // Increment review count in localStorage
    let reviewCounter = parseInt(localStorage.getItem("reviewCounter"));
    reviewCounter += 1;
    
    // Store the updated review count
    localStorage.setItem("reviewCounter", reviewCounter);
    
    // Update the review count displayed on the page
    updateReviewCount();
});
  
// Update the review count when the page is loaded
updateReviewCount();



