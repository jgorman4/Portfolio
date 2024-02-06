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



function openBox(boxId, element) {
    // Hide all boxes initially
    var allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(function(box) {
        box.style.display = 'none';
        box.classList.remove('shimmer-fade'); // Remove shimmer class from all boxes
    });

    // Show the selected box
    var selectedBox = document.getElementById(boxId);
    if (selectedBox) {
        selectedBox.style.display = 'block';
        selectedBox.classList.add('shimmer-fade');
    }

    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('selected'));

    // Add the 'selected' class to the clicked item
    element.classList.add('selected');
}



