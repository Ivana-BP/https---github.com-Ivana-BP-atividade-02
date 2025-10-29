document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast show alert--${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("show");
      toast.remove();
    }, 3000);
  }

  function validarCPF(cpf) {
    const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    return cpfRegex.test(cpf);
  }

  function validarCEP(cep) {
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
    return cepRegex.test(cep);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const cpf = form.cpf.value.trim();
    const cep = form.cep.value.trim();
    const idade = parseInt(form.idade.value, 10);

    const inputs = form.querySelectorAll("input, select");
    inputs.forEach(input => input.style.borderColor = "#d6d6d6");

    let valido = true;

    if (nome === "") {
      valido = false;
      form.nome.style.borderColor = "red";
    }
    if (email === "" || !email.includes("@")) {
      valido = false;
      form.email.style.borderColor = "red";
    }
    if (cpf && !validarCPF(cpf)) {
      valido = false;
      form.cpf.style.borderColor = "red";
    }
    if (cep && !validarCEP(cep)) {
      valido = false;
      form.cep.style.borderColor = "red";
    }
    if (idade && (idade < 18 || idade > 120)) {
      valido = false;
      form.idade.style.borderColor = "red";
    }

    if (!valido) {
      showToast("Por favor, corrija os campos em vermelho.", "error");
      return;
    }

    showToast("Cadastro enviado com sucesso!", "success");

    form.reset();
  });
});
