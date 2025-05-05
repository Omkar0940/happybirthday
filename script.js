// Flip the card
document.getElementById('flip-btn').addEventListener('click', function() {
    document.querySelector('.card').classList.toggle('flipped');
});

// Add multiple hearts animation
document.getElementById('heart-btn').addEventListener('click', function() {
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('hearts');

    // Random positioning
    const left = Math.random() * 100;
    const top = 100 + Math.random() * 50; // Starts near the center
    heart.style.left = left + '%';
    heart.style.top = top + '%';

    document.getElementById('hearts-container').appendChild(heart);

    // Remove the heart after animation
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Add more confetti for extra celebration
document.getElementById('celebrate-btn').addEventListener('click', function() {
    const extraConfetti = document.createElement('div');
    extraConfetti.classList.add('confetti');
    document.getElementById('extra-confetti-container').appendChild(extraConfetti);

    setTimeout(() => {
        extraConfetti.remove();
    }, 5000); // Extra confetti lasts for 5 seconds
});
