// let reviewCount = document.querySelector(".reviewCount");
// reviewCount.textContent = `Hello!!!!`

// localStorage.setItem("numReviews-ls", 0);
// let numReviews = Number(localStorage.getItem("numReviews-ls"));

// if (numReviews > 1) {
//     reviewCount.textContent = `You have submitted ${numReviews} reviews!`;
// }

// else{
//     reviewCount.textContent = "This is your first review!";
// }

// console.log(numReviews + 1);

// localStorage.setItem("numReviews-ls", numReviews);



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
const reviewForm = document.getElementById("review");
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