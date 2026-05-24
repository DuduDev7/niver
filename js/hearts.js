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

  // escolhe aleatoriamente entre 4 e coração
  const isHeart = Math.random() > 0.5;

  arr.push({

    x: Math.random() * c.width,

    y: c.height + 50,

    s: Math.random() * 10 + 8,

    v: Math.random() * 2 + 1,

    emoji: isHeart ? "❤️" : "4",

    color: isHeart ? "#ff4d6d" : "#D3AF37"
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