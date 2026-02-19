let canvas=document.getElementById("snake");
let ctx=canvas.getContext("2d");

let x=200;
let y=200;

document.addEventListener("keydown",move);

function move(e){

if(e.key=="ArrowUp") y-=20;
if(e.key=="ArrowDown") y+=20;
if(e.key=="ArrowLeft") x-=20;
if(e.key=="ArrowRight") x+=20;

draw();

}

function draw(){

ctx.clearRect(0,0,400,400);

ctx.fillStyle="lime";

ctx.fillRect(x,y,20,20);

}
