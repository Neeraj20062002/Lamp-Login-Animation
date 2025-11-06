// main.js — simple click/tap toggle on the lamp (no extra string overlay)
document.addEventListener("DOMContentLoaded", () => {
  const lamp = document.getElementById("lamp");
  const loginContainer = document.getElementById("loginContainer");

  if (!lamp) return;

  let isOn = false;

  function updateUI() {
    lamp.classList.toggle("on", isOn);
    lamp.setAttribute("aria-pressed", String(isOn));
    if (loginContainer)
      loginContainer.setAttribute("aria-hidden", String(!isOn));
  }

  // Toggle on click/tap anywhere on the lamp element
  lamp.addEventListener("click", (e) => {
    isOn = !isOn;
    updateUI();
  });

  // Keyboard accessibility: Enter / Space toggles the lamp
  lamp.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      isOn = !isOn;
      updateUI();
    }
  });

  // initialize
  updateUI();
});
