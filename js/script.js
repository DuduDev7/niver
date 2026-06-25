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

      '❤️ Mas provavelmente envolve a Julia.',

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
  const inicio = new Date('2026-05-15')

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

// =========================
// SEGREDO MUSEU
// =========================

const clickMuseu = document.getElementById('LevaMuseu')

if (clickMuseu) {
  let cliques = 0

  clickMuseu.addEventListener('click', () => {
    cliques++

    if (cliques === 5) {
      msgFoto.textContent = 'NÃO VAI'
    }

    if (cliques === 6) {
      msgFoto.textContent = 'PARA, PARA, PARA'
    }

    if (cliques >= 7) {
      window.location.href = 'museu.html'
    }
  })
}

// =========================
// SEGREDO FOTOS
// =========================

const fotos = document.getElementById('fotos')

if (fotos) {
  let cliques = 0

  fotos.addEventListener('click', () => {
    cliques++

    if (cliques === 5) {
      msgFoto.textContent = 'PARA'
    }

    if (cliques === 6) {
      msgFoto.textContent = 'CHEGA !'
    }

    if (cliques >= 7) {
      window.location.href = '../loginFotos.html'
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

const inicio = new Date('2026-04-11')

const tempoEspecial = document.getElementById('tempoEspecial')

if (tempoEspecial) {
  setInterval(() => {
    const agora = new Date()

    const diff = agora - inicio

    const dias = Math.floor(diff / 86400000)

    const horas = Math.floor(diff / 3600000) % 24

    const minutos = Math.floor(diff / 60000) % 60

    tempoEspecial.innerHTML = `${dias} dias, ${horas}h e ${minutos}min`
  }, 1000)
}

// LINHA DE DESCOBERTA

const timelineLinha = document.getElementById('timelineLinha')

const timelineTexto = document.getElementById('timelineTexto')

if (timelineLinha) {
  const paginas = ['segredo0', 'segredo1', 'segredo2', 'segredo3', 'segredo4']

  let encontrados = 0

  let linha = ''

  paginas.forEach((item, index) => {
    if (localStorage.getItem(item)) {
      linha += '●'

      encontrados++
    } else {
      linha += '○'
    }

    if (index < paginas.length - 1) {
      linha += '────'
    }
  })

  timelineLinha.innerHTML = linha

  timelineTexto.innerHTML = `${encontrados} de ${paginas.length} registros recuperados`

  const timelinePorcentagem = document.getElementById('timelinePorcentagem')

  const porcentagem = Math.round((encontrados / paginas.length) * 100)

  timelinePorcentagem.innerHTML = `🔓 ${porcentagem}% desbloqueado`

  const finalLiberado = document.getElementById('finalLiberado')

  if (porcentagem === 100) {
    finalLiberado.style.display = 'block'
  }
}

// SE QUISER ZERAR = localStorage.clear()

// function resetarSegredos(){

//   localStorage.clear()

//   location.reload()

// }

const fotoJulia = document.getElementById('fotoJulia')

const textoFundo = document.getElementById('textoFundo')

if (fotoJulia) {
  const slides = [
    {
      foto: 'imgs/elevador.jpeg',
      fundo: '#537687',
      texto: 'VOCÊ É ABSURDAMENTE LINDA'
    },

    {
      foto: 'imgs/espelho.jpeg',
      fundo: '#52392F',
      texto: 'MAIS LINDA DO QUE IMAGINA'
    },

    {
      foto: 'imgs/gato.jpeg',
      fundo: '#311E18',
      texto: 'PERFEITA ATÉ NOS DETALHES'
    },

    {
      foto: 'imgs/praia.jpeg',
      fundo: '#98570B',
      texto: 'ATÉ O SOL PERDE A DISPUTA'
    },

    {
      foto: 'imgs/perfil.jpeg',
      fundo: '#C47749',
      texto: 'MAIS BONITA QUE QUALQUER PAISAGEM'
    },

    {
      foto: 'imgs/carro.jpeg',
      fundo: '#85CCCA',
      texto: 'MEU OLHAR SEMPRE PROCURA VOCÊ'
    },

    {
      foto: 'imgs/preto.jpeg',
      fundo: '#303030',
      texto: 'VOCÊ SE TORNOU INESQUECÍVEL'
    },

    {
      foto: 'imgs/especial.jpeg',
      fundo: '#D13B33',
      texto: 'TE AMO MUITO ❤️'
    }
  ]

  let atual = 0

  fotoJulia.addEventListener('click', () => {
    fotoJulia.classList.add('virando')

    setTimeout(() => {
      atual++

      if (atual >= slides.length) {
        atual = 0
      }

      fotoJulia.src = slides[atual].foto

      document.body.style.background = slides[atual].fundo

      textoFundo.innerHTML = slides[atual].texto
    }, 400)

    setTimeout(() => {
      fotoJulia.classList.remove('virando')
    }, 800)
  })
}

const quadros = document.querySelectorAll('.quadro')

quadros.forEach(quadro => {
  quadro.addEventListener('click', () => {
    quadro.classList.toggle('aberto')
  })
})

const especial = document.querySelector('.especial')

let cliqueEspecial = 0

if (especial) {
  especial.addEventListener('click', () => {
    if (!especial.classList.contains('aberto')) return

    cliqueEspecial++

    const texto = document.getElementById('textoEspecial')

    if (!texto) return

    if (cliqueEspecial === 2) {
      texto.innerHTML = 'A melhor memória deste site não está nesta foto.'
    }

    if (cliqueEspecial === 3) {
      texto.innerHTML = 'Porque ela ainda não aconteceu.'
    }

    if (cliqueEspecial === 4) {
      texto.innerHTML = 'Algumas histórias são lembranças.'
    }

    if (cliqueEspecial === 5) {
      texto.innerHTML = 'Outras ainda estão sendo escritas.'
    }

    if (cliqueEspecial === 6) {
      texto.innerHTML = 'E, sinceramente...'
    }

    if (cliqueEspecial === 7) {
      texto.innerHTML =
        'Eu gostaria muito que a nossa ainda tivesse muitos capítulos pela frente. ❤️'
    }
  })
}

// =========================
// NOVO - 09/06
// =========================

// WPP

const mensagens = [
  'Tem uma coisa que eu queria te falar.',

  '__APAGAR__',

  'Melhor deixar pra lá.',

  '__BOTAO__',

  'Eu pensei muito antes de fazer este site.',

  'Mais do que você imagina.',

  '__BOTAO__',

  'Porque a verdade é que eu queria te dizer uma coisa.',

  'Eu queria muito namorar com você.',

  '__APAGAR__',

  'Não... esquece isso.',

  'Talvez não seja o momento.',

  '__BOTAO__',

  'Mas também seria mentira fingir que eu nunca pensei nisso.',

  'Porque pensei.',

  'Muitas vezes.',

  '__BOTAO__',

  'E sabe o que é mais estranho?',

  'Eu não gosto de você por causa de uma foto.',

  'Nem por causa de um sorriso.',

  'Nem por causa de um momento específico.',

  'Eu gosto de você pelo conjunto.',

  '__BOTAO__',

  'Pelo jeito que você faz os dias parecerem mais leves.',

  'Pelas conversas que nunca parecem suficientes.',

  'Pela falta que você faz quando desaparece.',

  '__BOTAO__',

  'Talvez eu esteja sendo sincero demais.',

  'Mas se você chegou até aqui...',

  'Existe uma mensagem que eu não quero apagar.',

  'Você é muito mais importante para mim do que imagina.',

  '❤️'
]

const chat = document.getElementById('chatMensagens')

const continuar = document.getElementById('continuarChat')

if (chat && continuar) {
  let i = 0

  function proxima() {
    if (i >= mensagens.length) {
      continuar.style.display = 'none'

      return
    }

    if (mensagens[i] === '__APAGAR__') {
      const ultima = chat.lastElementChild

      if (ultima) {
        ultima.classList.add('apagada')

        ultima.innerHTML = '🚫 Esta mensagem foi apagada'
      }

      i++

      setTimeout(proxima, 1500)

      return
    }

    if (mensagens[i] === '__BOTAO__') {
      continuar.style.display = 'block'

      return
    }

    const div = document.createElement('div')

    div.classList.add('msg')

    div.innerText = mensagens[i]

    chat.appendChild(div)

    chat.scrollTop = chat.scrollHeight

    i++

    setTimeout(proxima, 2200)
  }

  continuar.onclick = () => {
    continuar.style.display = 'none'

    i++

    proxima()
  }

  proxima()
}

// CAMINHO

const resposta = document.getElementById('resposta')

document.querySelectorAll('.opcoes button').forEach(botao => {
  botao.onclick = () => {
    const id = botao.dataset.id

    if (id === '1') {
      resposta.innerHTML = `

      <h2>❌ Caminho encerrado</h2>

      <p>
      Algumas pessoas são fáceis de ignorar.
      Você nunca foi uma delas.
      </p>

      `

      return
    }

    if (id === '2') {
      resposta.innerHTML = `

      <h2>❌ Caminho encerrado</h2>

      <p>
      Se fosse fácil esquecer,
      este site não existiria.
      </p>

      `

      return
    }

    if (id === '3') {
      resposta.innerHTML = `

      <h2>⚠️ Quase.</h2>

      <p>
      Arriscar é importante.
      Mas existe algo antes disso.
      </p>

      `

      return
    }

    if (id === '4') {
      resposta.innerHTML = `

      <h2>❤️</h2>

      <p>
      Foi exatamente isso que eu fiz.
      Continuei.
      Conversa após conversa.
      Dia após dia.
      Até perceber que você já era importante demais.
      </p>

      `
    }
  }
})

//CHEGANDO LA

const final = document.getElementById('versiculo')

if (final) {
  let cliques = 0

  final.addEventListener('click', () => {
    cliques++

    if (cliques === 5) {
      msgFoto.textContent = 'NÃO'
    }

    if (cliques === 6) {
      msgFoto.textContent = 'NÃO VAI !'
    }

    if (cliques >= 7) {
      window.location.href = 'loginSera.html'
    }
  })
}

//TALVEZ

const talvez = document.getElementById('10')

if (talvez) {
  let cliques = 0

  talvez.addEventListener('click', () => {
    cliques++

    if (cliques === 1) {
      msgFoto.textContent = 'Você não está pronta'
    }

    if (cliques === 2) {
      msgFoto.textContent = 'Você não está pronta'
    }

    if (cliques === 3) {
      msgFoto.textContent = 'Você não está pronta'
    }

    if (cliques === 4) {
      msgFoto.textContent = 'Você não está pronta'
    }

    if (cliques === 5) {
      msgFoto.textContent = 'NÃO'
    }

    if (cliques === 6) {
      msgFoto.textContent = 'OU SERÁ QUE ESTÁ?'
    }

    if (cliques >= 7) {
      window.location.href = 'sera.html'
    }
  })
}

//CIA

;(() => {
  const btnArquivoCIA = document.getElementById('abrirArquivo')

  const arquivoCIA = document.getElementById('arquivoSecreto')

  if (!btnArquivoCIA || !arquivoCIA) return

  btnArquivoCIA.onclick = () => {
    arquivoCIA.style.display = 'block'

    btnArquivoCIA.style.display = 'none'
  }
})()

//CAIXAS

const caixas = document.querySelectorAll('.caixa')

if (caixas.length) {
  caixas.forEach(caixa => {
    caixa.addEventListener('click', () => {
      caixa.classList.toggle('aberta')
    })
  })
}

// 404

const progresso = document.getElementById('progresso')

const mensagem = document.getElementById('mensagemErro')

const btnVoltar = document.getElementById('btnVoltar')

const pagina = document.getElementById('paginaEncontrada')

if (progresso && mensagem && btnVoltar && pagina) {
  let carregamento = 0

  let cliques = 0

  btnVoltar.style.opacity = '.5'

  setTimeout(() => {
    btnVoltar.style.opacity = '1'
  }, 2000)

  const fakeLoad = setInterval(() => {
    carregamento++

    progresso.style.width = carregamento + '%'

    if (carregamento >= 53) {
      clearInterval(fakeLoad)

      mensagem.innerHTML = 'Erro inesperado durante o carregamento.'
    }
  }, 40)

  btnVoltar.addEventListener('click', () => {
    cliques++

    const frases = [
      '',

      '',

      '',

      '',

      '',

      '',

      '',

      '',

      'Página localizada...',

      'Restaurando conteúdo...'
    ]

    if (cliques <= frases.length) {
      mensagem.innerHTML = frases[cliques - 1]
    }

    if (cliques === 10) {
      let atual = 53

      const finalizar = setInterval(() => {
        atual++

        progresso.style.width = atual + '%'

        if (atual >= 100) {
          clearInterval(finalizar)

          mensagem.innerHTML = 'Conteúdo restaurado com sucesso.'

          setTimeout(() => {
            pagina.style.display = 'block'

            btnVoltar.style.display = 'none'

            mensagem.style.display = 'none'

            const barra = document.querySelector('.barra')

            if (barra) {
              barra.style.display = 'none'
            }
          }, 1500)
        }
      }, 20)
    }
  })
}

// ALTERAÇÕES

const alteracoes = document.getElementById('alteracoes')

if (alteracoes) {
  const registros = [
    {
      antes: 'Treinava no Nível 7.',
      depois: 'Treinou no Nível 2 porque uma certa pessoa pediu.'
    },

    {
      antes: 'Via vídeos engraçados.',
      depois: 'Via vídeos engraçados e pensava: "vou mandar pra ela".'
    },

    {
      antes: 'Pegava o celular quando precisava.',
      depois: 'Pegava o celular para ver se você respondeu.'
    },

    {
      antes: 'Gostava de dirigir.',
      depois: 'Passou a gostar ainda mais quando você estava junto.'
    },

    {
      antes: 'Era só mais um ano normal.',
      depois: 'Virou o ano em que conheceu você.'
    },

    {
      antes: 'Acordava e seguia o dia.',
      depois: 'Acordava procurando mensagem sua.'
    },

    {
      antes: 'Não fazia ideia de quem era Julia.',
      depois: 'Criou um site inteiro por causa dela.'
    },

    {
      antes: 'Tinha planos.',
      depois: 'Começou a imaginar você dentro deles.'
    }
  ]

  let atual = 0

  function adicionar() {
    if (atual >= registros.length) {
      document.getElementById('finalRegistro').style.display = 'block'

      return
    }

    const item = document.createElement('div')

    item.classList.add('alteracao')

    item.innerHTML = `

      <div class="antes">

        <span>ANTES</span>

        <p>${registros[atual].antes}</p>

      </div>

      <div class="depois">

        <span>DEPOIS</span>

        <p>${registros[atual].depois}</p>

      </div>

    `

    alteracoes.appendChild(item)

    setTimeout(() => {
      item.classList.add('mostrar')
    }, 100)

    atual++

    setTimeout(adicionar, 1400)
  }

  adicionar()
}

// SUPER SECRETO

const abrirArquivoSecreto = document.getElementById('abrirArquivoSecreto')

const conteudoSecreto = document.getElementById('conteudoSecreto')

if (abrirArquivoSecreto && conteudoSecreto) {
  abrirArquivoSecreto.addEventListener('click', () => {
    abrirArquivoSecreto.style.display = 'none'

    conteudoSecreto.style.display = 'block'

    window.scrollTo({
      top: 0,

      behavior: 'smooth'
    })
  })
}

// TIME LINE

const btnTimeline = document.getElementById('removerEvento')

const finalTimeline = document.getElementById('finalTimeline')

if (btnTimeline) {
  btnTimeline.addEventListener('click', () => {
    const eventos = document.querySelectorAll('.evento')

    let i = 0

    function apagar() {
      if (i >= eventos.length) {
        document.body.style.transition = '2s'

        document.body.style.filter = 'grayscale(1) brightness(.8)'

        btnTimeline.style.display = 'none'

        setTimeout(() => {
          finalTimeline.classList.add('mostrar')
        }, 1200)

        return
      }

      eventos[i].classList.add('removido')

      i++

      setTimeout(apagar, 900)
    }

    apagar()
  })
}

let cliqueCodigo = 0

const erro404 = document.getElementById('404')

if (erro404) {
  erro404.addEventListener('click', () => {
    cliqueCodigo++

    if (cliqueCodigo >= 5) {
      window.location.href = 'timeLine.html'
    }
  })
}

// %

const barras = document.querySelectorAll('.preenchimento')

if (barras.length) {
  barras.forEach((barra, index) => {
    setTimeout(() => {
      barra.style.width = barra.dataset.width + '%'
    }, 500 + index * 400)
  })
}

setTimeout(() => {
  const resultado = document.getElementById('resultadoFinal')

  if (resultado) {
    resultado.style.display = 'block'
  }
}, 5000)

const exportar = document.getElementById('exportar')

const relatorio = document.getElementById('relatorioCompleto')

if (exportar && relatorio) {
  exportar.addEventListener('click', () => {
    exportar.innerHTML = 'Gerando relatório...'

    exportar.disabled = true

    setTimeout(() => {
      exportar.style.display = 'none'

      relatorio.style.display = 'block'
    }, 2000)
  })
}

// BOTÃO NÃO PRECISAVA

const inicioProibido = document.getElementById('inicio')

const revelacaoProibida = document.getElementById('revelacao')

const botaoProibido = document.getElementById('botaoProibido')

const avisoProibido = document.getElementById('aviso')

if (inicioProibido && revelacaoProibida && botaoProibido && avisoProibido) {
  let clique = 0

  botaoProibido.addEventListener('click', () => {
    clique++

    const mensagens = [
      'Tem certeza?',

      'Eu avisei.',

      'Ainda dá tempo de voltar.',

      'Última chance.',

      'Ok... abrindo arquivo.'
    ]

    avisoProibido.innerHTML = mensagens[clique - 1]

    if (clique >= 5) {
      inicioProibido.style.display = 'none'

      document.body.style.background = '#000'

      setTimeout(() => {
        revelacaoProibida.style.display = 'block'
      }, 800)
    }
  })
}

let cliqueEstaRela = 0

const erroEstaRela = document.getElementById('estarela')

if (erroEstaRela) {
  erroEstaRela.addEventListener('click', () => {
    cliqueEstaRela++

    if (cliqueEstaRela >= 5) {
      window.location.href = 'estaRela.html'
    }
  })
}

let cliqueBtnNP = 0

const erroBtnNP = document.getElementById('erroBtnNP')

if (erroBtnNP) {
  erroBtnNP.addEventListener('click', () => {
    cliqueBtnNP++

    if (cliqueBtnNP >= 5) {
      window.location.href = 'btnNP.html'
    }
  })
}

// COFRE

const btnAbrir = document.getElementById('btnAbrir')

if (btnAbrir) {
  const senhaCorreta = '020406'

  let senhaDigitada = ''

  const display = document.querySelectorAll('.bolinha')

  const numeros = document.querySelectorAll('.numero')

  const limpar = document.getElementById('limpar')

  const statusTexto = document.getElementById('status')

  const cofre = document.getElementById('cofre')

  const conteudo = document.getElementById('conteudoCofre')

  const etapa1 = document.querySelector('.etapa1')

  const etapa2 = document.querySelector('.etapa2')

  const etapa3 = document.querySelector('.etapa3')

  function atualizarDisplay() {
    display.forEach((item, index) => {
      if (index < senhaDigitada.length) {
        item.classList.add('preenchida')
      } else {
        item.classList.remove('preenchida')
      }
    })
  }

  numeros.forEach(botao => {
    botao.addEventListener('click', () => {
      if (senhaDigitada.length >= 6) {
        return
      }

      senhaDigitada += botao.innerText

      atualizarDisplay()
    })
  })

  limpar.addEventListener('click', () => {
    senhaDigitada = ''

    atualizarDisplay()

    statusTexto.innerHTML = 'Digite a combinação'
  })

  btnAbrir.addEventListener('click', () => {
    if (senhaDigitada !== senhaCorreta) {
      statusTexto.innerHTML = 'Combinação incorreta.'

      senhaDigitada = ''

      atualizarDisplay()

      return
    }

    statusTexto.innerHTML = 'Verificando...'

    setTimeout(() => {
      statusTexto.innerHTML = 'Acesso concedido.'
    }, 1200)

    setTimeout(() => {
      statusTexto.innerHTML = 'Abrindo cofre...'
    }, 2200)

    setTimeout(() => {
      cofre.style.opacity = '.2'
    }, 3200)

    setTimeout(() => {
      conteudo.style.display = 'block'

      etapa1.style.display = 'block'
    }, 5200)

    setTimeout(() => {
      etapa2.style.display = 'block'
    }, 7600)

    setTimeout(() => {
      etapa3.style.display = 'block'
    }, 9800)
  })
}

// TEMPO GALAXIA

const iniciarTempo = document.getElementById('iniciarTempo')

if (iniciarTempo) {
  iniciarTempo.addEventListener('click', () => {
    iniciarTempo.style.display = 'none'

    document.getElementById('contador').style.display = 'flex'

    const dataEspecial = new Date('2026-04-11T21:30:00')

    function atualizar() {
      const agora = new Date()

      const diferenca = agora - dataEspecial

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))

      const horas = agora.getHours()

      const minutos = agora.getMinutes()

      const segundos = agora.getSeconds()

      document.getElementById('dias').innerText = dias

      document.getElementById('horas').innerText = horas

      document.getElementById('minutos').innerText = minutos

      document.getElementById('segundos').innerText = segundos
    }

    atualizar()

    setInterval(atualizar, 1000)

    setTimeout(() => {
      document.getElementById('mensagemFinal').style.display = 'block'
    }, 6000)

    setTimeout(() => {
      document.getElementById('continuar').style.display = 'inline-block'
    }, 9000)
  })

  document.getElementById('continuar').addEventListener('click', () => {
    window.location.href = 'msgGalaxia.html'
  })
}

//MSG GALAXIA

const progressoGalaxia = document.getElementById('progressoGalaxia')

if (progressoGalaxia) {
  const inicio = document.getElementById('inicio')

  const conteudo = document.getElementById('conteudoGalaxia')

  let valor = 0

  const carregar = setInterval(() => {
    valor++

    progressoGalaxia.style.width = valor + '%'

    if (valor >= 100) {
      clearInterval(carregar)

      inicio.style.display = 'none'

      conteudo.style.display = 'block'

      iniciarMensagem()
    }
  }, 30)

  function iniciarMensagem() {
    const texto = `Se você está lendo isso...

significa que a transmissão conseguiu atravessar milhares de estrelas.

Durante a busca foram encontrados:

8 planetas habitáveis.

327 luas.

Bilhões de estrelas.

Mas apenas uma coisa chamou atenção.

Você.

Entre todas as coisas improváveis do universo...

você continua sendo a minha favorita.

O mundo tem suas maravilhas.

Mas você é a maravilha do meu mundo.

E então eu lembrei de uma frase...

"Como eu sou sortudo por ter alguém que torna tão difícil dizer adeus."

— Ursinho Pooh

Transmissão encerrada.`

    const alvo = document.getElementById('textoDigitando')

    let i = 0

    const escrever = setInterval(() => {
      alvo.innerHTML += texto.charAt(i)

      i++

      if (i >= texto.length) {
        clearInterval(escrever)

        mostrarFinal()
      }
    }, 35)
  }

  function mostrarFinal() {
    const foto = document.getElementById('fotoGalaxia')

    foto.style.display = 'block'

    setTimeout(() => {
      foto.style.opacity = '1'
    }, 100)

    setTimeout(() => {
      document.getElementById('btnConstelacao').style.display = 'inline-block'
    }, 2000)
  }

  document.getElementById('btnConstelacao').addEventListener('click', () => {
    window.location.href = 'constJulia.html'
  })
}

// CONSTELACAO JULIA

const estrelas = document.querySelectorAll('.estrela')

const statusConstelacao = document.getElementById('statusConstelacao')

const nomeConstelacao = document.getElementById('nomeConstelacao')

const mensagemFinal = document.getElementById('mensagemFinalConstelacao')

let cliques = 0

estrelas.forEach(estrela => {
  estrela.addEventListener('click', () => {
    cliques++

    estrela.classList.add('ativa')

    if (cliques === 3) {
      statusConstelacao.innerHTML = 'Sinal detectado...'

      nomeConstelacao.innerHTML = 'J'
    }

    if (cliques === 6) {
      nomeConstelacao.innerHTML = 'JU'
    }

    if (cliques === 9) {
      nomeConstelacao.innerHTML = 'JUL'
    }

    if (cliques === 12) {
      nomeConstelacao.innerHTML = 'JULI'
    }

    if (cliques === 15) {
      nomeConstelacao.innerHTML = 'JULIA'

      statusConstelacao.innerHTML = 'Constelação encontrada.'

      setTimeout(() => {
        mensagemFinal.style.display = 'block'
      }, 1500)
    }
  })
})

const levaTempo = document.getElementById('levaTempo')

if (levaTempo) {
  levaTempo.addEventListener('click', () => {
    window.location.href = 'tempo.html'
  })
}

const levaCofre = document.getElementById('levaCofre')

if (levaCofre) {
  levaCofre.addEventListener('click', () => {
    window.location.href = 'cofre.html'
  })
}

const levaLogincerto = document.getElementById('btn-1506')

const msgFotoLogin = document.getElementById('msgFoto')

const mensagensFotoLogin = [
  '',
  '',
  '',
  '',
  '',
  'Você realmente está clicando nisso?',
  'PARA'
]

if (levaLogincerto) {
  let cliquesFoto = 0

  levaLogincerto.addEventListener('click', () => {
    cliquesFoto++

    if (cliquesFoto <= mensagensFotoLogin.length) {
      msgFotoLogin.innerHTML = mensagensFotoLogin[cliquesFoto - 1]
    }

    if (cliquesFoto >= 7) {
      setTimeout(() => {
        window.location.href = '1506.html'
      }, 1000)
    }
  })
}