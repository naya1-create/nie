// Get buttons and message div
const yesButton1 = document.getElementById("yesButton");
const yesButton2 = document.getElementById("yesButton2");
const messageDiv = document.getElementById("message");

// Function to reveal the message
function showMessage() {
    messageDiv.classList.remove("hidden");
}

// Add click events to both buttons
yesButton1.addEventListener("click", showMessage);
yesButton2.addEventListener("click", showMessage);
