const paginasPublicas = ['index.html', 'login.html', 'login2.html']

const paginaAtual = window.location.pathname.split('/').pop()
const autenticado = localStorage.getItem('auth')

if (!paginasPublicas.includes(paginaAtual) && autenticado !== 'true') {
  window.location.href = 'login.html'
}

function logout() {
  localStorage.removeItem('auth')
  window.location.href = 'login.html'
}

function go(p) {
  window.location.href = p
}

/* ========================= */
/* BOTÃO NÃO */
/* ========================= */

const botaoNao = document.getElementById('nao')

if (botaoNao) {
  const moverBotao = () => {
    const larguraTela = window.innerWidth - botaoNao.offsetWidth
    const alturaTela = window.innerHeight - botaoNao.offsetHeight

    botaoNao.style.left = `${Math.random() * larguraTela}px`
    botaoNao.style.top = `${Math.random() * alturaTela}px`
    botaoNao.style.transform = 'none'
  }

  botaoNao.addEventListener('mouseenter', moverBotao)
  botaoNao.addEventListener('click', moverBotao)
  botaoNao.addEventListener('touchstart', moverBotao)
}

/* ========================= */
/* ANÁLISE */
/* ========================= */

const itens = document.querySelectorAll('.item')
const checks = document.querySelectorAll('.check')
const resultado = document.getElementById('resultado')

if (itens.length > 0) {
  itens.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show')

      if (checks[index]) {
        setTimeout(() => {
          checks[index].classList.remove('hidden')
        }, 500)
      }
    }, index * 1200)
  })

  if (resultado) {
    setTimeout(() => {
      resultado.classList.add('show')
    }, itens.length * 1200 + 800)
  }
}

/* ========================= */
/* LOADING ARQUIVO CONFIDENCIAL */
/* ========================= */

const status = document.getElementById('status')

if (status) {
  const textos = [
    'Verificando sentimentos...',
    'Analisando conversas...',
    'Relembrando momentos...',
    'Calculando saudade...',
    'Acessando coração...',
    'Conteúdo encontrado...',
    'Acesso concedido ❤️'
  ]

  let i = 0

  const intervalo = setInterval(() => {
    status.textContent = textos[i]

    i++

    if (i >= textos.length) {
      clearInterval(intervalo)

      setTimeout(() => {
        const loading = document.getElementById('loading')

        const carta = document.getElementById('carta')

        if (loading) {
          loading.style.display = 'none'
        }

        if (carta) {
          carta.style.display = 'block'
        }
      }, 1000)
    }
  }, 1200)
}

/* ========================= */
/* PROCESSO SELETIVO */
/* ========================= */

function iniciarProcesso() {
  const itensProcesso = document.querySelectorAll('.processo')

  const resultado = document.getElementById('resultadoProcesso')

  itensProcesso.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('hidden')
    }, index * 1000)
  })

  setTimeout(() => {
    if (resultado) {
      resultado.innerHTML = '🏆 Parabéns. Você foi aprovada há muito tempo.'

      resultado.style.opacity = '1'
    }
  }, 6000)
}

/* ========================= */
/* IA */
/* ========================= */

function perguntarIA() {
  const pergunta = document.getElementById('pergunta').value.toLowerCase()

  let resposta = ''

  if (pergunta.includes('julia')) {
    resposta = 'Uma das melhores pessoas que já passaram pela minha vida.'
  } else if (pergunta.includes('importancia')) {
    resposta = 'Mais do que eu provavelmente demonstrei.'
  } else if (pergunta.includes('acontecimento')) {
    resposta =
      'Um daqueles acontecimentos que mudam a forma como a gente enxerga os próprios dias.'
  } else if (pergunta.includes('saudade')) {
    resposta = 'Sim. Mais vezes do que eu gostaria de admitir.'
  } else if (pergunta.includes('felicidade')) {
    resposta = 'Muitas das minhas memórias favoritas têm você em algum lugar.'
  } else if (pergunta.includes('futuro')) {
    resposta = 'Eu gostaria muito que você fizesse parte dele.'
  } else if (pergunta.includes('nós')) {
    resposta = 'Talvez eu nunca tenha deixado de acreditar um pouco em nós.'
  } else if (pergunta.includes('amor')) {
    resposta =
      'Tem sentimentos que a gente demora para entender. Outros que a gente entende rápido e tem medo de admitir.'
  } else if (pergunta.includes('medo')) {
    resposta = 'Perder alguém que se tornou importante demais.'
  } else if (pergunta.includes('mensagem')) {
    resposta =
      'Você não faz ideia da quantidade de vezes que uma simples notificação sua mudou meu dia.'
  } else if (pergunta.includes('sorriso')) {
    resposta = 'Sempre foi uma das minhas coisas favoritas.'
  } else if (pergunta.includes('especial')) {
    resposta = 'Muito mais do que você imagina.'
  } else if (pergunta.includes('valor')) {
    resposta = 'Incalculável.'
  } else if (pergunta.includes('segredo')) {
    resposta = 'A maioria dos meus segredos tem você envolvida de alguma forma.'
  } else if (pergunta.includes('esquecer')) {
    resposta = 'Nunca pareceu uma opção muito interessante.'
  } else if (pergunta.includes('escolha')) {
    resposta = 'Se eu pudesse voltar no tempo, ainda escolheria conhecer você.'
  } else if (pergunta.includes('verdade')) {
    resposta =
      'A verdade é que você se tornou importante para mim muito antes de eu perceber isso.'
  } else if (pergunta.includes('secrety')) {
    const iaResp = document.getElementById('iaResp')

    const mensagens = [
      '🔍 Procurando registros...',
      '📂 Acessando arquivos...',
      '🧠 Lendo memória...',
      '❤️ Encontrado.'
    ]

    let etapa = 0

    iaResp.innerHTML = mensagens[0]

    const timer = setInterval(() => {
      etapa++

      if (etapa < mensagens.length) {
        iaResp.innerHTML = mensagens[etapa]
      } else {
        clearInterval(timer)

        setTimeout(() => {
          window.location.href = 'iaS.html'
        }, 1000)
      }
    }, 1500)

    return
  } else {
    const respostas = [
      '🤖 Não sei responder isso.',

      '📊 Dados insuficientes.',

      '❤️ Mas provavelmente envolve a Júlia.',

      '⚠ Sistema tendencioso.'
    ]

    resposta = respostas[Math.floor(Math.random() * respostas.length)]
  }

  escreverIA(resposta)
}

function escreverIA(texto) {
  const campo = document.getElementById('iaResp')

  campo.innerHTML = '...'

  setTimeout(() => {
    campo.innerHTML = ''

    let i = 0

    const timer = setInterval(() => {
      campo.innerHTML += texto.charAt(i)

      i++

      if (i >= texto.length) {
        clearInterval(timer)
      }
    }, 25)
  }, 400)
}

/* ========================= */
/* ARQUIVO PERDIDO */
/* ========================= */

function abrirArquivo() {
  const resultado = document.getElementById('arquivoResultado')

  resultado.innerHTML = ''

  const linhas = [
    '🔍 Procurando arquivo especial...',

    '📂 Abrindo 2020.zip...',
    '❌ Nada encontrado.',

    '📂 Abrindo 2021.zip...',
    '❌ Nada encontrado.',

    '📂 Abrindo 2022.zip...',
    '❌ Nada encontrado.',

    '📂 Abrindo 2023.zip...',
    '❌ Nada encontrado.',

    '📂 Abrindo 2024.zip...',
    '❌ Nada encontrado.',

    '📂 Abrindo 2025.zip...',
    '❌ Nada encontrado.',

    '📂 Abrindo 2026.zip...',
    '❤️ Arquivo encontrado.',

    '<br><strong>Nome:</strong> Julia.exe',
    '<br><strong>Status:</strong> Favorito',
    '<br><strong>Prioridade:</strong> Máxima',
    '<br><strong>Observação:</strong> Sistema se recusou a excluir este arquivo.'
  ]

  let i = 0

  const timer = setInterval(() => {
    resultado.innerHTML += `<p>${linhas[i]}</p>`

    i++

    if (i >= linhas.length) {
      clearInterval(timer)
    }
  }, 800)
}

// LEIA-ME

const tituloLivro = document.getElementById('tituloLivro')

if (tituloLivro) {
  let cliques = 0

  tituloLivro.addEventListener('click', () => {
    cliques++

    if (cliques === 3) {
      tituloLivro.textContent = '📖 Hmm...'
    }

    if (cliques === 4) {
      tituloLivro.textContent = '📖 Tem algo escondido aqui...'
    }

    if (cliques >= 5) {
      window.location.href = 'secreta.html'
    }
  })
}

// CONTADOR DO PROJETO

const contadorDias = document.getElementById('diasProjeto')

if (contadorDias) {
  const inicio = new Date('2026-04-11')

  const hoje = new Date()

  const dias = Math.floor((hoje - inicio) / 86400000)

  contadorDias.innerHTML = dias + ' dias'
}

// =========================
// SEGREDO POST-IT
// =========================

const postitSegredo = document.getElementById('postitSecreto')

const msgPostit = document.getElementById('msgPostit')

const mensagensPostit = [
  '',
  '',
  '',
  '',
  '🤔 Você está procurando algo ?',
  '⚠️ Está quase...',
  '🔓 Encontrado.'
]

if (postitSegredo) {
  let cliquesPostit = 0

  postitSegredo.addEventListener('click', () => {
    cliquesPostit++

    if (cliquesPostit <= mensagensPostit.length) {
      msgPostit.innerHTML = mensagensPostit[cliquesPostit - 1]
    }

    if (cliquesPostit >= 7) {
      setTimeout(() => {
        window.location.href = '../postit.html'
      }, 1000)
    }
  })
}

// =========================
// SEGREDO GARRUDOS
// =========================

const fotoSegredo = document.getElementById('garrudosS')

const msgFoto = document.getElementById('msgFoto')

const mensagensFoto = [
  '',
  '',
  '',
  '',
  'Você realmente está clicando nisso?',
  '😑 Não precisava né...',
  '🔓 Encontrado.'
]

if (fotoSegredo) {
  let cliquesFoto = 0

  fotoSegredo.addEventListener('click', () => {
    cliquesFoto++

    if (cliquesFoto <= mensagensFoto.length) {
      msgFoto.innerHTML = mensagensFoto[cliquesFoto - 1]
    }

    if (cliquesFoto >= 7) {
      setTimeout(() => {
        window.location.href = 'garrudosS.html'
      }, 1000)
    }
  })
}

// WIKIPEDIA

const wiki = document.getElementById('wiki')

if (wiki) {
  let cliques = 0

  wiki.addEventListener('click', () => {
    cliques++

    if (cliques === 3) {
      wiki.textContent = '📖 Não continua'
    }

    if (cliques === 4) {
      wiki.textContent = '📖 Para Julia'
    }

    if (cliques >= 7) {
      window.location.href = 'wikiS.html'
    }
  })
}

// ======================
// SEQUÊNCIA SECRETA
// processo -> convite -> arquivo -> wikipedia -> ia
// ======================

function registrarSequencia(pagina) {
  let sequencia = JSON.parse(localStorage.getItem('sequenciaSecreta')) || []

  sequencia.push(pagina)

  if (sequencia.length > 5) {
    sequencia.shift()
  }

  localStorage.setItem('sequenciaSecreta', JSON.stringify(sequencia))

  const correta = ['processo', 'convite', 'arquivo', 'wikipedia', 'ia']

  if (JSON.stringify(sequencia) === JSON.stringify(correta)) {
    localStorage.removeItem('sequenciaSecreta')

    window.location.href = 'coincidencia.html'
  }
}

// =========================
// SEGREDO FLOR 
// =========================

const florSegredo = document.getElementById('flor')

if (florSegredo) {
  let cliques = 0

  florSegredo.addEventListener('click', () => {
    cliques++

    if (cliques === 5) {
      msgFoto.textContent = 'PARA'
    }

    if (cliques === 6) {
      msgFoto.textContent = 'Não Continua!'
    }

    if (cliques >= 7) {
      window.location.href = 'flor.html'
    }
  })
}

const titulo = document.querySelector('.secret-box h1')

if (titulo) {
  const texto = titulo.textContent

  titulo.textContent = ''

  let i = 0

  const timer = setInterval(() => {
    titulo.textContent += texto.charAt(i)

    i++

    if (i >= texto.length) {
      clearInterval(timer)
    }
  }, 50)
}

const inicio = new Date("2026-04-11");

const tempoEspecial =
document.getElementById("tempoEspecial");

if(tempoEspecial){

  setInterval(()=>{

    const agora = new Date();

    const diff =
    agora - inicio;

    const dias =
    Math.floor(diff / 86400000);

    const horas =
    Math.floor(diff / 3600000) % 24;

    const minutos =
    Math.floor(diff / 60000) % 60;

    tempoEspecial.innerHTML =
    `${dias} dias, ${horas}h e ${minutos}min`;

  },1000);

}

// LINHA DE DESCOBERTA 

const timelineLinha =
document.getElementById("timelineLinha")

const timelineTexto =
document.getElementById("timelineTexto")

if(timelineLinha){

  const paginas = [

    "segredo0",
    "segredo1",
    "segredo2",
    "segredo3",
    "segredo4"

  ]

  let encontrados = 0

  let linha = ""

  paginas.forEach((item,index)=>{

    if(localStorage.getItem(item)){

      linha += "●"

      encontrados++

    }else{

      linha += "○"
    }

    if(index < paginas.length - 1){

      linha += "────"
    }

  })

  timelineLinha.innerHTML = linha

  timelineTexto.innerHTML =
  `${encontrados} de ${paginas.length} registros recuperados`

}   // SE QUISER ZERAR = localStorage.clear()

// function resetarSegredos(){

//   localStorage.clear()

//   location.reload()

// }