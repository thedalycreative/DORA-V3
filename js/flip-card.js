document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'flip-card'
    const flipCards = document.querySelectorAll('.flip-card');

    // Loop through each flip card and add a click event listener
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle the 'flipped' class on the card when clicked
            this.classList.toggle('flipped');
        });
    });
});