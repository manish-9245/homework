# Problem: Transpose matrix.

r, c = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(r)]
[print(*x) for x in zip(*a)]
