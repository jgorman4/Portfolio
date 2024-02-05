document.addEventListener('DOMContentLoaded', function() {
    createStars();
});

function createStars() {
    const numberOfStars = 50;
    const space = document.querySelector('.space');

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        space.appendChild(star);
    }
}