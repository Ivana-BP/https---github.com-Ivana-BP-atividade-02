document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");
  const isMobile = () => window.innerWidth <= 768;

  menuToggle.addEventListener("change", () => {
    menu.classList.toggle("menu-open", menuToggle.checked);
  });

  document.querySelectorAll(".menu li").forEach(item => {
    const link = item.querySelector("a");
    const submenu = item.querySelector(".submenu");

    if (submenu) {
      link.addEventListener("click", e => {
        if (isMobile()) {
          e.preventDefault();
          submenu.classList.toggle("submenu-open");
        }
      });
    }
  });

  document.addEventListener("click", e => {
    if (isMobile()) {
      document.querySelectorAll(".submenu").forEach(sub => {
        if (!sub.parentElement.contains(e.target)) {
          sub.classList.remove("submenu-open");
        }
      });
    }
  });

  const titulo = document.querySelector("header h1");
  titulo.style.cursor = "pointer";
  titulo.addEventListener("click", () => {
    alert("Bem-vindo à ONG Guardiões do Verde! 🌱");
  });
});
