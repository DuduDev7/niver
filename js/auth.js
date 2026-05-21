function login() {
  const senhaDigitada = document.getElementById("senha").value;
  const senha = "linda";

  if (senhaDigitada === senha) {
    localStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("erro").innerText = "Senha incorreta ❤️";
  }
}

// async function login() {
//   const senhaDigitada = document.getElementById("senha").value;
//   const senhaHash = "9f86d081884c7d6d9ffd60014fc7ee77207e6718d077527338cf9eddbcc90c78"; // hash de "linda"

//   const encoder = new TextEncoder();
//   const data = encoder.encode(senhaDigitada);
//   const hashBuffer = await crypto.subtle.digest('SHA-256', data);
//   const hashArray = Array.from(new Uint8Array(hashBuffer));
//   const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

//   if (hashHex === senhaHash) {
//     localStorage.setItem("auth", "true");
//     window.location.href = "home.html";
//   } else {
//     document.getElementById("erro").innerText = "Senha incorreta 🎮";
//   }
// }

// async function gerarHash(senha) {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(senha);
//   const hashBuffer = await crypto.subtle.digest('SHA-256', data);
//   const hashArray = Array.from(new Uint8Array(hashBuffer));
//   const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//   console.log(`Senha: ${senha}`);
//   console.log(`Hash: ${hashHex}`);
// }

// gerarHash("sua_nova_senha_aqui");

// allow pasting // digitar isso ANTES do gerarHASH