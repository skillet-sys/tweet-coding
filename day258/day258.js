setup=_=>createCanvas(w=640,w)+fill(w)+textSize(36)+textAlign(c=CENTER,c)+angleMode(DEGREES)
draw=_=>{
background(0)
for(i=0;i<=w;i+=40)
for(j=0;j<=w;j+=40){
push()
translate(i,j)
rotate(90+int(atan2(mouseY-j,mouseX-i)))
text("☝",0,0)
pop()
}
}
