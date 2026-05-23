# Problem: Print repeated character pattern:
A
BB
CCC

n=int(input())
[print(chr(64+i)*i) for i in range(1,n+1)]
