# Problem: Create menu-driven calculator.

a,b,c=map(int,input().split()); print(a+b if c==1 else a-b if c==2 else a*b if c==3 else a/b)
