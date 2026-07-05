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

  const inicio = 04 * 60 + 10

  const fim = 04 * 60 + 11

  if (minutosAtuais >= inicio && minutosAtuais <= fim) {
    area.style.display = 'block'
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const telas = document.querySelectorAll('.tela')
  const botoes = document.querySelectorAll('.btnProximo')

  let atual = 0

  function mostrarTela(index) {
    telas.forEach((tela, i) => {
      tela.classList.toggle('ativa', i === index)
    })
  }

  function proximaTela() {
    if (atual < telas.length - 1) {
      atual++
      mostrarTela(atual)
    }
  }

  // inicia na primeira tela
  mostrarTela(atual)

  // eventos dos botões
  botoes.forEach(btn => {
    btn.addEventListener('click', proximaTela)
  })

  // opcional: avançar com Enter ou Espaço
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      proximaTela()
    }
  })
})

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('porque-page')) {
    return
  }

  const cenas = document.querySelectorAll('.cena')
  const botoes = document.querySelectorAll('.btnProximo')

  let atual = 0

  function mostrarCena(indice) {
    cenas.forEach(cena => {
      cena.classList.remove('ativa')
    })

    cenas[indice].classList.add('ativa')

    // sempre volta o scroll da tela final para o topo
    const final = cenas[indice].querySelector('.final')

    if (final) {
      final.scrollTop = 0
    }
  }

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      if (atual >= cenas.length - 1) return

      atual++

      mostrarCena(atual)
    })
  })

  // atalhos no teclado

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (atual < cenas.length - 1) {
        atual++

        mostrarCena(atual)
      }
    }

    if (e.key === 'ArrowLeft') {
      if (atual > 0) {
        atual--

        mostrarCena(atual)
      }
    }
  })

  // inicia

  mostrarCena(0)
})

// ======================================================
// 100 MOTIVOS
// ======================================================

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('motivos-page')) return

  // ======================================================
  // ARRAY DOS 100 MOTIVOS
  // ======================================================

  const motivos = [
    'Seu sorriso.',
    'O jeito que você me acalma só de falar comigo.',
    'O jeito que você me faz sentir especial sem nem perceber.',
    'A forma como você consegue mudar meu dia inteiro.',
    'O jeito que sua presença me faz bem.',
    'O brilho dos seus olhos quando você sorri.',
    'A paz que eu sinto quando estou com você.',
    'O seu abraço, que parece o lugar mais seguro do mundo.',
    'A sua voz, que consegue acalmar qualquer tempestade dentro de mim.',
    'O jeito que você me olha.',
    'Porque você faz qualquer lugar parecer casa.',
    'Porque até os dias ruins ficam mais leves quando você está comigo.',
    'Porque você virou meu pensamento favorito.',
    'Porque conversar com você nunca é suficiente.',
    'Porque eu sempre quero mais um minuto ao seu lado.',
    'Porque você faz meu coração acelerar sem fazer esforço.',
    'Porque você me faz acreditar que o amor pode ser simples.',
    'Porque você é a primeira pessoa que eu quero contar qualquer novidade.',
    'Porque você é meu primeiro pensamento quando acordo.',
    'Porque você continua sendo meu último pensamento antes de dormir.',
    'Porque ouvir seu nome já me faz sorrir.',
    'Porque sua felicidade importa tanto para mim quanto a minha.',
    'Porque eu amo até seus pequenos defeitos.',
    'Porque você é linda até nos momentos em que acha que não é.',
    'Porque você consegue transformar silêncio em conforto.',
    'Porque você nunca precisa fazer muito para me conquistar de novo.',
    'Porque eu me sinto completo quando estou ao seu lado.',
    'Porque eu nunca canso de admirar você.',
    'Porque você faz meu coração encontrar paz.',
    'Porque sua risada é uma das coisas mais bonitas que eu já ouvi.',
    'Porque seu jeito carinhoso me desmonta.',
    'Porque você me inspira a ser alguém melhor.',
    'Porque você desperta o melhor de mim.',
    'Porque você me faz sentir amado.',
    'Porque você faz tudo parecer mais bonito.',
    'Porque qualquer momento ao seu lado vira uma lembrança especial.',
    'Porque você consegue iluminar até meus dias mais escuros.',
    'Porque você é a melhor parte da minha rotina.',
    'Porque você faz meu coração sorrir.',
    'Porque seu carinho vale mais que mil palavras.',
    'Porque eu amo quando você sorri por minha causa.',
    'Porque eu faria qualquer coisa para ver esse sorriso todos os dias.',
    'Porque você me faz sentir em paz só segurando minha mão.',
    'Porque eu nunca me sinto sozinho quando tenho você.',
    'Porque você faz meu mundo ter mais cor.',
    'Porque sua existência já tornou minha vida melhor.',
    'Porque você me mostrou um amor que eu nem sabia que existia.',
    'Porque seu abraço consegue consertar um dia inteiro.',
    'Porque seus olhos contam histórias que eu nunca me canso de ler.',
    'Porque eu amo descobrir novos detalhes em você.',
    'Porque você faz meu coração escolher você todos os dias.',
    'Porque você me faz querer viver o futuro.',
    'Porque eu amo imaginar minha vida ao seu lado.',
    'Porque você me faz acreditar em para sempre.',
    'Porque eu amo cada segundo que passo com você.',
    'Porque qualquer tempo longe de você parece tempo demais.',
    'Porque você faz falta até quando acabou de ir embora.',
    'Porque você é meu lugar favorito no mundo.',
    'Porque você faz meu coração se sentir em casa.',
    'Porque eu nunca imaginei encontrar alguém como você.',
    'Porque você superou todas as expectativas que eu tinha sobre o amor.',
    'Porque eu admiro sua força.',
    'Porque eu admiro seu coração.',
    'Porque você é incrível sem nem perceber.',
    'Porque você é a pessoa mais especial que já entrou na minha vida.',
    'Porque você merece todo amor que existe no mundo.',
    'Porque você faz eu querer cuidar de você para sempre.',
    'Porque eu amo o jeito que você cuida de mim.',
    'Porque eu amo ouvir você falando sobre qualquer assunto.',
    'Porque sua companhia vale mais que qualquer lugar.',
    'Porque você faz qualquer plano ficar perfeito.',
    'Porque até o tédio fica divertido com você.',
    'Porque você me faz rir quando eu mais preciso.',
    'Porque você conhece lados meus que ninguém conhece.',
    'Porque você faz meu coração bater diferente.',
    'Porque você é minha calmaria em meio ao caos.',
    'Porque eu amo seu jeito único de existir.',
    'Porque você é exatamente quem eu sempre procurei.',
    'Porque você faz meus dias valerem a pena.',
    'Porque você tornou minha vida mais feliz.',
    'Porque eu amo cada detalhe do seu jeito.',
    'Porque você faz o tempo passar rápido quando estamos juntos e devagar quando estamos longe.',
    'Porque você é meu maior motivo para sorrir.',
    'Porque você me ensinou que amor está nos pequenos detalhes.',
    'Porque seu carinho é meu lugar favorito.',
    'Porque eu amo quando nossos olhares se encontram.',
    'Porque eu sinto saudade de você antes mesmo de ir embora.',
    'Porque meu coração reconheceu você antes mesmo de eu entender o que sentia.',
    'Porque eu me apaixono por você um pouco mais todos os dias.',
    'Porque eu escolheria você em todas as versões da minha vida.',
    "Porque você transformou um simples 'eu' em um 'nós'.",
    'Porque, se eu pudesse voltar no tempo, ainda escolheria conhecer você.',
    'Porque nenhuma distância muda o tamanho do que eu sinto.',
    'Porque eu encontro paz no som da sua voz.',
    'Porque você é o sonho que eu nem sabia que tinha.',
    'Porque amar você aconteceu da forma mais bonita possível.',
    'Porque você fez meu coração encontrar o lugar onde ele sempre pertenceu.',
    'Porque eu não consigo imaginar um futuro onde você não esteja.',
    'Porque cada batida do meu coração parece chamar pelo seu nome.',
    'Porque, de todas as coincidências da minha vida, você foi a mais bonita.',
    'Porque, entre bilhões de pessoas no mundo, meu coração teve a sorte de encontrar você.',
    'Porque você é, e sempre será, meu motivo favorito.'
  ]

  // ======================================================

  const contador = document.getElementById('contador')
  const titulo = document.getElementById('titulo')
  const texto = document.getElementById('texto')
  const btn = document.getElementById('btn')

  const card = document.getElementById('card')

  const final = document.getElementById('final')
  const finalBox = document.getElementById('finalBox')

  let indice = 0

  // ======================================================
  // PRIMEIRO MOTIVO
  // ======================================================

  contador.innerHTML = 'Motivo 1 de 100'
  titulo.innerHTML = 'Motivo #1'
  texto.innerHTML = motivos[0]

  // ======================================================
  // BOTÃO
  // ======================================================

  btn.addEventListener('click', () => {
    indice++

    if (indice >= motivos.length) {
      abrirFinal()
      return
    }

    trocarMotivo()
  })

  // ======================================================
  // TROCAR MOTIVO
  // ======================================================

  function trocarMotivo() {
    texto.style.opacity = '0'
    titulo.style.opacity = '0'

    setTimeout(() => {
      contador.innerHTML = `Motivo ${indice + 1} de 100`
      titulo.innerHTML = `Motivo #${indice + 1}`
      texto.innerHTML = motivos[indice]

      titulo.style.opacity = '1'
      texto.style.opacity = '1'
    }, 250)
  }

  // ======================================================
  // ESPERA
  // ======================================================

  function esperar(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

  // ======================================================
  // ESCREVER LETRA POR LETRA
  // ======================================================

  function escrever(textoDigitando) {
    return new Promise(resolve => {
      const p = document.createElement('p')

      finalBox.appendChild(p)

      let i = 0

      const intervalo = setInterval(() => {
        p.innerHTML += textoDigitando.charAt(i)

        i++

        if (i >= textoDigitando.length) {
          clearInterval(intervalo)

          resolve()
        }
      }, 35)
    })
  }

  // ======================================================
  // FINAL
  // ======================================================

  async function abrirFinal() {
    card.style.opacity = '0'

    await esperar(600)

    card.style.display = 'none'

    final.classList.add('ativo')

    finalBox.innerHTML = ''

    await escrever('Calculando quantidade de motivos...')

    await esperar(800)

    const numeros = [
      '103...',
      '104...',
      '105...',
      '106...',
      '250...',
      '500...',
      '999...',
      '1.000...',
      '10.000...',
      '100.000...',
      '∞'
    ]

    for (const numero of numeros) {
      finalBox.innerHTML += `<p>${numero}</p>`

      finalBox.scrollTop = finalBox.scrollHeight

      await esperar(450)
    }

    await esperar(1000)

    finalBox.innerHTML += `
          <h2 class="erro">
              ERRO.
          </h2>

          <p>
              Quantidade de motivos excede o limite suportado pelo sistema.
          </p>
      `

    finalBox.scrollTop = finalBox.scrollHeight

    await esperar(1800)

    finalBox.innerHTML += `

          <p class="big">
              Você realmente achou que existiam apenas 100 motivos?
          </p>

          <p>...</p>

          <p>
              Eu poderia passar o resto da minha vida escrevendo...
          </p>

          <p>
              E ainda assim não conseguiria colocar todos aqui.
          </p>

          <br>

          <p class="destaque">
              Porque todos os dias eu encontro um motivo novo para escolher você.
          </p>

          <br>

          <h2>
              ❤️ Eu te amo muito, minha princesa. ❤️
          </h2>

          <p>
              E enquanto eu existir...
              sempre vou encontrar um motivo novo para amar você.
          </p>

          <br>

          <p class="big">
              E a verdade é que...
              nem o infinito seria suficiente para listar tudo.
          </p>

      `

    finalBox.scrollTop = finalBox.scrollHeight
  }
})

// =====================================================
// CÉU
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('ceu-page')) return

  const canvas = document.getElementById('stars')
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()

  window.addEventListener('resize', resize)

  // =====================================================
  // ESTRELAS
  // =====================================================

  const estrelas = []

  for (let i = 0; i < 180; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,

      y: Math.random() * canvas.height,

      r: Math.random() * 2,

      a: Math.random(),

      v: 0.004 + Math.random() * 0.01
    })
  }

  // =====================================================
  // ESTRELAS CADENTES
  // =====================================================

  const shooting = []

  function criarCadente() {
    shooting.push({
      x: Math.random() * canvas.width,

      y: -50,

      vx: -8,

      vy: 8,

      life: 0
    })
  }

  setInterval(() => {
    if (Math.random() < 0.7) {
      criarCadente()
    }
  }, 4000)

  // =====================================================

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // estrelas

    for (const s of estrelas) {
      s.a += s.v

      ctx.beginPath()

      ctx.fillStyle = `rgba(255,255,255,${0.5 + Math.sin(s.a) * 0.5})`

      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)

      ctx.fill()
    }

    // cadentes

    for (let i = shooting.length - 1; i >= 0; i--) {
      const st = shooting[i]

      ctx.beginPath()

      ctx.strokeStyle = 'rgba(255,255,255,.8)'

      ctx.lineWidth = 2

      ctx.moveTo(st.x, st.y)

      ctx.lineTo(st.x + 70, st.y - 70)

      ctx.stroke()

      st.x += st.vx
      st.y += st.vy

      st.life++

      if (st.life > 35) {
        shooting.splice(i, 1)
      }
    }

    requestAnimationFrame(draw)
  }

  draw()

  // =====================================================

  const titulo = document.getElementById('titulo')
  const texto = document.getElementById('texto')
  const btn = document.getElementById('btn')

  setTimeout(() => {
    btn.classList.add('aparecer')
  }, 2500)

  // =====================================================

  const mensagens = [
    {
      titulo: 'Olhe para o céu.',
      texto: 'Existem milhares de estrelas espalhadas por ele.'
    },

    {
      titulo: 'Mesmo tão distante...',
      texto: 'cada uma delas continua brilhando.'
    },

    {
      titulo: 'E sabe...',
      texto: 'sempre que você olhar para o céu...'
    },

    {
      titulo: 'Quero que lembre...',
      texto: 'que talvez eu esteja olhando para ele também...'
    },

    {
      titulo: '...e pensando em você.',
      texto:
        'Porque não importa a distância... você sempre encontra um jeito de aparecer nos meus pensamentos.'
    },

    {
      titulo: '❤️',
      texto:
        'Sempre que olhar para o céu, lembra que existe alguém olhando para ele... pensando exatamente em você.'
    }
  ]

  let etapa = 0

  btn.onclick = () => {
    etapa++

    if (etapa >= mensagens.length) {
      btn.style.display = 'none'
      return
    }

    titulo.style.opacity = 0
    texto.style.opacity = 0

    setTimeout(() => {
      titulo.innerHTML = mensagens[etapa].titulo
      texto.innerHTML = mensagens[etapa].texto

      titulo.style.opacity = 1
      texto.style.opacity = 1

      if (etapa === mensagens.length - 1) {
        btn.innerHTML = '❤️'
      }
    }, 350)
  }
})

/* =====================================================
   LUZ
===================================================== */
if (document.getElementById('pullString')) {
  /* ==========================================================
   UMA LUZ PARA NÓS
   Parte 1
========================================================== */

const body = document.body;

const pull = document.getElementById("pullString");
const lamp = document.querySelector(".lamp");
const lampLight = document.getElementById("lampLight");

const cone = document.getElementById("lightCone");
const glow = document.getElementById("lightGlow");

const particles = document.getElementById("particles");

const message = document.getElementById("message");

const titulo = document.getElementById("titulo");
const linha1 = document.getElementById("linha1");
const linha2 = document.getElementById("linha2");
const linha3 = document.getElementById("linha3");
const linhaFinal = document.getElementById("linhaFinal");

const btn = document.getElementById("btnVoltar");

function go(page){

  window.location.href = page;

}

/* ==========================================================
   ESTADO
========================================================== */

let ligado = false;
let animando = false;

/* ==========================================================
   TEXTO
========================================================== */

const textos = {

    titulo:
        "Você é a minha luz.",

    linha1:
        "Tem gente que só passa pela nossa vida e não deixa nada. Mas você não. Você chegou e mudou completamente o meu caminho, dando um sentido novo para tudo.",

    linha2:
        "Você pegou os meus dias mais comuns e sem graça e os transformou em momentos tão lindos que eu queria que durassem para sempre. Com você, até a rotina vira um abraço.",

    linha3:
        "Mesmo quando tudo dá errado e o cansaço aperta, basta eu lembrar do seu sorriso ou ouvir a sua voz para o meu coração se acalmar e eu encontrar paz de novo.",

    final:
        "Se o mundo inteiro perder a graça e tudo ficar no escuro... eu não me importo. Eu ainda vou escolher, todos os dias, caminhar bem colado ao seu lado."

};

/* ==========================================================
   CLIQUE
========================================================== */

pull.addEventListener("click", () => {

    if(animando) return;

    if(ligado) return;

    iniciarAnimacao();

});

/* ==========================================================
   ANIMAÇÃO DA CORDINHA
========================================================== */

function puxarCordinha(){

    return pull.animate(

        [

            {

                transform:"rotate(0deg)"

            },

            {

                transform:"rotate(18deg)"

            },

            {

                transform:"rotate(-10deg)"

            },

            {

                transform:"rotate(8deg)"

            },

            {

                transform:"rotate(0deg)"

            }

        ],

        {

            duration:550,

            easing:"ease-out"

        }

    ).finished;

}

/* ==========================================================
   BALANÇO DA LUMINÁRIA
========================================================== */

function balancarLampada(){

    return lamp.animate(

        [

            {

                transform:"rotate(0deg)"

            },

            {

                transform:"rotate(3deg)"

            },

            {

                transform:"rotate(-3deg)"

            },

            {

                transform:"rotate(2deg)"

            },

            {

                transform:"rotate(0deg)"

            }

        ],

        {

            duration:1300,

            easing:"ease-out"

        }

    ).finished;

}

/* ==========================================================
   ESPERA
========================================================== */

function esperar(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}

/* ==========================================================
   PISCAR A LÂMPADA
========================================================== */

async function piscarLuz(){

  for(let i=0;i<2;i++){

      lampLight.style.background="#ffe38d";

      lampLight.style.boxShadow=`
          0 0 15px #ffe38d,
          0 0 35px #ffd55f,
          0 0 70px #ffd55f
      `;

      await esperar(140);

      lampLight.style.background="#222";
      lampLight.style.boxShadow="none";

      await esperar(120);

  }

  lampLight.style.background="#ffe38d";

  lampLight.style.boxShadow=`
      0 0 15px #ffe38d,
      0 0 35px #ffd55f,
      0 0 70px #ffd55f
  `;

}

/* ==========================================================
 PARTÍCULAS
========================================================== */

function criarParticulas(){

  if(!particles) return;

  for(let i=0;i<45;i++){

      const p=document.createElement("div");

      const size=Math.random()*6+2;

      p.style.position="absolute";
      p.style.borderRadius="50%";
      p.style.background="#ffe28b";

      p.style.width=size+"px";
      p.style.height=size+"px";

      p.style.left=
          (window.innerWidth/2+(Math.random()-.5)*350)+"px";

      p.style.top=
          (170+Math.random()*220)+"px";

      p.style.opacity="1";

      p.style.boxShadow="0 0 10px #ffe28b";

      particles.appendChild(p);

      const x=(Math.random()-.5)*250;
      const y=150+Math.random()*200;

      p.animate(

          [

              {

                  transform:"translate(0,0) scale(1)",

                  opacity:1

              },

              {

                  transform:`translate(${x}px,${y}px) scale(.2)`,

                  opacity:0

              }

          ],

          {

              duration:2500+Math.random()*1000,

              easing:"ease-out"

          }

      );

      setTimeout(()=>{

          p.remove();

      },3500);

  }

}

/* ==========================================================
 DIGITAÇÃO
========================================================== */

async function escrever(el,texto){

  el.textContent="";

  for(const letra of texto){

      el.textContent+=letra;

      await esperar(22);

  }

}

/* ==========================================================
 ANIMAÇÃO PRINCIPAL
========================================================== */

async function iniciarAnimacao(){

  animando=true;

  await puxarCordinha();

  balancarLampada();

  await piscarLuz();

  body.classList.add("light-on");

  criarParticulas();

  message.classList.add("show");

  await esperar(600);

  await escrever(titulo,textos.titulo);

  await esperar(400);

  await escrever(linha1,textos.linha1);

  await esperar(350);

  await escrever(linha2,textos.linha2);

  await esperar(350);

  await escrever(linha3,textos.linha3);

  await esperar(500);

  await escrever(linhaFinal,textos.final);

  btn.classList.add("show");

  ligado=true;

  animando=false;

}

/* ==========================================================
 RESPIRAÇÃO DA LUZ
========================================================== */

setInterval(()=>{

  if(!ligado) return;

  lampLight.animate(

      [

          {

              opacity:.9

          },

          {

              opacity:1

          },

          {

              opacity:.9

          }

      ],

      {

          duration:1800,

          easing:"ease-in-out"

      }

  );

},2200);

}

/* ==========================================================
   HEART ANIMATION
   Parte 1
========================================================== */

if (document.getElementById('heartContainer')) {
 /* ==========================================================
   CORAÇÃO DE FRASES
   Parte 1
========================================================== */

const container = document.getElementById("heartContainer");
const stars = document.getElementById("stars");

/* ==========================================================
   FRASES
========================================================== */

const frases = [

    "Eu amo você",

    "Você é meu lar",

    "Meu lugar favorito",

    "Meu porto seguro",

    "Seu sorriso",

    "Seu abraço",

    "Seu olhar",

    "Minha paz",

    "Minha felicidade",

    "Minha pessoa favorita",

    "Meu amor",

    "Nós",

    "Sempre você",

    "Para sempre",

    "Ainda escolheria você",

    "Meu coração escolheu você",

    "Você mudou minha vida",

    "Tudo fica melhor com você",

    "Você ilumina meus dias",

    "Meu futuro",

    "Você vale a pena",

    "Meu motivo favorito",

    "Você é incrível",

    "Meu mundo",

    "Minha melhor coincidência"

];

/* ==========================================================
   CONFIGURAÇÕES
========================================================== */

const SCALE = 18;

const TOTAL = 220;

const SPEED = 0.0035;

/* ==========================================================
   LISTA DAS FRASES
========================================================== */

const words = [];

/* ==========================================================
   ESTRELAS
========================================================== */

function criarEstrelas(){

    if(!stars) return;

    for(let i=0;i<120;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.opacity=.2+Math.random()*.8;

        star.style.animationDelay=Math.random()*5+"s";

        stars.appendChild(star);

    }

}

criarEstrelas();

/* ==========================================================
   EQUAÇÃO DO CORAÇÃO
========================================================== */

function heartPoint(t){

    const x =
        16*Math.pow(Math.sin(t),3);

    const y =
        13*Math.cos(t)
        -5*Math.cos(2*t)
        -2*Math.cos(3*t)
        -Math.cos(4*t);

    return{

        x,

        y

    };

}

/* ==========================================================
   FRASE ALEATÓRIA
========================================================== */

function randomPhrase(){

    return frases[
        Math.floor(
            Math.random()*frases.length
        )
    ];

}

/* ==========================================================
   CRIA UMA FRASE
========================================================== */

function criarWord(indice){

    const div=document.createElement("div");

    div.className="loveWord";

    div.textContent=randomPhrase();

    container.appendChild(div);

    words.push({

        element:div,

        t:(Math.PI*2)*(indice/TOTAL),

        speed:SPEED+(Math.random()*0.0015),

        offset:(Math.random()-0.5)*2

    });

}

/* ==========================================================
   CRIA TODAS AS FRASES
========================================================== */

for(let i=0;i<TOTAL;i++){

    criarWord(i);

}

/* ==========================================================
   ANIMAR CORAÇÃO (Parte 2)
========================================================== */

function atualizarPosicoes() {
  // Pega o centro atual da tela para manter o coração sempre no meio
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  words.forEach((word) => {
      // Atualiza o ângulo 't' para fazer a frase andar pela curva
      word.t += word.speed;
      if (word.t > Math.PI * 2) {
          word.t -= Math.PI * 2;
      }

      // Pega as coordenadas X e Y da equação matemática do coração
      const pos = heartPoint(word.t);

      // Aplica a escala para definir o tamanho real do coração na tela
      // O eixo Y na matemática é invertido em relação ao topo da tela, por isso o sinal de menos (-)
      const posX = centerX + pos.x * SCALE;
      const posY = centerY - pos.y * SCALE;

      /* --------------------------------------------------
         CÁLCULO DA ROTAÇÃO (ÂNGULO TANGENTE)
         Derivada da equação do coração para fazer a palavra
         ficar alinhada perfeitamente com a curva.
      -------------------------------------------------- */
      const dx = 48 * Math.pow(Math.sin(word.t), 2) * Math.cos(word.t);
      const dy = -13 * Math.sin(word.t) + 10 * Math.sin(2 * word.t) + 6 * Math.sin(3 * word.t) + 4 * Math.sin(4 * word.t);
      
      let angle = Math.atan2(-dy, dx); // Inverte dy para alinhar com o eixo do browser

      // Aplica os estilos no elemento HTML
      word.element.style.left = `${posX}px`;
      word.element.style.top = `${posY}px`;
      word.element.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
  });

  // Cria o loop contínuo e suave de 60 FPS interno (esse DEVE continuar aqui dentro)
  requestAnimationFrame(atualizarPosicoes);
}

// ==========================================================
// INICIALIZAÇÃO OTIMIZADA PARA O GITHUB PAGES
// ==========================================================
window.addEventListener("load", () => {
    // Dá um micro-segundo para o navegador respirar após carregar tudo
    setTimeout(() => {
        requestAnimationFrame(atualizarPosicoes);
    }, 100);
});

/* ==========================================================
 RESPONSIVIDADE
========================================================== */
window.addEventListener("resize", () => {
    // Se você não mudou o topo do script ainda, use apenas o comentário original ou atualize as variáveis
});

} // Fecha o "if (document.getElementById('heartContainer'))" do início do arquivo

/* ==========================================================
   MATH PAGE
========================================================== */

const titulo = document.getElementById("titulo");
const linha1 = document.getElementById("linha1");
const linha2 = document.getElementById("linha2");
const linha3 = document.getElementById("linha3");
const linha4 = document.getElementById("linha4");
const linha5 = document.getElementById("linha5");
const linha6 = document.getElementById("linha6");

const equacao = document.getElementById("equacao");
const fraseFinal = document.getElementById("fraseFinal");

const btnGeo = document.getElementById("btnGeo");
const particles = document.getElementById("particles");

/* ==========================================================
   SEGURANÇA
========================================================== */

if (!titulo) {

    throw new Error("math.html não encontrado.");

}

/* ==========================================================
   TEXTO
========================================================== */

const textos = {

    titulo:
        "A Matemática Também Ama",

    l1:
        "Você sabe que matemática sempre foi minha matéria favorita.",

    l2:
        "Talvez porque ela consiga explicar tantas coisas usando apenas lógica, símbolos e números.",

    l3:
        "Você nunca gostou muito dela... mas existe algo que acho que você vai gostar de descobrir.",

    l4:
        "Existem equações capazes de desenhar um coração perfeito no plano cartesiano.",

    l5:
        "Achei incrível perceber que até a matemática consegue desenhar aquilo que eu sinto quando estou com você.",

    l6:
        "Mas existe uma diferença importante...",

    final:
        "A matemática consegue desenhar um coração. Você conseguiu desenhar o meu."

};

/* ==========================================================
   DIGITAÇÃO
========================================================== */

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

async function escrever(elemento,texto,vel=28){

    elemento.textContent="";

    for(const letra of texto){

        elemento.textContent+=letra;

        await sleep(vel);

    }

}

/* ==========================================================
   EQUAÇÃO
========================================================== */

const heartEquation =
"(x² + y² - 1)³ = x²y³";

/* ==========================================================
   PARTÍCULAS
========================================================== */

function criarParticulas(){

    if(!particles) return;

    for(let i=0;i<35;i++){

        const p=document.createElement("span");

        p.className="mathParticle";

        p.style.left=Math.random()*100+"%";

        p.style.top=Math.random()*100+"%";

        p.style.animationDelay=Math.random()*6+"s";

        p.style.animationDuration=
            (4+Math.random()*5)+"s";

        particles.appendChild(p);

    }

}

criarParticulas();

/* ==========================================================
   ANIMAÇÃO
========================================================== */

async function iniciar(){

    await sleep(600);

    await escrever(titulo,textos.titulo,55);

    await sleep(600);

    await escrever(linha1,textos.l1);

    await sleep(500);

    await escrever(linha2,textos.l2);

    await sleep(500);

    await escrever(linha3,textos.l3);

    await sleep(600);

    await escrever(linha4,textos.l4);

    await sleep(700);

    equacao.style.opacity="1";

    await escrever(equacao,heartEquation,22);

    await sleep(900);

    await escrever(linha5,textos.l5);

    await sleep(700);

    await escrever(linha6,textos.l6);

    await sleep(900);

    await escrever(fraseFinal,textos.final,34);

    btnGeo.classList.add("show");

}

iniciar();

/* ==========================================================
   BOTÃO
========================================================== */

btnGeo.addEventListener("click",()=>{

    const eq =
"(x^2+y^2-1)^3=x^2*y^3";

    const url =
"https://www.geogebra.org/graphing?command=" +
encodeURIComponent(eq);

    window.open(url,"_blank");

});

/* ==========================================================
   PARTÍCULAS
========================================================== */

const style=document.createElement("style");

style.innerHTML=`

.mathParticle{

position:absolute;

width:3px;

height:3px;

border-radius:50%;

background:#ffffff;

opacity:.25;

animation:mathFloat linear infinite;

}

@keyframes mathFloat{

0%{

transform:translateY(0);

opacity:.15;

}

50%{

opacity:.8;

}

100%{

transform:translateY(-70px);

opacity:0;

}

}

`;

document.head.appendChild(style);