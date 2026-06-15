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

async function loginInfo() {

  const senhaDigitada = document.getElementById("senha").value;

  const senhaHash = "c33b854e1796da73da1cde0f459d3fbea8a9325db93d579ae4b35c976d14265d";

  const encoder = new TextEncoder();

  const data = encoder.encode(senhaDigitada);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === senhaHash) {

    localStorage.setItem("auth", "true");

    window.location.href = "info.html";

  } else {

    document.getElementById("erro").innerText =
      "Senha incorreta 🎮";

  }
}

async function loginGarrudos() {

  const senhaDigitada = document.getElementById("senha").value;

  const senhaHash = "f5358d49aaca1d2586eed00c861715fbdf8bcc163c63f2595ba5f7b223e17c70";

  const encoder = new TextEncoder();

  const data = encoder.encode(senhaDigitada);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === senhaHash) {

    localStorage.setItem("auth", "true");

    window.location.href = "garrudos.html";

  } else {

    document.getElementById("erro").innerText =
      "Senha incorreta 🎮";

  }
}

async function loginFotos() {

  const senhaDigitada = document.getElementById("senha").value;

  const senhaHash = "ce96a918faad6070164133e2d45feef9aefc78b6bdfc8cc5b2eff3aded8e4151";

  const encoder = new TextEncoder();

  const data = encoder.encode(senhaDigitada);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === senhaHash) {

    localStorage.setItem("auth", "true");

    window.location.href = "julia.html";

  } else {

    document.getElementById("erro").innerText =
      "Senha incorreta 🎮";

  }
}

async function loginSera() {

  const senhaDigitada = document.getElementById("senha").value;

  const senhaHash = "3a92db8e4321b7307efb35069e3aa62d31994a1efac094602bfe35afe25d1cc9";

  const encoder = new TextEncoder();

  const data = encoder.encode(senhaDigitada);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === senhaHash) {

    localStorage.setItem("auth", "true");

    window.location.href = "talvez.html";

  } else {

    document.getElementById("erro").innerText =
      "Senha incorreta 🎮";

  }
}

async function loginHoje() {

  const senhaDigitada = document.getElementById("senha").value;

  const senhaHash = "175ff2cb577f2b6e1b9c2ffc896a65dcb66caf60f0358ce61da42687d7d7d56a";

  const encoder = new TextEncoder();

  const data = encoder.encode(senhaDigitada);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === senhaHash) {

    localStorage.setItem("auth", "true");

    window.location.href = "1506.html";

  } else {

    document.getElementById("erro").innerText =
      "Senha incorreta 🎮";

  }
}


async function loginAmanha() {

  const senhaDigitada = document.getElementById("senha").value;

  const senhaHash = "37cc7a10515690136ae7758fb7c9dd5d7c3bfc82345bf0ed10c64613762ab8e3";

  const encoder = new TextEncoder();

  const data = encoder.encode(senhaDigitada);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === senhaHash) {

    localStorage.setItem("auth", "true");

    window.location.href = "1606.html";

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