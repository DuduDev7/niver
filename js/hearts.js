const c = document.getElementById("hearts");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let arr = [];

// Função para criar um 4
function drawFour(x, y, size) {
  ctx.fillStyle = "#D3AF37"; // ouro
  ctx.font = `bold ${size * 3}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("4", x, y);
}

function add(){
  arr.push({
    x: Math.random()*c.width,
    y: c.height,
    s: Math.random()*10+5,
    v: Math.random()*2+1
  });
}

function draw(){
  ctx.clearRect(0,0,c.width,c.height);

  arr.forEach((h,i)=>{
    drawFour(h.x, h.y, h.s);

    h.y -= h.v;
    if(h.y < -h.s*2) arr.splice(i,1);
  });

  requestAnimationFrame(draw);
}

setInterval(add,300);
draw();