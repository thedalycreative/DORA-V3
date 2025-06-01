// main.js

// Smooth scrolling
$(document).ready(function() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });
});

// Card flipping
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Scroll animations
$(window).on('scroll', function() {
    $('.space-medium').each(function() {
        var sectionPos = $(this).offset().top;
        var windowScroll = $(window).scrollTop() + $(window).height() - 100;
        if (sectionPos < windowScroll) {
            $(this).addClass('fade-in');
        }
    });
});

// Initial fade-in setup
$(document).ready(function() {
    $('.space-medium').css('opacity', 0);
});

