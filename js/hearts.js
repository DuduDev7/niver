const c = document.getElementById("hearts");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let arr = [];

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
    ctx.fillStyle="pink";
    ctx.beginPath();
    ctx.arc(h.x,h.y,h.s,0,Math.PI*2);
    ctx.fill();

    h.y -= h.v;
    if(h.y<0) arr.splice(i,1);
  });

  requestAnimationFrame(draw);
}

setInterval(add,300);
draw();