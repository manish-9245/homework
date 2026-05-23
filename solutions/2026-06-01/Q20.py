# Problem: Find largest prime factor.

n = int(input())
i = 2
while i * i <= n:
    if n % i:
        i += 1
    else:
        n //= i
print(n)
