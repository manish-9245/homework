# Problem: Intersection of arrays.

a=list(map(int,input().split())); b=set(map(int,input().split())); print(*(x for x in a if x in b))
