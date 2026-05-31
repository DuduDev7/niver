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
    resposta = '❤️ Assunto favorito do sistema.'
  } else if (pergunta.includes('acontecimento')) {
    resposta =
      'Provavelmente um dos melhores acontecimentos da minha linha do tempo.'
  } else if (pergunta.includes('importancia')) {
    resposta = 'Nível de importância: absurdo... Sistema incapaz de calcular.'
  } else {
    const respostas = [
      '🤖 Não sei responder isso.',

      '📊 Dados insuficientes.',

      '❤️ Mas provavelmente envolve a Júlia.',

      '⚠ Sistema tendencioso.'
    ]

    resposta = respostas[Math.floor(Math.random() * respostas.length)]
  }

  document.getElementById('iaResp').innerHTML = resposta
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
