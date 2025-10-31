document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");
  const isMobile = () => window.innerWidth <= 768;
  const darkModeBtn = document.createElement("button");
  darkModeBtn.textContent = "🌓 Modo Escuro";
  darkModeBtn.setAttribute("aria-label", "Ativar modo escuro");
  darkModeBtn.style.position = "fixed";
  darkModeBtn.style.bottom = "20px";
  darkModeBtn.style.right = "20px";
  darkModeBtn.style.zIndex = "999";
  document.body.appendChild(darkModeBtn);

const contrastBtn = document.createElement("button");
contrastBtn.textContent = "⬛ Alto Contraste";
contrastBtn.setAttribute("aria-label", "Ativar alto contraste");
contrastBtn.style.position = "fixed";
contrastBtn.style.bottom = "60px";
contrastBtn.style.right = "20px";
contrastBtn.style.zIndex = "999";
document.body.appendChild(contrastBtn);

contrastBtn.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});


  darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


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
