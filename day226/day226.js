x=y=0
draw=_=>{
x||createCanvas(w=640,w)+noStroke(F=fill,C=circle)
background(w,96)
X=mouseX-x
Y=mouseY-y
F('purple')
C(x+=X/50,y+=Y/50,150)
rect(x-75,y,150,75)
for(i=-30;i<31;i+=60){
F(w)
C(x+i,y,30)
F(0)
C(x+i+7*cos(t=atan2(Y,X)),y+7*sin(t),15)
}
}
