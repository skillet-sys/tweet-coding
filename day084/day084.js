t=p=q=0
draw=_=>{
t||createCanvas(w=640,w)+stroke`#つぶやきProcessing`
c=circle
background(0)
scale(2)
noFill(r=60)
c(h=w/4,h,r*2)
c(x=r*cos(t)+h,y=r*sin(t)+h,r*2)
fill(w)
for(u=0;u<=t;u+=PI/180)c(p=r*(1+cos(u)+cos(u*2))+100,q=r*(sin(u)+sin(u*2))+h,6)
line(x,y,p,q)
t+=PI/180
}
