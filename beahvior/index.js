//This is for the ripple effect on the Hero
$('.full-mountain-image').ripples();
$('.full-mountain-image').ripples('updateSize');
//End of code for Ripple Effect



// Hamburger menu and off-screen menu functionality
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// When the hamburger menu is clicked, toggle the 'active' class
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');   // Toggle active class for hamburger menu
  offScreenMenu.classList.toggle('active');  // Toggle active class for off-screen menu
});


// JavaScript for handling form submission and lightbox
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');
  const lightbox = document.getElementById('thank-you-lightbox');
  const closeButton = document.getElementById('close-lightbox');

  // Make sure the form is properly submitting
  if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault();  // Prevent the default form submission (page reload)

          // Show the lightbox
          lightbox.style.display = 'flex';
      });
  }

  // Close the lightbox when the close button is clicked
  if (closeButton) {
      closeButton.addEventListener('click', function() {
          lightbox.style.display = 'none';
      });
  }
});
