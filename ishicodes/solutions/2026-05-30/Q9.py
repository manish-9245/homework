# Problem: Check whether a number is prime.

n = int(input())
print("Yes" if n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1)) else "No")
