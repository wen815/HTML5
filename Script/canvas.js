/*Background*/
var c=document.getElementById("c");
var cxt=c.getContext("2d");
var grd=cxt.createLinearGradient(175,0,175,50);
grd.addColorStop(0,"#666666");
grd.addColorStop(1,"#6666ff");
cxt.fillStyle=grd;
cxt.fillRect(0,0,1000,5000);


