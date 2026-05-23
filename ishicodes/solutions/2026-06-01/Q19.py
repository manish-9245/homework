# Problem: Print factors of a number.

n = int(input())
print(*(i for i in range(1, n + 1) if n % i == 0))
