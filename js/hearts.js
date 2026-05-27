const c = document.getElementById("hearts");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let arr = [];

// desenhar símbolo
function drawItem(x, y, size, emoji, color){
  ctx.font = `bold ${size * 3}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = color;
  ctx.fillText(emoji, x, y);
}

function add(){
  // Sorteia um número de 0 a 3 para escolher um dos 4 elementos
  const sorteio = Math.floor(Math.random() * 4);
  
  let escolhidoEmoji = "❤️";
  let escolhidaColor = "#ff4d6d";

  if (sorteio === 1) {
    escolhidoEmoji = "4";
    escolhidaColor = "#D3AF37"; // Dourado
  } else if (sorteio === 2) {
    escolhidoEmoji = "🦀";
    escolhidaColor = "#ff5c00"; // Laranja/Vermelho Caranguejo
  }

  arr.push({
    x: Math.random() * c.width,
    y: c.height + 50,
    s: Math.random() * 10 + 8,
    v: Math.random() * 2 + 1,
    emoji: escolhidoEmoji,
    color: escolhidaColor
  });
}

function draw(){
  ctx.clearRect(0,0,c.width,c.height);

  arr.forEach((h,i)=>{
    drawItem(
      h.x,
      h.y,
      h.s,
      h.emoji,
      h.color
    );

    h.y -= h.v;

    if(h.y < -100){
      arr.splice(i,1);
    }
  });

  requestAnimationFrame(draw);
}

setInterval(add, 250);

draw();

window.addEventListener("resize", () => {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
});