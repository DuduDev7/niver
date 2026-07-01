// =====================================================
// MAIS MOTIVOS
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('mais-motivos-page')) return

  // =================================================
  // AQUI VÃO OS ARRAYS
  // =================================================

  const cap103 = [
    'Porque você faz qualquer dia comum parecer especial.',
    'Porque eu adoro descobrir coisas novas sobre você.',
    'Porque seu jeito de existir já melhora o meu dia.',
    'Porque você consegue deixar meu coração leve.',
    'Porque sua felicidade importa para mim.',
    'Porque até suas manias me fazem sorrir.',
    'Porque eu gosto até do seu silêncio.',
    'Porque pensar em você já me faz sorrir.',
    'Porque você me inspira a ser alguém melhor.',
    'Porque sua companhia nunca cansa.',
    'Porque você faz o tempo passar mais rápido.',
    'Porque você também faz o tempo parar.',
    'Porque sua voz virou uma das minhas favoritas.',
    'Porque eu amo quando você fala de coisas que gosta.',
    'Porque eu gosto de imaginar nosso futuro.',
    'Porque você me faz acreditar em coisas bonitas.',
    'Porque seu jeito carinhoso me desmonta.',
    'Porque sua presença acalma meu coração.',
    'Porque você consegue ser forte e delicada ao mesmo tempo.',
    'Porque eu admiro quem você é.',
    'Porque você nunca precisou fingir ser perfeita.',
    'Porque você me conquistou sendo simplesmente você.',
    'Porque eu amo ouvir sua risada.',
    'Porque sua felicidade virou um dos meus objetivos.',
    'Porque gosto quando você me conta como foi seu dia.',
    'Porque gosto de imaginar você sorrindo.',
    'Porque você faz meu coração bater diferente.',
    'Porque você apareceu exatamente quando eu precisava.',
    'Porque você fez meus dias terem mais cor.',
    'Porque você transformou pequenas coisas em grandes momentos.',
    'Porque eu gosto de cuidar de você.',
    'Porque gosto de imaginar nós dois juntos.',
    'Porque você faz meu coração se sentir seguro.',
    'Porque sua existência já valeu todos os caminhos que percorri.',
    'Porque cada conversa nossa vale meu dia inteiro.',
    'Porque eu nunca me canso de você.',
    'Porque você faz falta mesmo estando perto.',
    'Porque eu gosto da pessoa que sou quando estou com você.',
    'Porque você despertou sentimentos que eu nem conhecia.',
    'Porque você consegue me deixar em paz.',
    'Porque você virou meu pensamento favorito.',
    'Porque você faz o mundo parecer menos pesado.',
    'Porque você me lembra que amar pode ser simples.',
    'Porque tudo fica melhor quando envolve você.',
    'Porque seu nome já me faz sorrir.',
    'Porque você virou uma das melhores partes da minha vida.',
    'Porque você me faz acreditar que vale a pena esperar.',
    'Porque você é meu lugar favorito.',
    'Porque meu coração sempre escolhe você.',
    'Porque amar você acontece naturalmente.'
  ]

  const cap151 = [
    'Porque você merece todo o amor do mundo.',
    'Porque eu gostaria de proteger seu coração.',
    'Porque sua paz também virou a minha.',
    'Porque seu sorriso sempre vence meu mau humor.',
    'Porque você faz eu querer crescer.',
    'Porque eu amo quando você demonstra carinho.',
    'Porque gosto de ver você feliz.',
    'Porque sua felicidade ilumina tudo.',
    'Porque você consegue me surpreender todos os dias.',
    'Porque eu admiro sua força.',
    'Porque eu admiro sua sensibilidade.',
    'Porque você faz meu coração desacelerar.',
    'Porque sua companhia sempre parece pouca.',
    'Porque nunca é suficiente ficar perto de você.',
    'Porque você faz qualquer lugar parecer especial.',
    'Porque gosto da forma como você vê o mundo.',
    'Porque seu jeitinho me ganhou completamente.',
    'Porque você faz eu acreditar mais em mim.',
    'Porque eu amo ouvir você falando.',
    'Porque qualquer assunto fica interessante quando é você.',
    'Porque eu gosto do jeito que você sorri sem perceber.',
    'Porque você me faz sentir escolhido.',
    'Porque você me faz querer construir uma história.',
    'Porque eu não preciso fingir quando estou com você.',
    'Porque você faz meu coração descansar.',
    'Porque sua existência já é um presente.',
    'Porque você trouxe esperança para mim.',
    'Porque você trouxe calma.',
    'Porque trouxe felicidade.',
    'Porque trouxe amor.',
    'Porque você faz eu enxergar beleza nas pequenas coisas.',
    'Porque eu amo lembrar dos nossos momentos.',
    'Porque você consegue transformar segundos em lembranças.',
    'Porque seu abraço mora na minha imaginação.',
    'Porque você ocupa meus pensamentos de um jeito bonito.',
    'Porque você virou meu porto seguro.',
    'Porque eu amo seu coração.',
    'Porque eu amo sua essência.',
    'Porque sua personalidade vale mais que qualquer beleza.',
    'Porque você é linda por dentro e por fora.',
    'Porque você faz meu mundo parecer maior.',
    'Porque eu gosto da forma como você cuida das pessoas.',
    'Porque você merece ser feliz.',
    'Porque você merece ser amada todos os dias.',
    'Porque você merece alguém que nunca desista de você.',
    'Porque eu faria isso.',
    'Porque eu continuaria escolhendo você.',
    'Porque eu continuaria esperando você.',
    'Porque meu coração já fez essa escolha.',
    'Porque essa escolha sempre será você.'
  ]

  const cap201 = [
    'Porque eu nunca imaginei encontrar alguém como você.',
    'Porque você mudou meu conceito de amor.',
    'Porque você fez meu coração acreditar novamente.',
    'Porque você apareceu e tudo ficou diferente.',
    'Porque desde que você chegou minha vida ficou mais bonita.',
    'Porque eu gosto até dos dias difíceis quando você está neles.',
    'Porque você me faz querer viver mais momentos.',
    'Porque você faz meus sonhos terem seu nome.',
    'Porque você virou parte deles.',
    'Porque você virou parte de mim.',
    'Porque meu coração encontrou paz em você.',
    'Porque você faz eu querer ser suficiente para você.',
    'Porque eu faria qualquer coisa para ver você sorrindo.',
    'Porque sua alegria vale muito para mim.',
    'Porque você consegue iluminar qualquer ambiente.',
    'Porque sua presença muda tudo.',
    'Porque seu carinho vale ouro.',
    'Porque seu jeito vale ouro.',
    'Porque sua essência não tem preço.',
    'Porque você me faz acreditar no destino.',
    'Porque parece que sempre era para ser você.',
    'Porque eu sinto orgulho de gostar de você.',
    'Porque nunca tive vergonha de amar você.',
    'Porque meu coração fala seu nome em silêncio.',
    'Porque meus pensamentos sempre encontram você.',
    'Porque qualquer música me lembra você.',
    'Porque qualquer pôr do sol me lembra você.',
    'Porque qualquer céu bonito me lembra você.',
    'Porque qualquer estrela me lembra você.',
    'Porque você virou minha referência de beleza.',
    'Porque você virou minha referência de carinho.',
    'Porque você virou minha referência de amor.',
    'Porque eu nunca vou esquecer você.',
    'Porque cada momento seu ficou guardado em mim.',
    'Porque eu amo até lembrar das nossas conversas.',
    'Porque eu sorrio quando releio nossas mensagens.',
    'Porque você faz meu coração acelerar.',
    'Porque você faz meu coração descansar.',
    'Porque você consegue ser meu caos e minha paz.',
    'Porque você é tudo o que eu nem sabia que precisava.',
    'Porque eu não mudaria nada na nossa história.',
    'Porque você vale cada segundo de espera.',
    'Porque eu faria tudo de novo para conhecer você.',
    'Porque conhecer você foi um dos maiores presentes que Deus me deu.',
    'Porque você fez minha vida ganhar um novo significado.',
    'Porque você transformou meu coração.',
    'Porque você me ensinou o que é amar de verdade.',
    'Porque você é meu motivo favorito.',
    'Porque você é minha pessoa favorita.',
    'Porque, depois de tudo, ainda escolho você.'
  ]

  const cap251 = [
    'Porque meu coração encontrou descanso em você.',
    'Porque você faz meu futuro parecer mais bonito.',
    'Porque eu gosto de imaginar nós dois daqui muitos anos.',
    'Porque você me faz acreditar que o amor pode durar para sempre.',
    'Porque eu nunca canso de pensar em você.',
    'Porque sua voz sempre melhora meu dia.',
    'Porque você consegue transformar dias comuns em lembranças especiais.',
    'Porque tudo parece fazer mais sentido desde que você apareceu.',
    'Porque eu gosto da pessoa que me tornei depois de conhecer você.',
    'Porque você despertou sentimentos que estavam escondidos em mim.',
    'Porque você faz meu coração sorrir.',
    'Porque você é minha calma em meio ao caos.',
    'Porque eu me sinto completo quando penso em você.',
    'Porque você faz meu mundo ser mais leve.',
    'Porque eu gosto quando você simplesmente existe perto de mim.',
    'Porque você me faz sentir vivo.',
    'Porque você faz qualquer distância parecer pequena.',
    'Porque você sempre encontra um jeito de ficar nos meus pensamentos.',
    'Porque eu nunca precisei procurar motivos para amar você.',
    'Porque eles simplesmente aparecem.',
    'Porque você merece ser feliz todos os dias.',
    'Porque eu gostaria de participar dessa felicidade.',
    'Porque você merece alguém que nunca solte sua mão.',
    'Porque eu faria isso.',
    'Porque gosto de sonhar acordado com você.',
    'Porque gosto de imaginar nossa história.',
    'Porque gosto de imaginar nosso futuro.',
    'Porque gosto de imaginar nossos momentos.',
    'Porque tudo fica mais bonito quando imagino você nele.',
    'Porque você faz meu coração acreditar em milagres.',
    'Porque você virou minha oração favorita.',
    'Porque você virou meu pensamento favorito.',
    'Porque meu coração escolheu você sem pedir minha opinião.',
    'Porque essa foi a melhor escolha que ele poderia fazer.',
    'Porque você é diferente de qualquer pessoa que conheci.',
    'Porque você me mostrou um amor tranquilo.',
    'Porque você me mostrou um amor verdadeiro.',
    'Porque você me mostrou um amor paciente.',
    'Porque você me mostrou um amor bonito.',
    'Porque você me mostrou um amor leve.',
    'Porque você faz meu coração se sentir em paz.',
    'Porque você faz eu querer voltar para você todos os dias.',
    'Porque seu carinho nunca parece suficiente.',
    'Porque eu sempre quero mais um minuto com você.',
    'Porque sempre quero mais uma conversa.',
    'Porque sempre quero ouvir sua voz outra vez.',
    'Porque você é meu lugar favorito no mundo.',
    'Porque meu coração sempre volta para você.',
    'Porque amar você nunca foi difícil.',
    'Porque amar você foi a coisa mais natural da minha vida.'
  ]

  const cap301 = [
    'Porque você é a resposta de perguntas que eu nunca soube fazer.',
    'Porque você trouxe cor para partes da minha vida que estavam em preto e branco.',
    'Porque você me ensinou que amar não precisa machucar.',
    'Porque você me ensinou que carinho também pode ser silêncio.',
    'Porque você faz meu coração respirar.',
    'Porque sua existência já valeu todas as minhas esperas.',
    'Porque eu nunca mais fui o mesmo depois de você.',
    'Porque você mudou minha forma de enxergar o mundo.',
    'Porque você mudou minha forma de enxergar o amor.',
    'Porque você mudou minha forma de enxergar o futuro.',
    'Porque você virou meu futuro favorito.',
    'Porque qualquer plano fica melhor se você estiver nele.',
    'Porque eu gostaria de envelhecer ao seu lado.',
    'Porque gostaria de contar nossas histórias daqui muitos anos.',
    'Porque gostaria de continuar escolhendo você todos os dias.',
    'Porque você faz meu coração querer permanecer.',
    'Porque você me faz acreditar que algumas pessoas realmente são presentes de Deus.',
    'Porque você me faz querer agradecer todos os dias.',
    'Porque você faz minha fé ficar ainda mais bonita.',
    'Porque Deus caprichou quando criou você.',
    'Porque sua existência já é um milagre para mim.',
    'Porque você é linda de um jeito que vai além da aparência.',
    'Porque sua beleza mora no seu coração.',
    'Porque seu coração é a coisa mais bonita que eu conheço.',
    'Porque você cuida das pessoas sem perceber.',
    'Porque você espalha carinho sem perceber.',
    'Porque você ilumina lugares sem perceber.',
    'Porque você transforma vidas sem perceber.',
    'Porque transformou a minha.',
    'Porque eu nunca vou esquecer o dia em que conheci você.',
    'Porque aquele dia mudou minha história.',
    'Porque mudou meu coração.',
    'Porque mudou meus sonhos.',
    'Porque mudou meus planos.',
    'Porque mudou minha vida.',
    'Porque eu amo até suas imperfeições.',
    'Porque elas fazem você ser exatamente quem é.',
    'Porque eu não mudaria nada em você.',
    'Porque você já é perfeita sendo imperfeita.',
    'Porque você nunca precisou ser outra pessoa para me conquistar.',
    'Porque você sempre foi suficiente.',
    'Porque sempre será suficiente.',
    'Porque você vale qualquer espera.',
    'Porque vale qualquer distância.',
    'Porque vale qualquer esforço.',
    'Porque vale qualquer saudade.',
    'Porque vale qualquer oração.',
    'Porque vale qualquer segundo.',
    'Porque você vale muito mais do que consegue imaginar.',
    'Porque você vale tudo para mim.'
  ]

  const cap351 = [
    'Porque se eu pudesse voltar no tempo, escolheria conhecer você outra vez.',
    'Porque escolheria viver tudo de novo.',
    'Porque escolheria cada conversa.',
    'Porque escolheria cada risada.',
    'Porque escolheria cada momento ao seu lado.',
    'Porque nunca vou me arrepender de amar você.',
    'Porque meu coração nunca teve dúvidas.',
    'Porque desde o começo ele sabia.',
    'Porque ele reconheceu você antes mesmo de eu entender.',
    'Porque você virou meu lar.',
    'Porque você virou meu porto seguro.',
    'Porque você virou meu descanso.',
    'Porque você virou minha paz.',
    'Porque você virou meu sorriso favorito.',
    'Porque você virou minha melhor lembrança.',
    'Porque você virou meu maior sonho.',
    'Porque você virou meu maior desejo.',
    'Porque você virou minha pessoa favorita.',
    'Porque eu nunca encontrei alguém como você.',
    'Porque provavelmente nunca encontrarei.',
    'Porque ninguém ocupa o lugar que é seu.',
    'Porque ninguém consegue ser você.',
    'Porque você é única.',
    'Porque você é rara.',
    'Porque você é especial.',
    'Porque você é extraordinária.',
    'Porque você é a pessoa mais importante para o meu coração.',
    'Porque eu amo imaginar você realizando seus sonhos.',
    'Porque quero ver você feliz.',
    'Porque quero ver você sorrindo.',
    'Porque quero ver você vencendo.',
    'Porque quero estar presente em cada conquista sua.',
    'Porque sua felicidade também virou a minha.',
    'Porque sua dor também me dói.',
    'Porque seu sorriso também me cura.',
    'Porque você faz meu coração bater diferente todos os dias.',
    'Porque você faz eu acreditar que o amor verdadeiro existe.',
    'Porque você é a prova disso.',
    'Porque amar você me fez melhor.',
    'Porque amar você me fez mais humano.',
    'Porque amar você me fez mais forte.',
    'Porque amar você me fez mais paciente.',
    'Porque amar você me fez mais feliz.',
    'Porque amar você foi a melhor decisão que meu coração tomou.',
    'Porque eu ainda escolheria você em qualquer universo.',
    'Porque ainda escolheria você em qualquer vida.',
    'Porque ainda escolheria você em qualquer tempo.',
    'Porque, mesmo que eu pudesse escolher mil vezes...',
    'Eu escolheria você em todas elas.',
    'Porque sempre será você.'
  ]

  const cap401 = [
    'Porque eu não consigo imaginar minha vida sem você.',
    'Porque você virou parte dos meus planos.',
    'Porque você virou parte dos meus sonhos.',
    'Porque você virou parte das minhas orações.',
    'Porque você virou parte do meu coração.',
    'Porque você me ensinou que amar também é esperar.',
    'Porque você me ensinou que amar também é respeitar.',
    'Porque você me ensinou que amar também é cuidar.',
    'Porque você me ensinou que amar também é permanecer.',
    'Porque você faz meu coração acreditar no impossível.',
    'Porque você faz qualquer medo parecer pequeno.',
    'Porque você me faz sentir coragem.',
    'Porque você faz eu querer enfrentar qualquer coisa.',
    'Porque você faz eu acreditar que tudo vai dar certo.',
    'Porque você faz meu coração descansar em Deus.',
    'Porque você faz minha esperança crescer.',
    'Porque você faz minha fé aumentar.',
    'Porque você faz meus dias terem propósito.',
    'Porque você faz meus sonhos fazerem sentido.',
    'Porque você faz meu futuro parecer bonito.',
    'Porque você faz meu presente valer a pena.',
    'Porque você faz qualquer espera valer a pena.',
    'Porque você faz qualquer distância valer a pena.',
    'Porque você faz qualquer saudade valer a pena.',
    'Porque você faz qualquer lágrima valer a pena.',
    'Porque seu abraço é meu lugar favorito, mesmo quando só existe na minha imaginação.',
    'Porque eu amo imaginar nós dois juntos.',
    'Porque eu amo imaginar nossos domingos.',
    'Porque eu amo imaginar nossas viagens.',
    'Porque eu amo imaginar nossas conquistas.',
    'Porque eu amo imaginar nossa família.',
    'Porque eu amo imaginar envelhecendo ao seu lado.',
    'Porque eu amo imaginar nossas fotos daqui muitos anos.',
    'Porque eu amo imaginar nossa história sendo contada.',
    'Porque você faz tudo parecer possível.',
    'Porque você me inspira diariamente.',
    'Porque você me faz querer ser alguém de quem você se orgulhe.',
    'Porque você me faz querer honrar a pessoa incrível que você é.',
    'Porque você faz meu coração sorrir mesmo em silêncio.',
    'Porque você me faz sentir amado só por existir.',
    'Porque eu nunca tive dúvidas sobre você.',
    'Porque você nunca precisou competir com ninguém.',
    'Porque meu coração já tinha escolhido.',
    'Porque ninguém nunca ocupou o espaço que é seu.',
    'Porque ninguém jamais ocupará.',
    'Porque você é a melhor parte dos meus dias.',
    'Porque você é a lembrança mais bonita que eu tenho.',
    'Porque você é meu maior presente.',
    'Porque você é minha maior certeza.',
    'Porque você é o amor da minha vida.'
  ]

  const cap451 = [
    'Porque você faz meu coração agradecer todos os dias.',
    'Porque eu nunca vou deixar de admirar você.',
    'Porque você merece ser amada exatamente do jeito que é.',
    'Porque eu faria de tudo para proteger seu sorriso.',
    'Porque eu faria de tudo para proteger seu coração.',
    'Porque eu faria de tudo para ver você feliz.',
    'Porque sua felicidade também é a minha.',
    'Porque sua paz também é a minha.',
    'Porque seu sorriso sempre será uma das minhas prioridades.',
    'Porque você faz minha vida ser muito mais bonita.',
    'Porque você é o melhor capítulo da minha história.',
    'Porque você transformou meu mundo.',
    'Porque você mudou meu coração.',
    'Porque você mudou meus dias.',
    'Porque você mudou minha vida.',
    'Porque você mudou meu jeito de amar.',
    'Porque você me mostrou que o amor pode ser leve.',
    'Porque você me mostrou que vale a pena acreditar.',
    'Porque você me mostrou que Deus realmente escreve histórias lindas.',
    'Porque eu agradeço a Ele por você todos os dias.',
    'Porque eu nunca quero perder você.',
    'Porque eu nunca quero desistir de você.',
    'Porque eu nunca vou cansar de escolher você.',
    'Porque eu escolheria você em qualquer universo.',
    'Porque eu escolheria você em qualquer época.',
    'Porque eu escolheria você em qualquer vida.',
    'Porque eu escolheria você mil vezes.',
    'Porque eu escolheria você infinitas vezes.',
    'Porque meu coração nunca quis outra pessoa.',
    'Porque meu coração encontrou seu lugar em você.',
    'Porque você faz meu mundo inteiro fazer sentido.',
    'Porque amar você nunca foi um esforço.',
    'Porque amar você foi inevitável.',
    'Porque amar você foi um privilégio.',
    'Porque amar você é uma das melhores coisas que já aconteceram comigo.',
    'Porque você vale muito mais do que qualquer texto poderia explicar.',
    'Porque nenhuma lista conseguiria falar tudo.',
    'Porque nenhuma palavra conseguiria medir o tamanho desse sentimento.',
    'Porque nem quinhentos motivos são suficientes.',
    'Porque nem cinco mil seriam.',
    'Porque nem cinco milhões seriam.',
    'Porque o infinito ainda seria pouco.',
    'Porque todos os dias nasce um motivo novo.',
    'Porque amanhã eu teria mais um.',
    'Porque depois de amanhã também.',
    'Porque enquanto meu coração bater...',
    'ele continuará encontrando novos motivos para amar você.',
    'Porque essa lista nunca acaba.',
    'Porque o amor que eu sinto por você também não.',
    '❤️ Porque, no final de tudo... sempre será você. ❤️'
  ]

  // ================================================

  const capitulos = {
    103: cap103,
    151: cap151,
    201: cap201,
    251: cap251,
    301: cap301,
    351: cap351,
    401: cap401,
    451: cap451
  }

  // ================================================

  const player = document.getElementById('player')

  const titulo = document.getElementById('titulo')

  const motivo = document.getElementById('motivo')

  const contador = document.querySelector('.contador')

  const btnAnterior = document.getElementById('anterior')

  const btnProximo = document.getElementById('proximo')

  const botoes = document.querySelectorAll('.capitulo')

  let listaAtual = []

  let inicioCapitulo = 103

  let indice = 0

  // ================================================

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      inicioCapitulo = Number(botao.dataset.capitulo)

      listaAtual = capitulos[inicioCapitulo]

      indice = 0

      player.classList.add('ativo')

      mostrarMotivo()

      player.scrollIntoView({
        behavior: 'smooth'
      })
    })
  })

  // ================================================

  function mostrarMotivo() {
    if (listaAtual.length === 0) {
      titulo.innerHTML = 'Em breve ❤️'

      motivo.innerHTML = 'Esse capítulo ainda será escrito...'

      contador.innerHTML = ''

      return
    }

    contador.innerHTML = `Motivo ${inicioCapitulo + indice}`

    titulo.innerHTML = `Motivo #${inicioCapitulo + indice}`

    motivo.style.opacity = 0

    setTimeout(() => {
      motivo.innerHTML = listaAtual[indice]

      motivo.style.opacity = 1
    }, 200)
  }

  // ================================================

  btnProximo.addEventListener('click', () => {
    if (listaAtual.length === 0) return

    if (indice < listaAtual.length - 1) {
      indice++

      mostrarMotivo()
    }
  })

  // ================================================

  btnAnterior.addEventListener('click', () => {
    if (listaAtual.length === 0) return

    if (indice > 0) {
      indice--

      mostrarMotivo()
    }
  })
})
