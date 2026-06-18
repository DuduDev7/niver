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
  