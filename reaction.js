let startTime;

function startReaction(){

document.getElementById("reactionText").innerText="Wait...";

setTimeout(()=>{

document.getElementById("reactionText").innerText="CLICK!";

startTime=Date.now();

document.onclick=()=>{

let time=Date.now()-startTime;

alert(time+" ms");

document.onclick=null;

};

},Math.random()*3000);

}
