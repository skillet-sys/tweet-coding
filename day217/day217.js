v=0
f=g=>202/i*(i*g(t=.02*v)+g(i*t))
draw=_=>{
v++||createCanvas(w=640,w)+textSize(32)
background(192,16)
for(i=9;i-->3;pop(text(String.fromCodePoint(128512+int(v/60)+i),0,0))){
push(x=f(cos),y=f(sin))
translate(x+w/2,y+w/2)
rotate(atan2(y,x))
}
}
