# Problem: Check perfect number.

n = int(input())
print("Yes" if sum(i for i in range(1, n) if n % i == 0) == n else "No")
