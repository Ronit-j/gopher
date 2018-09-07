l=[10,4,2,3,21]
len.[]=0
len.(x::xs)=1+len.xs
element.[]=undefined
element.(x::xs)=x
tailer.[]=undefined
tailer.(x::[])=x
tailer.(x::xs)=tailer.xs
tail1.[]=undefined
tail1.(x::xs)=xs
drop1.0.l=l
drop1.n.[]=[]
drop1.(n+1).(x::xs)=drop.n.xs
take1.0.l=[]
take1.n.[]=[]
take1.(n+1).(l::ls)=l::take1.n.ls
max1.(x::[])=x
max1.(x::xs)=if(x> max1.xs) then x else max1.xs
sorter.[]=[]
sorter.(y::ys)=sorter.[x|x<-ys,x<=y]++[y]++sorter.[x|x<-ys,x>y]
pp.0=1
pp.1=1
pp.n=n*pp.(n-1)
p1.n.r=pp.n/pp.(n-r)
c1.n.r=p1.n.r/pp.(r)
--plus.x.y=x+y
plus=(\y->(\x -> x+y))
map1.f.[]=[]
map1.f.(x::xs)=f.x++map1.f.xs
add1.(x::xs)=x
conc=map1.(\x->x)
reduce.f.n.[]=n
reduce.f.n.(x::xs)= x `f` reduce.f.n.xs
sum2=reduce.(+).0
concat2=reduce.(++).[]
len2=reduce.(\x->(\y->1+y)).0
mul.(x::[])=1
mul.(x::xs)=10*mul.xs
decimal1.[]=[]
decimal1.(x::xs)=ord.x-ord.'0'::decimal1.xs
decimal=reduce.(\x->(\y->ord.x-ord.'0'+10*y)).0
reduceprime.f.n.[]=n
reduceprime.f.n.(x::xs)=reduceprime.f.n.xs `f` x
cc1=reduceprime.(\x->(\y->y::x)).[]
decimal2=reduceprime.(\x->(\y->ord.y-ord.'0'+10*x)).0

ctype Direction where
      N,S,E,W : Direction

turnR.N=E
turnR.E=S
turnR.S=W
turnR.W=N

ctype Mylist where
      Empty : Mylist
      Cons : Int->Mylist->Mylist

mylength .Empty=0
mylength.(Cons.x.xs)= 1 + mylength.xs


xform.Empty=[]
xform.(Cons.x.xs)=x:: xform.xs


ctype Bintree where
      Lf: Int->Bintree
      Br:Int->Bintree->Bintree->Bintree
t1=Lf.1
t2=Lf.2
t3=Br.6.t1.t2
t4=Lf.4
t5=Lf.5
t6=Br.7.t4.t5
t7=Br.8.t3.t6


preorder : Bintree -> [Int]
preorder.(Lf.x)=[x]
preorder.(Br.x.lft.rt)=[x]++preorder.lft++ preorder.rt


ctype Mary where
      BR:Int-> [Mary]->Mary
      
      
