window.onload = function() {
    // Select buttons
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    let clickCount = 0; // Track how many times NO is clicked

    // Add event listener for 'NO' button click
    noButton.addEventListener("click", function() {
        clickCount++; // Increase count on each click

        // Make YES button bigger
        let newSize = 24 + clickCount * 5; // Increase font size dynamically
        let newPadding = 15 + clickCount * 3; // Increase padding dynamically
        yesButton.style.fontSize = `${newSize}px`;
        yesButton.style.padding = `${newPadding}px ${newPadding * 2}px`;

        // Change NO button text
        if (clickCount === 1) {
            noButton.textContent = "Really? 😢";
        } else if (clickCount === 2) {
            noButton.textContent = "Are you sure? 💔";
        } else if (clickCount === 3) {
            noButton.textContent = "Last chance! 😭";
        } else {
            noButton.textContent = "Too late! 😈";
            noButton.disabled = true; // Disable NO button
            noButton.style.opacity = "0.5"; // Make it look inactive
            noButton.style.cursor = "not-allowed";
        }
    });

};


