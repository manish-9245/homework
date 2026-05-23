# Problem: Union of arrays.

a = list(map(int, input().split()))
b = list(map(int, input().split()))
print(*list(dict.fromkeys(a + b)))
