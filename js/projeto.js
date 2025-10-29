document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

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
