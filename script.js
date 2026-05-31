const header = document.querySelector(".site-header");

const syncHeader = () => {
  header.dataset.elevated = String(window.scrollY > 8);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
