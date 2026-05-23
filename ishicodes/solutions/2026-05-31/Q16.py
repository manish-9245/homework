# Problem: Print Armstrong numbers in a range.

a,b=map(int,input().split())
print(*(i for i in range(a,b+1) if sum(int(x)**len(str(i)) for x in str(i))==i))
