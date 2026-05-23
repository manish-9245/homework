# Problem: Remove duplicates from array.

arr = list(map(int, input().split()))
res = []
[res.append(x) for x in arr if x not in res]
print(*res)
