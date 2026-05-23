# Problem: Print multiplication table of a given number.

n = int(input())
[print(f"{n} * {i} = {n*i}") for i in range(1, 11)]
