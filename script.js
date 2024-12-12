// Add event listener to the RSVP form
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var guests = document.getElementById('guests').value;
    // Send the RSVP data to the server or store it locally
    console.log('RSVP submitted:', name, email, guests);
});

// Add event listener to the accommodations link
document.getElementById('accommodations-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Open the hotel website in a new tab
    window.open('https://www.example.com/hotel', '_blank');
});

// Add event listener to the gift registry link
document.getElementById('gift-registry-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Open the gift registry website in a new tab
    window.open('https://www.example.com/gift-registry', '_blank');
});

// Add event listener to the contact email link
document.getElementById('contact-email-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Open the email client with the contact email address
    window.location.href = 'mailto:example@example.com';
});

// Add event listener to the contact phone number link
document.getElementById('contact-phone-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Open the phone dialer with the contact phone number
    window.location.href = 'tel:+1234567890';
});

// Initialize the wedding countdown timer
var weddingDate = new Date('2024-06-01T14:00:00');
var countdownTimer = setInterval(function() {
    var now = new Date();
    var timeRemaining = weddingDate.getTime() - now.getTime();
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById('countdown-timer').innerHTML = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
}, 1000);
