const win = document.getElementById("body");
const pinkBalloon = document.getElementById("pink-balloon");
pinkBalloon.style.left = 0;
pinkBalloon.style.top = 0;
let screenWidth = 500//window.screen.width; 
let screenHeight = 600//window.screen.height;
let dirx = 1
let diry = 1
function moveBalloon(pinkBalloon){
let xleft = pinkBalloon.offsetLeft;
let xright = pinkBalloon.offsetLeft + pinkBalloon.innerWidth;
let ytop = pinkBalloon.offsetTop;
let ybottom = pinkBalloon.offsetTop + pinkBalloon.innerHeight;
if(xleft>screenWidth){
dirx=-1
}else if(xleft<0){
    dirx=1
}
if(ytop>screenHeight){
diry=-1
}else if(ytop<0){
    diry=1
}

xleft = xleft+dirx
ytop = ytop+diry



pinkBalloon.style.left = xleft+"px";
pinkBalloon.style.top = ytop+"px";
}

setInterval(function(){moveBalloon(pinkBalloon)},5)

