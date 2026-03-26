function check() {
  if (localStorage.getItem('auth') !== 'true') {
    window.location.href = 'login.html'
  }
}

function go(p) {
  window.location.href = p
}

let imgs = [
  null, // 👈 primeiro é o "mistério"
  'imgs/nossa.jpeg',
  'imgs/missi.jpeg',
  'imgs/camp.jpeg',
  'imgs/arthur.jpeg',
  'imgs/sesi.jpeg'
]

let textos = ['❤️', '', '', '']

let i = 0

function next() {
  i = (i + 1) % imgs.length

  const img = document.getElementById('img')
  const txt = document.getElementById('texto')

  if (imgs[i] === null) {
    img.style.display = 'none'
    txt.innerText = textos[i]
    txt.className = 'misterio-text'
  } else {
    img.style.display = 'block'
    img.src = imgs[i]
    txt.innerText = ''
  }
}