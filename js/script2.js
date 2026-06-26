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

// 100 MOTIVOS

const motivos = [
  "Seu sorriso",
  "O jeito que você me acalma só de falar comigo.",
  "O jeito que você me faz sentir especial sem nem perceber.",
  "A forma como você consegue mudar meu dia inteiro.",
  "O jeito que sua presença me faz bem, mesmo em silêncio.",
  "O modo como você me faz sorrir sem esforço.",
  "O jeito que você me entende sem eu precisar explicar tudo.",
  "O conforto que eu sinto quando você está por perto.",
  "O jeito que você me passa paz.",
  "A forma como você me faz querer ser melhor.",
  "O jeito que você me faz sentir em casa.",

  "O jeito que você me faz esquecer qualquer problema.",
  "O modo como você fica na minha mente o dia inteiro.",
  "O jeito que você me faz sentir importante.",
  "O jeito que você me escuta de verdade.",
  "O quanto você me faz falta quando some por pouco tempo.",
  "O jeito que você consegue ser tudo pra mim sem perceber.",
  "O modo como você me acalma só com uma mensagem.",
  "O jeito que você me deixa feliz com coisas simples.",
  "O jeito que você me faz acreditar em nós.",
  "O jeito que você me faz querer continuar conversando pra sempre.",

  "O jeito que seu sorriso mexe comigo.",
  "O jeito que sua voz me faz bem.",
  "O jeito que seu olhar me prende.",
  "O jeito que você me trata com carinho.",
  "O jeito que você me faz sentir escolhido.",
  "O jeito que você me faz sentir único.",
  "O jeito que você me faz esquecer o resto do mundo.",
  "O jeito que você se importa comigo.",
  "O jeito que você percebe quando eu não estou bem.",
  "O jeito que você tenta me entender mesmo quando é difícil.",

  "O jeito que você me faz querer te proteger.",
  "O jeito que você me faz querer ficar mais perto.",
  "O jeito que você me deixa tranquilo.",
  "O jeito que você me faz sentir leve.",
  "O jeito que você me faz perder a noção do tempo.",
  "O jeito que você me faz feliz sem esforço nenhum.",
  "O jeito que você me faz acreditar em sentimentos bons.",
  "O jeito que você me faz querer ser melhor pra você.",
  "O jeito que você me faz sentir que vale a pena.",
  "O jeito que você me faz querer te escolher sempre.",

  "O jeito que você me faz sentir saudade mesmo falando contigo.",
  "O jeito que você fica na minha cabeça o dia todo.",
  "O jeito que você me faz sorrir sozinho.",
  "O jeito que você me faz sentir vivo.",
  "O jeito que você me faz esquecer de tudo ruim.",
  "O jeito que você me transmite paz sem falar nada.",
  "O jeito que você me faz sentir segurança.",
  "O jeito que você me faz querer cuidar de você.",
  "O jeito que você me faz sentir algo diferente de tudo.",
  "O jeito que você me faz querer ser constante pra você.",

  "O jeito que você me faz sentir que eu não estou sozinho.",
  "O jeito que você me faz querer te ouvir por horas.",
  "O jeito que você me faz sorrir quando nem quero sorrir.",
  "O jeito que você me faz sentir bem comigo mesmo.",
  "O jeito que você me faz esquecer o mundo lá fora.",
  "O jeito que você me faz querer te contar tudo.",
  "O jeito que você me faz sentir leve até nos dias pesados.",
  "O jeito que você me faz querer ser alguém melhor pra você.",
  "O jeito que você me faz sentir que tudo faz sentido.",
  "O jeito que você me faz querer ficar.",

  "O jeito que você me faz gostar mais da vida.",
  "O jeito que você me faz sentir sorte de te conhecer.",
  "O jeito que você me faz querer cuidar do nosso momento.",
  "O jeito que você me faz sentir que eu importo.",
  "O jeito que você me faz sentir que sou visto.",
  "O jeito que você me faz querer ser suficiente pra você.",
  "O jeito que você me faz querer não te perder.",
  "O jeito que você me faz querer construir algo contigo.",
  "O jeito que você me faz sentir paz em você.",
  "O jeito que você me faz ser melhor sem perceber.",

  "O jeito que você me faz te amar sem esforço.",
  "O jeito que você me faz querer você por perto sempre.",
  "O jeito que você me faz sentir que tudo vale a pena.",
  "O jeito que você me faz esquecer o que é solidão.",
  "O jeito que você me faz querer ficar mesmo quando tudo complica.",
  "O jeito que você me faz sentir algo que não sei explicar.",
  "O jeito que você me faz querer te proteger de tudo.",
  "O jeito que você me faz acreditar em nós dois.",
  "O jeito que você me faz querer continuar aqui.",
  "O jeito que você simplesmente é você comigo.",
  "O jeito que você me faz querer ficar mesmo quando tudo está confuso.",
  "O jeito que você me faz sentir que eu sou suficiente.",
  "O jeito que você me faz sorrir mesmo sem motivo nenhum.",
  "O jeito que você me faz sentir que tudo pode dar certo.",
  "O jeito que você me faz ter vontade de te contar tudo do meu dia.",
  "O jeito que você me faz sentir calma só de lembrar de você.",
  "O jeito que você me faz querer melhorar sem ninguém pedir.",
  "O jeito que você me faz sentir que existe algo bom no meio do caos.",
  "O jeito que você me faz querer proteger o seu coração.",
  "O jeito que você me faz sentir que amar não é pesado.",
  "O jeito que você me faz querer continuar mesmo nos dias difíceis.",
  "O jeito que você me faz acreditar que eu não preciso de mais ninguém.",
  "O jeito que você simplesmente existe na minha vida."
];

const extras = [
  "101...",
  "102...",
  "103...",
  "104...",
  "999...",
  "1.000...",
  "10.000...",
  "∞"
];

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const btn = document.getElementById("btn");

const card = document.getElementById("card");
const final = document.getElementById("final");

let i = 0;
let modoExtra = false;
let j = 0;

btn.addEventListener("click", () => {

  // Fase 1: 1 a 100
  if (!modoExtra) {

    i++;

    if (i < 100) {
      titulo.innerText = `Motivo #${i + 1}`;
      texto.innerText = motivos[i];
    }

    // chegou no 100
    if (i === 99) {
      modoExtra = true;
      titulo.innerText = "Motivo #100";
      texto.innerText = motivos[99];

      setTimeout(() => {
        card.style.display = "none";
        final.classList.add("ativo");
        iniciarInfinito();
      }, 1200);
    }

    return;
  }
});

// sequência infinita + erro
function iniciarInfinito() {
  const box = document.querySelector(".final-box");

  const interval = setInterval(() => {

    if (j < extras.length) {
      const p = document.createElement("p");
      p.innerText = extras[j];
      box.appendChild(p);
      j++;
    }

    // depois do infinito → erro
    if (j === extras.length) {
      clearInterval(interval);

      setTimeout(() => {
        const erro = document.createElement("h2");
        erro.innerText = "ERRO. Quantidade de motivos excede o limite do sistema.";
        erro.style.color = "#ff4d6d";

        const finalMsg = document.createElement("p");
        finalMsg.innerText = "❤️ Existem infinitos motivos para eu amar você.";

        box.appendChild(erro);
        box.appendChild(finalMsg);
      }, 1200);
    }

  }, 700);
}