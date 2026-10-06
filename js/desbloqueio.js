// =====================================================
// DESBLOQUEIO DOS MOTIVOS 2001 - 5000
// Carregue DEPOIS do motivos.js
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('mais-motivos-page')) return

  // ===================================================
  // >>> EDITE AQUI: senhas, perguntas, dicas e mensagens
  // ===================================================
  // Respostas não diferenciam maiúsculas/minúsculas, acentos,
  // espaços ou pontuação. Ex.: "12/03/2022" = "12032022" = "12 03 2022".

  const CONFIG = {
    chave: 'motivos_etapa',

    etapas: [
      // ETAPA 1 — ela clica no ❤️ do título e digita a senha.
      // Revela TODOS os botões (2001-5000), mas ainda trancados.
      {
        tipo: 'senha',
        gatilho: '#coracao-secreto',
        titulo: 'Tem algo escondido aqui... 🤫',
        texto: 'Qual é a nossa senha?',
        senhas: ['VoceAcha'],
        sucesso: 'Então era verdade... ainda existiam muitos, muitos mais motivos. ❤️'
      },

      // ETAPA 2 — libera 2001 a 3000. Ela clica N vezes no coraçãozinho do fim da página.
      {
        faixa: [2001, 3000],
        tipo: 'cliques',
        cliques: 5,
        dica: 'Existe um coraçãozinho escondido lá no fim da página. Quem sabe ele goste de carinho...',
        sucesso: 'O coração gostou do carinho. Os motivos 2001 a 3000 são seus. ❤️'
      },

      // ETAPA 3 — libera 3001 a 4000. Mini desafio de perguntas.
      {
        faixa: [3001, 4000],
        tipo: 'quiz',
        titulo: 'Mini desafio 💘',
        dica: 'Clique em um dos botões trancados para aceitar o desafio.',
        perguntas: [
          { p: 'TROCAR: pergunta 1 sobre vocês?', r: ['resposta1'] },
          { p: 'TROCAR: pergunta 2 sobre vocês?', r: ['resposta2'] },
          { p: 'TROCAR: pergunta 3 sobre vocês?', r: ['resposta3', 'outra resposta aceita'] }
        ],
        sucesso: 'Você me conhece mesmo. Os motivos 3001 a 4000 são seus. ❤️'
      },

      // ETAPA 4 — libera 4001 a 5000. Senha final.
      {
        faixa: [4001, 5000],
        tipo: 'senha',
        titulo: 'Os últimos motivos... 🔐',
        texto: 'Qual é a palavra (ou a data) mais importante de nós dois?',
        senhas: ['liberado'],
        dica: 'Clique em um dos botões trancados. A resposta só você sabe.',
        sucesso: 'Todos os 5000 motivos estão liberados. E mesmo assim, o amor continua. ❤️'
      }
    ]
  }

  // ===================================================
  // DAQUI PRA BAIXO NÃO PRECISA MEXER
  // ===================================================

  const ETAPAS = CONFIG.etapas
  const params = new URLSearchParams(location.search)

  // ---------- progresso salvo ----------
  const salvar = n => { try { localStorage.setItem(CONFIG.chave, String(n)) } catch (e) {} }
  const ler = () => { try { return Number(localStorage.getItem(CONFIG.chave)) || 0 } catch (e) { return 0 } }

  if (params.has('reset')) salvar(0)
  if (params.has('etapa')) salvar(Math.max(0, Math.min(ETAPAS.length, Number(params.get('etapa')) || 0)))

  let progresso = ler()

  // ---------- util ----------
  const normalizar = s =>
    String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '')

  const bate = (texto, lista) => lista.some(r => normalizar(r) === normalizar(texto) && normalizar(r) !== '')

  // ---------- estilos ----------
  const css = document.createElement('style')
  css.textContent = `
    .capitulo.bloqueado{opacity:.45;filter:grayscale(.6);cursor:not-allowed}
    .capitulo.bloqueado::before{content:'🔒 '}
    .capitulo.tremer,.dsb-card.tremer{animation:dsbTremer .4s}
    @keyframes dsbTremer{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}
    .dsb-aviso{margin:10px auto 18px;max-width:560px;padding:12px 16px;border-radius:14px;text-align:center;font-size:.95rem;line-height:1.5;background:rgba(0,0,0,.35);border:1px dashed rgba(255,255,255,.35);color:#fff}
    .dsb-aviso button{margin-top:8px}
    .dsb-fundo{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(0,0,0,.7);backdrop-filter:blur(4px);animation:dsbFade .25s}
    @keyframes dsbFade{from{opacity:0}to{opacity:1}}
    .dsb-card{width:100%;max-width:420px;padding:26px 22px;border-radius:20px;text-align:center;color:#fff;background:rgba(25,12,20,.96);border:1px solid rgba(255,120,150,.45);box-shadow:0 10px 40px rgba(255,60,110,.25);font-family:inherit}
    .dsb-card h3{margin:0 0 10px;font-size:1.3rem}
    .dsb-card p{margin:0 0 14px;line-height:1.5}
    .dsb-card input{width:100%;box-sizing:border-box;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.08);color:#fff;font-size:1rem;text-align:center;outline:none}
    .dsb-card input:focus{border-color:#ff6b8b}
    .dsb-btns{display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap}
    .dsb-card button,.dsb-aviso button{border:0;border-radius:999px;padding:10px 20px;font-size:.95rem;cursor:pointer;color:#fff;background:linear-gradient(135deg,#ff4d6d,#c9184a)}
    .dsb-card button.sec{background:rgba(255,255,255,.14)}
    .dsb-erro{min-height:1.2em;margin-top:8px;font-size:.9rem;color:#ff9db1}
    .dsb-passo{font-size:.8rem;opacity:.7;margin-bottom:6px}
    .dsb-coracao-fim{display:block;margin:50px auto 30px;width:fit-content;font-size:1.6rem;opacity:.22;cursor:pointer;user-select:none;transition:transform .15s,opacity .3s}
    .dsb-coracao-fim:active{transform:scale(1.35)}
    .dsb-voa{position:fixed;bottom:-40px;z-index:10000;pointer-events:none;animation:dsbVoa 2.6s ease-out forwards}
    @keyframes dsbVoa{to{transform:translateY(-110vh) rotate(25deg);opacity:0}}
  `
  document.head.appendChild(css)

  // ---------- localizar blocos 2001+ ----------
  const blocos = ETAPAS.map((et, i) => {
    if (!et.faixa) return null
    const botoes = [...document.querySelectorAll('.capitulo')].filter(b => {
      const n = Number(b.dataset.capitulo)
      return n >= et.faixa[0] && n <= et.faixa[1]
    })
    if (!botoes.length) return null
    const caixa = botoes[0].closest('.bloco-botoes')
    return { i: i + 1, botoes, caixa, titulo: caixa.previousElementSibling, aviso: null }
  })

  // ---------- modal ----------
  function abrirModal(montar) {
    const fundo = document.createElement('div')
    fundo.className = 'dsb-fundo'
    const card = document.createElement('div')
    card.className = 'dsb-card'
    fundo.appendChild(card)
    const fechar = () => fundo.remove()
    fundo.addEventListener('click', e => { if (e.target === fundo) fechar() })
    montar(card, fechar)
    document.body.appendChild(fundo)
    const campo = card.querySelector('input')
    if (campo) setTimeout(() => campo.focus(), 50)
    return fechar
  }

  const tremer = el => {
    el.classList.remove('tremer')
    void el.offsetWidth
    el.classList.add('tremer')
  }

  function coracoes() {
    for (let k = 0; k < 24; k++) {
      const c = document.createElement('span')
      c.className = 'dsb-voa'
      c.textContent = ['❤️', '💖', '💗', '💘'][k % 4]
      c.style.left = Math.random() * 100 + 'vw'
      c.style.fontSize = 18 + Math.random() * 26 + 'px'
      c.style.animationDelay = Math.random() * 0.8 + 's'
      document.body.appendChild(c)
      setTimeout(() => c.remove(), 3600)
    }
  }

  // ---------- fluxo: pedir senha ----------
  function pedirSenha(etapa, aoAcertar) {
    abrirModal((card, fechar) => {
      card.innerHTML = `
        <h3>${etapa.titulo || 'Senha'}</h3>
        <p>${etapa.texto || ''}</p>
        <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false">
        <div class="dsb-erro"></div>
        <div class="dsb-btns">
          <button class="sec" data-a="fechar">Voltar</button>
          <button data-a="ok">Confirmar</button>
        </div>`
      const campo = card.querySelector('input')
      const erro = card.querySelector('.dsb-erro')
      const tentar = () => {
        if (bate(campo.value, etapa.senhas)) { fechar(); aoAcertar() }
        else { erro.textContent = 'Hmm... não é isso. Tenta de novo ❤️'; tremer(card); campo.select() }
      }
      card.querySelector('[data-a=ok]').onclick = tentar
      card.querySelector('[data-a=fechar]').onclick = fechar
      campo.addEventListener('keydown', e => { if (e.key === 'Enter') tentar() })
    })
  }

  // ---------- fluxo: mini desafio ----------
  function fazerQuiz(etapa, aoAcertar) {
    let q = 0
    abrirModal((card, fechar) => {
      const desenhar = () => {
        const item = etapa.perguntas[q]
        card.innerHTML = `
          <div class="dsb-passo">Pergunta ${q + 1} de ${etapa.perguntas.length}</div>
          <h3>${etapa.titulo || 'Mini desafio'}</h3>
          <p>${item.p}</p>
          <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false">
          <div class="dsb-erro"></div>
          <div class="dsb-btns">
            <button class="sec" data-a="fechar">Voltar</button>
            <button data-a="ok">Responder</button>
          </div>`
        const campo = card.querySelector('input')
        const erro = card.querySelector('.dsb-erro')
        const tentar = () => {
          if (bate(campo.value, item.r)) {
            q++
            if (q >= etapa.perguntas.length) { fechar(); aoAcertar() } else { desenhar(); card.querySelector('input').focus() }
          } else { erro.textContent = 'Quase! Pensa com carinho e tenta de novo ❤️'; tremer(card); campo.select() }
        }
        card.querySelector('[data-a=ok]').onclick = tentar
        card.querySelector('[data-a=fechar]').onclick = fechar
        campo.addEventListener('keydown', e => { if (e.key === 'Enter') tentar() })
      }
      desenhar()
    })
  }

  // ---------- mensagem de sucesso ----------
  function sucesso(texto, depois) {
    coracoes()
    abrirModal((card, fechar) => {
      card.innerHTML = `<h3>✨ Desbloqueado!</h3><p>${texto}</p><div class="dsb-btns"><button data-a="ok">Continuar ❤️</button></div>`
      card.querySelector('[data-a=ok]').onclick = () => { fechar(); if (depois) depois() }
    })
  }

  // ---------- avançar etapa ----------
  function avancar(n) {
    if (n !== progresso + 1) return
    progresso = n
    salvar(n)
    const et = ETAPAS[n - 1]
    aplicar()
    sucesso(et.sucesso || 'Desbloqueado! ❤️', () => {
      const alvo = blocos[n - 1] ? blocos[n - 1].titulo : blocos.find(Boolean)?.titulo
      if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  // ---------- tentar desbloquear uma faixa (n = número da etapa) ----------
  function tentarDesbloquear(n) {
    if (n !== progresso + 1) return // só a próxima da fila
    const et = ETAPAS[n - 1]
    if (et.tipo === 'senha') pedirSenha(et, () => avancar(n))
    else if (et.tipo === 'quiz') fazerQuiz(et, () => avancar(n))
    // tipo "cliques": é liberado pelo coraçãozinho do fim da página
  }

  // ---------- aplicar estado na tela ----------
  function aplicar() {
    // etapa 1 (revelar): enquanto progresso 0, tudo escondido
    blocos.forEach(b => {
      if (!b) return
      const visivel = progresso >= 1
      b.caixa.style.display = visivel ? '' : 'none'
      b.titulo.style.display = visivel ? '' : 'none'
      if (b.aviso) { b.aviso.remove(); b.aviso = null }

      const trancado = progresso < b.i
      b.botoes.forEach(btn => btn.classList.toggle('bloqueado', trancado))

      if (visivel && trancado) {
        const et = ETAPAS[b.i - 1]
        const av = document.createElement('div')
        av.className = 'dsb-aviso'
        const pode = b.i === progresso + 1
        av.innerHTML = pode
          ? `🔒 Trancado<br>${et.dica || ''}`
          : `🔒 Trancado<br>Primeiro libere o anterior.`
        if (pode && (et.tipo === 'senha' || et.tipo === 'quiz')) {
          const bt = document.createElement('button')
          bt.textContent = et.tipo === 'quiz' ? 'Aceitar desafio' : 'Digitar senha'
          bt.onclick = () => tentarDesbloquear(b.i)
          av.appendChild(document.createElement('br'))
          av.appendChild(bt)
        }
        b.titulo.after(av)
        b.aviso = av
      }
    })

    // coraçãozinho do fim da página (etapa de cliques)
    const antigo = document.getElementById('coracao-fim')
    if (antigo) antigo.remove()
    const proxima = ETAPAS[progresso] // etapa que está pendente (índice = progresso)
    if (progresso >= 1 && proxima && proxima.tipo === 'cliques') {
      const c = document.createElement('span')
      c.id = 'coracao-fim'
      c.className = 'dsb-coracao-fim'
      c.textContent = '❤️'
      let cont = 0, ultimo = 0
      c.addEventListener('click', () => {
        const agora = Date.now()
        cont = agora - ultimo < 1500 ? cont + 1 : 1
        ultimo = agora
        c.style.transform = 'scale(1.4)'
        setTimeout(() => (c.style.transform = ''), 150)
        c.style.opacity = String(Math.min(1, 0.22 + cont * 0.18))
        if (cont >= proxima.cliques) avancar(progresso + 1)
      })
      const mais = document.querySelector('.mais-container') || document.body
      mais.appendChild(c)
    }
  }

  // ---------- cliques nos botões trancados (captura: roda antes do motivos.js) ----------
  document.addEventListener('click', e => {
    const btn = e.target.closest && e.target.closest('.capitulo.bloqueado')
    if (!btn) return
    e.preventDefault()
    e.stopImmediatePropagation()
    tremer(btn)
    const n = ETAPAS.findIndex(et => et.faixa && Number(btn.dataset.capitulo) >= et.faixa[0] && Number(btn.dataset.capitulo) <= et.faixa[1]) + 1
    if (n === progresso + 1) tentarDesbloquear(n)
  }, true)

  // ---------- gatilho da etapa 1 (coração do título) ----------
  const gatilho1 = document.querySelector(ETAPAS[0].gatilho)
  if (gatilho1) {
    gatilho1.addEventListener('click', () => {
      if (progresso === 0) pedirSenha(ETAPAS[0], () => avancar(1))
    })
  }

  aplicar()
})
