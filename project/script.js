document.addEventListener("DOMContentLoaded", () => {

  // Home page button event
  const learnBtn = document.getElementById("learnMoreBtn");
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      alert("Machu Picchu is waiting for you! Explore the site for more information.");
    });
  }

  // Contact form event
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const message = document.getElementById("formMessage");

      message.classList.remove("hidden");
      message.textContent = `Thank you, ${name}! Your message has been received.`;

      form.reset();
    });
  }

});
