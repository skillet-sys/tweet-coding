t=0
draw=_=>{
t||createCanvas(w=640,w)
background(0)
translate(h=w/2,h)
for(r=270;r-=18;){
fill(w,max(r-15,128))
textSize(r/7+1)
rotate(acos(cos(t)/2))
for(u=0;u<TAU;u+=PI/18)
text(char(10026+int(r+180/PI*u)%30),r*acos(sin(t-u)),r*atan(cos(u)))
}
t+=PI/360
}
