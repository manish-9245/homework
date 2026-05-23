# Problem: Multiply matrices.

n=int(input()); a=[list(map(int,input().split())) for _ in range(n)]; b=[list(map(int,input().split())) for _ in range(n)]; [print(*(sum(a[i][k]*b[k][j] for k in range(n)) for j in range(n))) for i in range(n)]
