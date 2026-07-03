// Audio controller flag
let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        const music = document.getElementById('bg-music');
        music.volume = 0.4; // Gentle volume
        music.play().catch(err => console.log("Audio play blocked until user interaction."));
        musicStarted = true;
    }
}

function nextSlide(currentSlideId, nextSlideId) {
    // Hide current active slide
    document.getElementById('slide' + currentSlideId).classList.remove('active');
    
    // Reset the position of the No button if coming back to slide 1
    if(nextSlideId === 1) {
        const noBtn = document.getElementById('runaway-btn');
        noBtn.style.position = 'static';
    }

    // Show targeted next slide
    document.getElementById('slide' + nextSlideId).classList.add('active');
}

// Triggers confetti, triggers music, then shifts slides
function celebrateAndNext(current, next) {
    startMusic();
    triggerConfetti();
    nextSlide(current, next);
}

function showSurprise(type) {
    // Hide selection menu
    document.getElementById('slide3').classList.remove('active');
    triggerConfetti();

    // Route based on layout
    if (type === 'birthday') {
        document.getElementById('slide4').classList.add('active');
    } else if (type === 'gallery') {
        document.getElementById('slide5').classList.add('active');
    } else if (type === 'message') {
        document.getElementById('slide6').classList.add('active');
    }
}

function backToSelection(currentSlideId) {
    document.getElementById('slide' + currentSlideId).classList.remove('active');
    document.getElementById('slide3').classList.add('active');
}

// Absolute Masti Engine: The Runaway No Button
function escapeFromCursor() {
    const noBtn = document.getElementById('runaway-btn');
    
    // Shift position properties to free float
    noBtn.style.position = 'absolute';
    
    // Calculate randomized coordinates within safe window limits
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth - 40)) + 20;
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight - 40)) + 20;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Confetti blast engine
function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#ff4757', '#74b9ff', '#55efc4', '#a29bfe']
    });
}