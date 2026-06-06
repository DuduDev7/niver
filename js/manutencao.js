const papel = document.getElementById("papel")

let clique = 0

const mensagens = [

  "",

  "",

  "",

  "",

  "",

  ""

]

papel.addEventListener("click",()=>{

  clique++

  papel.innerHTML = mensagens[clique-1]

  if(clique >= mensagens.length){

    setTimeout(()=>{

      window.location.href="home.html"

    },1500)

  }

})