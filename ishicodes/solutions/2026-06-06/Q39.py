# Problem: Print number pyramid.

n=int(input())
[print(' '*(n-i)+(str(i)+' ')*i) for i in range(1,n+1)]
