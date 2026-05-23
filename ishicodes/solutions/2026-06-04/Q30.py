# Problem: Print number triangle:
1
12
123

n=int(input())
[print(''.join(str(j) for j in range(1,i+1))) for i in range(1,n+1)]
