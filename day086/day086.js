t=0
draw=_={
tcreateCanvas(w=640,w)+stroke(w,0,0,190)+noFill`#つぶやきProcessing`
background(0,25);scale(4)
for(x=0;x646;x+=19)
for(y=0;y660;y+=22){circle(p=x-sin(t-(u=PI90(50x+y+y)))25,q=y-sin(t-u)25,r=20cos(PI180y+t))
line(p+(h=r2),q-h,p-h,q+h)}
t+=PI90
}