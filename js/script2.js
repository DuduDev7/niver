// =========================
// LIRIOS
// =========================

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('lirios-page')) {
    return
  }

  const cenas = document.querySelectorAll('.cena')

  const botoes = document.querySelectorAll('.btnProximo')

  const petalas = document.getElementById('petalas')

  let cenaAtual = 0

  let velocidade = 900

  function criarPetala() {
    const petala = document.createElement('div')

    petala.classList.add('petala')

    petala.innerHTML = '🌸'

    petala.style.left = Math.random() * 100 + 'vw'

    petala.style.fontSize = 18 + Math.random() * 20 + 'px'

    petala.style.animationDuration = 8 + Math.random() * 8 + 's'

    petalas.appendChild(petala)

    setTimeout(() => {
      petala.remove()
    }, 15000)
  }

  function iniciarPetalas() {
    setInterval(() => {
      criarPetala()

      if (cenaAtual >= 2) {
        criarPetala()
      }

      if (cenaAtual === 3) {
        criarPetala()
        criarPetala()
      }
    }, velocidade)
  }

  iniciarPetalas()

  function trocarFundo() {
    if (cenaAtual <= 1) {
      document.body.style.backgroundImage = "url('imgs/liriosClaro.JPEG')"
    } else {
      document.body.style.backgroundImage = "url('imgs/lirios.JPEG')"
    }
  }

  function mostrarCena() {
    cenas.forEach(c => {
      c.classList.remove('ativa')
    })

    cenas[cenaAtual].classList.add('ativa')

    trocarFundo()

    if (cenaAtual === 3) {
      setTimeout(() => {
        const destaque = document.querySelector('.destaque')

        if (destaque) {
          destaque.classList.add('brilho')
        }
      }, 1000)
    }
  }

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      if (cenaAtual < cenas.length - 1) {
        cenaAtual++

        mostrarCena()
      }
    })
  })

  mostrarCena()
})

// =========================
// COORDENADAS
// =========================

if (document.body.classList.contains('coordenadas-page')) {
  const blocos = document.querySelectorAll('.bloco')

  let atual = 0

  function mostrar(id) {
    blocos.forEach(bloco => {
      bloco.classList.remove('ativo')
    })

    document.getElementById(id).classList.add('ativo')
  }

  const btnIniciar = document.getElementById('btnIniciar')

  if (btnIniciar) {
    btnIniciar.addEventListener('click', () => {
      mostrar('bloco2')

      const textos = [
        'Analisando sinais...',
        'Analisando memórias...',
        'Analisando conversas...',
        'Destino encontrado.'
      ]

      let i = 0

      const digitando = document.getElementById('digitando')

      const intervalo = setInterval(() => {
        digitando.innerHTML += textos[i] + '<br>'

        i++

        if (i >= textos.length) {
          clearInterval(intervalo)

          setTimeout(() => {
            mostrar('bloco3')
          }, 2000)
        }
      }, 1500)
    })
  }

  document.querySelectorAll('.btnProximo').forEach(btn => {
    btn.addEventListener('click', () => {
      atual++

      mostrar('bloco' + (atual + 3))

      if (atual === 3) {
        animarNome()
      }
    })
  })

  function animarNome() {
    const letras = ['J', 'JU', 'JUL', 'JULI', 'JULIA']

    const nome = document.getElementById('nomeFinal')

    if (!nome) return

    let i = 0

    const intervalo = setInterval(() => {
      nome.innerHTML = letras[i]

      i++

      if (i >= letras.length) {
        clearInterval(intervalo)
      }
    }, 600)
  }
}

// BANDEIRA

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('bandeira-page')) {
    return
  }

  const telas = document.querySelectorAll('.tela')

  const botoes = document.querySelectorAll('.btnProximo')

  let atual = 0

  function mostrar(indice) {
    telas.forEach(tela => {
      tela.classList.remove('ativa')
    })

    telas[indice].classList.add('ativa')
  }

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      atual++

      if (atual >= telas.length) {
        return
      }

      mostrar(atual)
    })
  })

  mostrar(0)
})

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('podio-page')) {
    return
  }

  const telas = document.querySelectorAll('.tela')

  const botoes = document.querySelectorAll('.btnProximo')

  let telaAtual = 0

  function mostrarTela(indice) {
    telas.forEach(tela => {
      tela.classList.remove('ativa')
    })

    telas[indice].classList.add('ativa')
  }

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      telaAtual++

      if (telaAtual >= telas.length) {
        return
      }

      mostrarTela(telaAtual)

      if (telaAtual === telas.length - 1) {
        const destaque = document.querySelector('.destaque')

        if (destaque) {
          destaque.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }
      }
    })
  })

  mostrarTela(0)
})

// =========================
// REGISTRO POR HORÁRIO
// =========================

document.addEventListener('DOMContentLoaded', () => {
  const area = document.getElementById('areaSurpresa')

  if (!area) return

  const agora = new Date()

  const minutosAtuais = agora.getHours() * 60 + agora.getMinutes()

  const inicio = (04 * 60) + 10

  const fim = (04 * 60) + 11

  if (minutosAtuais >= inicio && minutosAtuais <= fim) {
    area.style.display = 'block'
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const telas = document.querySelectorAll(".tela");
  const botoes = document.querySelectorAll(".btnProximo");

  let atual = 0;

  function mostrarTela(index) {
    telas.forEach((tela, i) => {
      tela.classList.toggle("ativa", i === index);
    });
  }

  function proximaTela() {
    if (atual < telas.length - 1) {
      atual++;
      mostrarTela(atual);
    }
  }

  // inicia na primeira tela
  mostrarTela(atual);

  // eventos dos botões
  botoes.forEach((btn) => {
    btn.addEventListener("click", proximaTela);
  });

  // opcional: avançar com Enter ou Espaço
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      proximaTela();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {

  if (!document.body.classList.contains("porque-page")) {
      return;
  }

  const cenas = document.querySelectorAll(".cena");
  const botoes = document.querySelectorAll(".btnProximo");

  let atual = 0;

  function mostrarCena(indice) {

      cenas.forEach(cena => {

          cena.classList.remove("ativa");

      });

      cenas[indice].classList.add("ativa");

      // sempre volta o scroll da tela final para o topo
      const final = cenas[indice].querySelector(".final");

      if (final) {

          final.scrollTop = 0;

      }

  }

  botoes.forEach(botao => {

      botao.addEventListener("click", () => {

          if (atual >= cenas.length - 1) return;

          atual++;

          mostrarCena(atual);

      });

  });

  // atalhos no teclado

  document.addEventListener("keydown", (e) => {

      if (e.key === "ArrowRight" || e.key === "Enter") {

          if (atual < cenas.length - 1) {

              atual++;

              mostrarCena(atual);

          }

      }

      if (e.key === "ArrowLeft") {

          if (atual > 0) {

              atual--;

              mostrarCena(atual);

          }

      }

  });

  // inicia

  mostrarCena(0);

});

// ======================================================
// 100 MOTIVOS
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

  if (!document.body.classList.contains("motivos-page")) return;

  const motivos = [
      "Seu sorriso.",
      "O jeito que você me acalma só de falar comigo.",
      "O jeito que você me faz sentir especial sem nem perceber.",
      "A forma como você consegue mudar meu dia inteiro.",
      "O jeito que sua presença me faz bem.",
      "O modo como você me faz sorrir sem esforço.",
      "O jeito que você me entende.",
      "O conforto que eu sinto quando você está por perto.",
      "O jeito que você me transmite paz.",
      "A forma como você me faz querer ser melhor.",
      "O jeito que você me faz sentir em casa."
      // Complete até o 100 normalmente
  ];

  const titulo = document.getElementById("titulo");
  const texto = document.getElementById("texto");
  const btn = document.getElementById("btn");

  const card = document.getElementById("card");

  const final = document.getElementById("final");
  const finalBox = document.getElementById("finalBox");

  let indice = -1;
  let iniciou = false;

  // =====================================

  function trocarTexto(novoTitulo, novoTexto){

      card.style.opacity = 0;

      setTimeout(()=>{

          titulo.innerHTML = novoTitulo;
          texto.innerHTML = novoTexto;

          card.style.opacity = 1;

      },350);

  }

  // =====================================

  function mostrarMotivo(){

      indice++;

      if(indice >= motivos.length){

          abrirFinal();

          return;

      }

      trocarTexto(

          `Motivo #${indice+1}`,

          motivos[indice]

      );

      if(indice === 99){

          btn.innerHTML = "Finalizar";

      }

  }

  // =====================================

  btn.addEventListener("click",()=>{

      if(!iniciou){

          iniciou = true;

          btn.innerHTML="Próximo";

          mostrarMotivo();

          return;

      }

      mostrarMotivo();

  });

  // =====================================
  // FINAL
  // =====================================

  function abrirFinal(){

      card.style.display="none";

      final.classList.add("ativo");

      iniciarSistema();

  }

  // =====================================

  function esperar(ms){

      return new Promise(resolve=>{

          setTimeout(resolve,ms);

      });

  }

  // =====================================

  async function iniciarSistema(){

      const linhas=[

          "Calculando quantidade de motivos...",

          "Analisando registros...",

          "Procurando novos motivos...",

          "100 encontrados.",

          "Verificando se existem mais...",

          "500...",

          "2.000...",

          "10.000...",

          "100.000...",

          "1.000.000...",

          "∞"

      ];

      for(const linha of linhas){

          finalBox.innerHTML=

          `<h2>${linha}</h2>`;

          await esperar(900);

      }

      await esperar(1000);

      mostrarMensagemFinal();

  }

  // =====================================

  function mostrarMensagemFinal(){

      finalBox.innerHTML=`

      <h2 class="erro">

      ERRO

      </h2>

      <p>

      Quantidade máxima de motivos excedeu o limite permitido.

      </p>

      <br>

      <p>

      Tentando aumentar capacidade...

      </p>

      <p>

      Falha.

      </p>

      <br><br>

      <p class="big">

      Porque o problema nunca foi encontrar motivos.

      </p>

      <br>

      <p>

      O problema...

      </p>

      <p>

      é que eles nunca acabam.

      </p>

      <br>

      <p>

      Todos os dias você me dá um motivo novo.

      </p>

      <p>

      Toda conversa cria outro.

      </p>

      <p>

      Todo sorriso cria mais um.

      </p>

      <p>

      Toda lembrança cria dezenas deles.

      </p>

      <br>

      <p>

      Amanhã essa lista já será maior.

      </p>

      <p>

      Depois de amanhã também.

      </p>

      <br>

      <p>

      Enquanto eu existir...

      </p>

      <p>

      nunca vou conseguir terminar essa página.

      </p>

      <br>

      <p class="destaque">

      Porque amar você nunca vai caber

      </p>

      <p class="destaque">

      em apenas 100 motivos.

      </p>

      <br><br>

      <p>

      Eu poderia passar o resto da minha vida escrevendo...

      </p>

      <p>

      e ainda assim não conseguiria colocar todos aqui.

      </p>

      <br>

      <p class="destaque">

      Porque todos os dias eu encontro um motivo novo para escolher você.

      </p>

      <br><br>

      <h2>

      ❤️ Eu te amo muito, minha princesa. ❤️

      </h2>

      `;

  }

});