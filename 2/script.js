/*
  script.js
  ------------------------------------------------------------
  This script covers:
    1. Home page slider logic (fade-in, fade-out, auto-play,
       and manual left/right navigation).
    2. Hamburger menu toggle (mobile navigation).
    3. Show specific product sections on the "Products" page.
    4. Contact form submission handling (demo).
  ------------------------------------------------------------
*/

// ======== SLIDER LOGIC (HOME PAGE) ========

// Data for the slider items
const sliderData = [
  {
    image: "images/product1.webp",
    text: "Hibiscus Inulin Sweetener – A delicious, healthy sugar alternative!",
    link: "products.html#hibiscus"
  },
  {
    image: "images/product2.webp",
    text: "Liquid Inulin – Enjoy an easy-to-use liquid prebiotic sweetener!",
    link: "products.html#liquid"
  },
  {
    image: "images/story1.webp",
    text: "Sugar-Free Morning Smoothies – Kickstart your day the healthy way!",
    link: "stories.html"
  },
  {
    image: "images/story2.webp",
    text: "Healthy Baking with Kids – Create sweet treats without the sugar crash.",
    link: "stories.html"
  },
  {
    image: "images/story3.webp",
    text: "Fueling Workouts Naturally – Our Inulin products support your fitness!",
    link: "stories.html"
  },
  {
    image: "images/story4.webp",
    text: "Light & Flavorful Beverages – Refresh your day with less sugar.",
    link: "stories.html"
  }
];

// Slider state
let currentSlide = 0;
let slideInterval = null;
const SLIDE_DURATION = 5000; // 5 seconds for auto-slide

// Called on page load if we're on the home page
function initSlider() {
  const sliderItem = document.getElementById("slider-item");
  if (!sliderItem) return; // If the slider doesn't exist, skip
  
  // Show the first slide
  showSlide(currentSlide);
  // Start auto-play
  slideInterval = setInterval(nextSlide, SLIDE_DURATION);
}

// Show the slide at the given index (fade out, then fade in)
function showSlide(index) {
  const sliderItem = document.getElementById("slider-item");
  if (!sliderItem) return;

  // Fade out
  sliderItem.style.opacity = 0;
  setTimeout(() => {
    // Update slider content
    sliderItem.innerHTML = `
      <img src="${sliderData[index].image}" alt="Slider Image" />
      <p>${sliderData[index].text}</p>
    `;
    // Make the entire slider clickable to go to link
    sliderItem.onclick = () => {
      window.location.href = sliderData[index].link;
    };
    
    // Fade in
    sliderItem.style.opacity = 1;
  }, 500); // matches the 0.5s transition in CSS
}

// Move to the next slide, wrapping around
function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderData.length;
  showSlide(currentSlide);
  resetSlideInterval();
}

// Move to the previous slide, wrapping around
function prevSlide() {
  // + sliderData.length ensures we don't get a negative mod
  currentSlide = (currentSlide - 1 + sliderData.length) % sliderData.length;
  showSlide(currentSlide);
  resetSlideInterval();
}

// Reset the auto-play timer after manual navigation
function resetSlideInterval() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, SLIDE_DURATION);
}


// ======== PRODUCTS PAGE LOGIC (SHOW/HIDE) ========
// Called if on products.html; toggles sections by ID
function showProduct(productId) {
  const sections = document.querySelectorAll(".product-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the chosen product section
  if (productId === "hibiscus") {
    document.getElementById("hibiscus-section").style.display = "block";
  } else if (productId === "liquid") {
    document.getElementById("liquid-section").style.display = "block";
  }
}


// ======== HAMBURGER MENU LOGIC ========
// Toggles the desktop/mobile menu, hides mobile menu on link click
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!hamburger || !navMenu || !mobileMenu) return;

  // Toggle mobile menu on hamburger click
  hamburger.addEventListener("click", () => {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
    // Hide desktop menu if open
    navMenu.style.display = "none";
  });

  // Hide the mobile menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
}


// ======== CONTACT FORM SUBMISSION (DEMO) ========
function submitContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // In a real scenario, you'd send these details to your server or email service
  console.log("Sending contact form data:", { name, email, message });
  alert("Thank you for your message! We will get back to you soon.");

  // Reset form
  document.getElementById("contact-form").reset();
}


// ======== ON DOCUMENT LOAD ========
window.addEventListener("DOMContentLoaded", () => {
  // Set the footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize the slider if on home page
  initSlider();

  // Initialize hamburger menu for mobile nav
  initHamburgerMenu();

  // If there's a product hash on products.html, show it
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    showProduct(hash);
  }
});
