const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');



 
// Function to handle the "Yes" button click
noButton.addEventListener('mouseenter', function () {
    // Get the container's width and height
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Calculate the width and height of the left-bottom half of the screen
    const maxX = containerWidth / 2; // Only allow x-axis to be in the left half
    const maxY = containerHeight / 2; // Only allow y-axis to be in the bottom half

    // Set a margin to avoid the button going to the edges of the screen
    const marginX = 150; // Minimum distance from the left and right edges
    const marginY = 150; // Minimum distance from the top and bottom edges

    // Generate random position for the "No" button within the left-bottom half of the screen,
    // with the margin applied.
    const randomX = Math.random() * (maxX - marginX) + marginX; // Random X position within the left half and margin
    const randomY = Math.random() * (maxY - marginY) + marginY + maxY; // Random Y position within the bottom half and margin

    // Change the position of the "No" button
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});