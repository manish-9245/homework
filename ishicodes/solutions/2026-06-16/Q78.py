# Problem: Check symmetric matrix.

n=int(input()); a=[list(map(int,input().split())) for _ in range(n)]; print("Yes" if all(a[i][j]==a[j][i] for i in range(n) for j in range(n)) else "No")
