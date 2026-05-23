const paginasPublicas = [
  "index.html",
  "login.html"
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
  window.location.href = p
}

// let imgs = [
//   null, // 👈 primeiro é o "mistério"
//   'imgs/nossa.jpeg',
//   'imgs/missi.jpeg',
//   'imgs/camp.jpeg',
//   'imgs/arthur.jpeg',
//   'imgs/sesi.jpeg'
// ]

// let textos = ['❤️', '', '', '']

// let i = 0

// function next() {
//   i = (i + 1) % imgs.length

//   const img = document.getElementById('img')
//   const txt = document.getElementById('texto')

//   if (imgs[i] === null) {
//     img.style.display = 'none'
//     txt.innerText = textos[i]
//     txt.className = 'misterio-text'
//   } else {
//     img.style.display = 'block'
//     img.src = imgs[i]
//     txt.innerText = ''
//   }
// }

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