# Problem: Print character triangle:
A
AB
ABC

n = int(input())
[print("".join(chr(65 + j) for j in range(i))) for i in range(1, n + 1)]
