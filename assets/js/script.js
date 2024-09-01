'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { 
  modal.classList.add('closed');
};

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');
const toastImages = document.querySelectorAll('.toast-banner img');

let toastTimeout;

// Function to display a random toast image
function displayRandomToast() {
  clearTimeout(toastTimeout);  // Clear any existing timeouts

  const randomIndex = Math.floor(Math.random() * toastImages.length);

  // Hide all images and show the selected one
  toastImages.forEach((img, index) => {
    img.style.display = (index === randomIndex) ? 'block' : 'none';
  });

  // Show the notification toast
  notificationToast.classList.remove('closed');
  notificationToast.style.display = 'flex'; // Ensure it's visible

  // Automatically hide the toast after 5 seconds
  toastTimeout = setTimeout(() => {
    notificationToast.classList.add('closed');
  }, 5000); // Adjust the duration as needed
}

// Close notification toast when the close button is clicked
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
  clearTimeout(toastTimeout);  // Prevent the toast from reopening automatically
});

// Trigger a random toast display every 10 seconds
setInterval(displayRandomToast, 10000); // Change the interval as needed (milliseconds)


// Dark Mode
const toggleSwitch = document.getElementById('dark-mode-checkbox');

toggleSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
});

// Check for saved user preference
const currentMode = localStorage.getItem('darkMode');
if (currentMode === 'enabled') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark-mode');
}

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  };

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
