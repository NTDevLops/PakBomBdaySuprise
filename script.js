function nextSlide(currentSlideId, nextSlideId) {
    // Hide current active slide
    document.getElementById('slide' + currentSlideId).classList.remove('active');
    
    // Show targeted next slide
    document.getElementById('slide' + nextSlideId).classList.add('active');
}

function showSurprise(type) {
    // Hide the selection layout menu
    document.getElementById('slide3').classList.remove('active');

    // Route based on which penguin was clicked
    if (type === 'birthday') {
        document.getElementById('slide4').classList.add('active');
    } else if (type === 'gallery') {
        document.getElementById('slide5').classList.add('active');
    } else if (type === 'message') {
        document.getElementById('slide6').classList.add('active');
    }
}

function backToSelection(currentSlideId) {
    // Hide the current active surprise window
    document.getElementById('slide' + currentSlideId).classList.remove('active');
    
    // Return to the selection choice screen
    document.getElementById('slide3').classList.add('active');
}