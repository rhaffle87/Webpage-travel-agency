// Auto-slide functionality for banner
let currentSlide = 0;
const slides = document.querySelectorAll(".banner .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener("DOMContentLoaded", function () {
  // Form validation
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const interest = document.getElementById("interest").value;

      if (!name || !email || !interest) {
        alert("Please fill out all fields.");
        event.preventDefault();
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
      }
    });

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  }

  const callToActionBtn = document.querySelector(".cta-button");

  callToActionBtn.addEventListener("click", () => {
    // Add your desired action here, e.g., redirect to a page
    window.location.href =
      "https://www.youtube.com/watch?v=ILDyLRRJf2k&ab_channel=InventionTricks";
  });
});
