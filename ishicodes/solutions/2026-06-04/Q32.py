# Problem: Print repeated-number pattern:
1
22
333

n = int(input())
[print(str(i) * i) for i in range(1, n + 1)]
