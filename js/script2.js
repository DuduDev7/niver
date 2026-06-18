document.addEventListener('DOMContentLoaded', () => {

  if (!document.body.classList.contains('lirios-page')) {
  return
  }
  
  // =========================
  // PÉTALAS
  // =========================
  
  const petalasContainer =
  document.getElementById('petalas')
  
  function criarPetala() {
  
  const petala =
  document.createElement('div')
  
  petala.classList.add('petala')
  
  petala.innerHTML = '🌸'
  
  petala.style.left =
  Math.random() * 100 + 'vw'
  
  petala.style.fontSize =
  (18 + Math.random() * 20) + 'px'
  
  petala.style.animationDuration =
  (8 + Math.random() * 8) + 's'
  
  petalasContainer.appendChild(petala)
  
  setTimeout(() => {
    petala.remove()
  }, 15000)
  
  }
  
  setInterval(criarPetala, 700)
  
  // =========================
  // CENAS
  // =========================
  
  const cenas =
  document.querySelectorAll('.cena')
  
  const botoes =
  document.querySelectorAll('.btnProximo')
  
  let cenaAtual = 0
  
  function mostrarCena(indice){
  
  cenas.forEach(cena => {
    cena.classList.remove('ativa')
  })
  
  cenas[indice].classList.add('ativa')
  
  if(indice <= 1){
  
    document.body.style.backgroundImage =
    "url('imgs/liriosClaro.JPEG')"
  
  }else{
  
    document.body.style.backgroundImage =
    "url('imgs/lirios.JPEG')"
  
  }

  
  }
  
  botoes.forEach(botao => {
  
  botao.addEventListener('click', () => {
  
    cenaAtual++
  
    if(cenaAtual >= cenas.length){
      return
    }
  
    mostrarCena(cenaAtual)

    function mostrarCena(indice){

      cenas.forEach(cena => {
    
        cena.classList.remove('ativa')
    
      })
    
      cenas[indice].classList.add('ativa')
    
      // FUNDOS
    
      if(indice === 0 || indice === 1){
    
        document.body.style.backgroundImage =
        "url('imgs/liriosClaro.JPEG')"
    
      }else{
    
        document.body.style.backgroundImage =
        "url('imgs/lirios.JPEG')"
    
      }
    
    }
  
    if(cenaAtual === 3){
  
      const destaque =
      document.querySelector('.destaque')
  
      if(destaque){
  
        setTimeout(() => {
  
          destaque.classList.add('brilho')
  
        },1000)
  
      }
  
    }
  
  })
  
  })
  
  mostrarCena(0)
  
  })
  