document.addEventListener("DOMContentLoaded", function () {
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

  setInterval(nextSlide, 4000); // Change slide every 5 seconds
  showSlide(currentSlide); // Initial display
});

document.addEventListener("DOMContentLoaded", () => {
  // Form validation
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill in all fields.");
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });

  //validate email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

//nav bar hover scroll
document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

