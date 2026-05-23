# Problem: Find diagonal sum.

n=int(input()); a=[list(map(int,input().split())) for _ in range(n)]; print(sum(a[i][i] for i in range(n)))
