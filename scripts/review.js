// review.js

// Get the current count from localStorage
let reviewCount = localStorage.getItem('reviewCount');

// Convert to number and increment, or start at 1
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;

// Store updated count back to localStorage
localStorage.setItem('reviewCount', reviewCount);

// Display the count on the page
const reviewCountDisplay = document.getElementById('reviewCount');
if (reviewCountDisplay) {
    reviewCountDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
}

// Optional: Set current year and last modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
