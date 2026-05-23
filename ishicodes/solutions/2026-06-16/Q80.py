# Problem: Find column-wise sum.

r, c = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(r)]
print(*(sum(col) for col in zip(*a)))
