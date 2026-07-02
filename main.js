/* Mariner Math — light interactions */

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll-reveal for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document
  .querySelectorAll(".section-head, .card, .step, .format-note, .about-grid, .contact-inner")
  .forEach((el) => {
    el.classList.add("in-view");
    observer.observe(el);
  });

// Contact form -> opens the user's email client with a prefilled message.
// (Static site, no backend. To collect submissions automatically instead,
//  swap this for a form service like Formspree — see README.)
const form = document.getElementById("contactForm");
const RECIPIENT = "gaberiedel@gmail.com";

if (form) form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const level = form.level.value;
  const format = form.format.value;
  const message = form.message.value.trim();

  if (!name || !email) {
    const note = document.getElementById("formNote");
    note.textContent = "Please add your name and email first.";
    note.style.color = "var(--brass-bright)";
    return;
  }

  const subject = `Tutoring inquiry — ${name} (${level})`;
  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Level: ${level}\n` +
    `Preferred format: ${format}\n\n` +
    `${message || "(no message)"}\n`;

  window.location.href =
    `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
