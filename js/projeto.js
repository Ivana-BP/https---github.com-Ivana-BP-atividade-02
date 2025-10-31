document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌓 Modo Escuro";
darkModeBtn.setAttribute("aria-label", "Ativar modo escuro");
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.zIndex = "999";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


  links.forEach(link => {
    link.addEventListener("click", e => {
      links.forEach(l => l.classList.remove("ativo"));
      link.classList.add("ativo");
    });
  });

  const titulo = document.querySelector("header h1");
  titulo.style.cursor = "pointer";
  titulo.addEventListener("click", () => {
    alert("Conheça os projetos da ONG Guardiões do Verde! 🌱");
  });
});
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
