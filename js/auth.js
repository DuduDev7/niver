function login() {
  const senha = document.getElementById("senha").value;

  if (senha === "teAmo") {
    localStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("erro").innerText = "Senha incorreta ❤️";
  }
}