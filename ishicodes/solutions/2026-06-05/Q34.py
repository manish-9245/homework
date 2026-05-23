# Problem: Print reverse number triangle:
123
12
1

n = int(input())
[print("".join(str(j) for j in range(1, i + 1))) for i in range(n, 0, -1)]
