const SLIDE_INTERVAL = 4000; // slide interval in milliseconds
const SCROLL_THRESHOLD = 50; // scroll threshold in pixels

document.addEventListener("DOMContentLoaded", function () {
  // Slide show functionality
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

  setInterval(nextSlide, SLIDE_INTERVAL);
  showSlide(currentSlide); // Initial display

  // Form validation
  const form = document.getElementById("contact-form");
  const confirmation = document.querySelector(".contact-form .confirmation");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      confirmation.style.display = "block";
      form.reset();
    }
  });

  function validateEmail(email) {
    if (typeof email !== "string") return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

// Navbar hover scroll effect
document.addEventListener('scroll', function () {
  if (window.scrollY > SCROLL_THRESHOLD) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});