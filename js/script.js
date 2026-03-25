function check() {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "login.html";
  }
}

function go(p) {
  window.location.href = p;
}