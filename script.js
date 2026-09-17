const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const blessingBtn = document.getElementById("blessingBtn");
const blessingText = document.getElementById("blessingText");
const wishForm = document.getElementById("wishForm");
const wishResult = document.getElementById("wishResult");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const blessings = [
  "May Bappa bless you with happiness, peace and success! 🙏",
  "May every obstacle disappear from your path. Ganpati Bappa Morya! 🌺",
  "May your home always be filled with love, health and prosperity. ✨",
  "Wishing you wisdom, courage and endless positive energy. 🐘"
];

blessingBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * blessings.length);
  blessingText.textContent = blessings[randomIndex];
});

wishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  wishResult.hidden = false;
  wishResult.innerHTML = `
    <h3>गणपती बाप्पा मोरया! 🙏</h3>
    <p><strong>${escapeHTML(name)}</strong> wishes:</p>
    <p>${escapeHTML(message)}</p>
    <p>May Bappa bless you and your family! 🌼</p>
  `;

  wishResult.scrollIntoView({ behavior: "smooth", block: "center" });
  wishForm.reset();
});

function escapeHTML(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));
}

document.getElementById("year").textContent =
  `© ${new Date().getFullYear()} Bappa Celebration`;
