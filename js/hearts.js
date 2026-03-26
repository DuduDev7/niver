const c = document.getElementById("hearts");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let arr = [];

// Função para criar um coração
function drawHeart(x, y, size) {
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size/2, x - size, y - size/2, x - size, y + size/4);
  ctx.bezierCurveTo(x - size, y + size, x, y + size*1.5, x, y + size*2);
  ctx.bezierCurveTo(x, y + size*1.5, x + size, y + size, x + size, y + size/4);
  ctx.bezierCurveTo(x + size, y - size/2, x, y - size/2, x, y);
  ctx.fill();
}

function add(){
  arr.push({
    x: Math.random()*c.width,
    y: c.height,
    s: Math.random()*10+5, // tamanho do coração
    v: Math.random()*2+1   // velocidade
  });
}

function draw(){
  ctx.clearRect(0,0,c.width,c.height);

  arr.forEach((h,i)=>{
    drawHeart(h.x, h.y, h.s);

    h.y -= h.v;
    if(h.y < -h.s*2) arr.splice(i,1); // remove quando sai da tela
  });

  requestAnimationFrame(draw);
}

setInterval(add,300);
draw();