t=0
draw=_=>{
t||createCanvas(w=640,w)
background(w)
noStroke(N=noise)
for(i=w;i-=40;)
for(j=w;j-=80;){
fill(k=N(i)*96,i%256,j%256)
textSize(N(a=(t+j)/2)*52)
text("#♭♮♩♪♫♬"[~~(k+=i)%7],~~(57*a+k)%680-40,j-abs(sin(a*2-k))*40+30)
}
t+=.04
}