// =========================
// LIRIOS 
// =========================

document.addEventListener('DOMContentLoaded',()=>{

if(!document.body.classList.contains('lirios-page')){
return
}

const cenas =
document.querySelectorAll('.cena')

const botoes =
document.querySelectorAll('.btnProximo')

const petalas =
document.getElementById('petalas')

let cenaAtual = 0

let velocidade = 900

function criarPetala(){

const petala =
document.createElement('div')

petala.classList.add('petala')

petala.innerHTML = '🌸'

petala.style.left =
Math.random()*100+'vw'

petala.style.fontSize =
(18+Math.random()*20)+'px'

petala.style.animationDuration =
(8+Math.random()*8)+'s'

petalas.appendChild(petala)

setTimeout(()=>{

petala.remove()

},15000)

}

function iniciarPetalas(){

setInterval(()=>{

criarPetala()

if(cenaAtual >= 2){

criarPetala()

}

if(cenaAtual === 3){

criarPetala()
criarPetala()

}

},velocidade)

}

iniciarPetalas()

function trocarFundo(){

if(cenaAtual <= 1){

document.body.style.backgroundImage =
"url('imgs/liriosClaro.JPEG')"

}else{

document.body.style.backgroundImage =
"url('imgs/lirios.JPEG')"

}

}

function mostrarCena(){

cenas.forEach(c=>{

c.classList.remove('ativa')

})

cenas[cenaAtual]
.classList.add('ativa')

trocarFundo()

if(cenaAtual === 3){

setTimeout(()=>{

const destaque =
document.querySelector('.destaque')

if(destaque){

destaque.classList.add('brilho')

}

},1000)

}

}

botoes.forEach(botao=>{

botao.addEventListener('click',()=>{

if(cenaAtual < cenas.length-1){

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

if(document.body.classList.contains('coordenadas-page')){

  const blocos =
  document.querySelectorAll('.bloco')
  
  let atual = 0
  
  function mostrar(id){
  
    blocos.forEach(bloco=>{
  
      bloco.classList.remove('ativo')
  
    })
  
    document
    .getElementById(id)
    .classList
    .add('ativo')
  
  }
  
  const btnIniciar =
  document.getElementById('btnIniciar')
  
  if(btnIniciar){
  
  btnIniciar.addEventListener('click',()=>{
  
    mostrar('bloco2')
  
    const textos = [
  
      'Analisando sinais...',
      'Analisando memórias...',
      'Analisando conversas...',
      'Destino encontrado.'
  
    ]
  
    let i = 0
  
    const digitando =
    document.getElementById(
    'digitando'
    )
  
    const intervalo =
    setInterval(()=>{
  
      digitando.innerHTML +=
      textos[i] + '<br>'
  
      i++
  
      if(i >= textos.length){
  
        clearInterval(intervalo)
  
        setTimeout(()=>{
  
          mostrar('bloco3')
  
        },2000)
  
      }
  
    },1500)
  
  })
  
  }
  
  document
  .querySelectorAll('.btnProximo')
  .forEach(btn=>{
  
    btn.addEventListener('click',()=>{
  
      atual++
  
      mostrar(
        'bloco' + (atual + 3)
      )
  
      if(atual === 3){
  
        animarNome()
  
      }
  
    })
  
  })
  
  function animarNome(){
  
    const letras =
    ['J','JU','JUL','JULI','JULIA']
  
    const nome =
    document.getElementById(
    'nomeFinal'
    )
  
    if(!nome) return
  
    let i = 0
  
    const intervalo =
    setInterval(()=>{
  
      nome.innerHTML =
      letras[i]
  
      i++
  
      if(i >= letras.length){
  
        clearInterval(intervalo)
  
      }
  
    },600)
  
  }
  
  }

// BANDEIRA 

document.addEventListener('DOMContentLoaded',()=>{

  if(
  !document.body.classList.contains(
  'bandeira-page'
  )
  ){
  return
  }
  
  const telas =
  document.querySelectorAll(
  '.tela'
  )
  
  const botoes =
  document.querySelectorAll(
  '.btnProximo'
  )
  
  let atual = 0
  
  function mostrar(indice){
  

  telas.forEach(tela=>{
  
    tela.classList.remove(
      'ativa'
    )
  
  })
  
  telas[indice].classList.add(
    'ativa'
  )

  
  }
  
  botoes.forEach(botao=>{
  
  botao.addEventListener(
    'click',
    ()=>{
  
      atual++
  
      if(
        atual >= telas.length
      ){
        return
      }
  
      mostrar(atual)
  
    }
  )

  
  })
  
  mostrar(0)
  
  })
  

  document.addEventListener('DOMContentLoaded', () => {

    if(!document.body.classList.contains('podio-page')){
      return
    }
  
    const telas =
    document.querySelectorAll('.tela')
  
    const botoes =
    document.querySelectorAll('.btnProximo')
  
    let telaAtual = 0
  
    function mostrarTela(indice){
  
      telas.forEach(tela => {
  
        tela.classList.remove('ativa')
  
      })
  
      telas[indice].classList.add('ativa')
  
    }
  
    botoes.forEach(botao => {
  
      botao.addEventListener('click', () => {
  
        telaAtual++
  
        if(telaAtual >= telas.length){
          return
        }
  
        mostrarTela(telaAtual)
  
        if(telaAtual === telas.length - 1){
  
          const destaque =
          document.querySelector('.destaque')
  
          if(destaque){
  
            destaque.scrollIntoView({
              behavior:'smooth',
              block:'center'
            })
  
          }
  
        }
  
      })
  
    })
  
    mostrarTela(0)
  
  })