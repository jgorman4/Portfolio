var clickCount = 0;

function expandBoxes() {
    var boxContainer = document.getElementById("boxContainer");

    // Increment click count
    clickCount++;

    // Toggle the "fadeIn" class based on odd or even clicks
    if (clickCount % 2 !== 0) {
        // Odd clicks: Apply fade in effect
        boxContainer.classList.add("fadeIn");
        // Remove the "hidden" class to show the boxes
        boxContainer.classList.remove("hidden");
    } else {
        // Even clicks: Remove fade in effect
        boxContainer.classList.remove("fadeIn");
        // Add the "hidden" class to hide the boxes immediately
        boxContainer.classList.add("hidden");
    }
}



function openBox(boxId) {
    // Your existing openBox function
}
