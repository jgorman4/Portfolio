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