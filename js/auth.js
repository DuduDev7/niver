async function login() {

  const senhaDigitada = document.getElementById("senha").value;

  const senhaHash = "a605387aab9fabfb4cc4ca9d55bb1551a84722885e43554d8a9b038682d16d6f";

  const encoder = new TextEncoder();

  const data = encoder.encode(senhaDigitada);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === senhaHash) {

    localStorage.setItem("auth", "true");

    window.location.href = "home.html";

  } else {

    document.getElementById("erro").innerText =
      "Senha incorreta 🎮";

  }
}

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