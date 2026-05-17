function openCamera() {
  window.open("https://webar-simulator.lovable.app/ar/XA28VP3R", "_blank", "noopener,noreferrer");
}

window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");

  if (!splash) return;

  window.setTimeout(() => {
    splash.classList.add("is-hidden");
  }, 1800);

  window.setTimeout(() => {
    splash.classList.add("hidden");
  }, 2300);
});

function slideAr(direction) {
  const slider = document.getElementById("ar-slider");

  if (!slider) return;

  const firstSlide = slider.querySelector(".ar-slide");
  const distance = firstSlide ? firstSlide.offsetWidth + 14 : slider.clientWidth;

  slider.scrollBy({
    left: direction * distance,
    behavior: "smooth"
  });
}
