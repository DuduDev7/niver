const paginasPublicas = [
  "index.html",
  "login.html",
  "login2.html"
];

const paginaAtual = window.location.pathname.split("/").pop();
const autenticado = localStorage.getItem("auth");

if (!paginasPublicas.includes(paginaAtual) && autenticado !== "true") {
  window.location.href = "login.html";
}

function logout(){
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}

function go(p) {
  window.location.href = p;
}

// --- CONTROLE DOS BOTÕES DE LOGIN (PÁGINA 1 E PÁGINA 2) ---
const campoErro = document.getElementById("erro");


// --------------------------------------------------------

// Lógica do botão "Não" que foge
const botaoNao = document.getElementById("nao");
if(botaoNao){
    botaoNao.addEventListener("mouseenter", () => {
        const larguraTela = window.innerWidth - botaoNao.offsetWidth;
        const alturaTela = window.innerHeight - botaoNao.offsetHeight;

        const novaPosicaoX = Math.random() * larguraTela;
        const novaPosicaoY = Math.random() * alturaTela;

        botaoNao.style.left = `${novaPosicaoX}px`;
        botaoNao.style.top = `${novaPosicaoY}px`;
        botaoNao.style.transform = "translate(-50%, -50%)";
    });
}

// Lógica de exibição dos itens em lista (animação)
const itens = document.querySelectorAll(".item");
const checks = document.querySelectorAll(".check");
const resultado = document.getElementById("resultado");

if(itens.length > 0){
    itens.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
            setTimeout(() => {
                checks[index].classList.remove("hidden");
            }, 500);
        }, index * 1200);
    });

    setTimeout(() => {
        resultado.classList.add("show");
    }, itens.length * 1200 + 800);
}

const textos = [
  "Verificando sentimentos...",
  "Analisando conversas...",
  "Relembrando momentos...",
  "Calculando saudade...",
  "Acessando coração...",
  "Conteúdo encontrado...",
  "Acesso concedido ❤️"
];

let i = 0;

const status = document.getElementById("status");

const intervalo = setInterval(() => {

  status.textContent = textos[i];

  i++;

  if (i >= textos.length) {

    clearInterval(intervalo);

    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      document.getElementById("carta").style.display = "block";
    }, 1000);

  }

}, 1200);