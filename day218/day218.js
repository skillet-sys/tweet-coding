t=0
f=g=>50*(4*g(u=R*i+t)+g(t*2+4*u))
draw=_=>{
t||createCanvas(w=640,w,WEBGL)+normalMaterial();
background(R=PI/180)
Y=rotateY
Y(t+=R/3)
for(i=360;i-=2;pop(box(50))){
push()
translate(x=f(cos),y=f(sin),4*sin(R*(4+x+y)))
rotate(PI/3*i)
Y(TAU/3)
}
}