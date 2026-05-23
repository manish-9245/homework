# Problem: Print reverse pyramid.

n=int(input())
[print(' '*(n-i)+'*'*(2*i-1)) for i in range(n,0,-1)]
