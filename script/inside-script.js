
document.addEventListener("DOMContentLoaded", function () {
    // Select the action button
    const actionButton = document.querySelector(".action-button");
    
    // Add event listener to handle click event
    actionButton.addEventListener("click", function () {
        window.location.href = "index.html"; // Redirect to index.html
    });
});

