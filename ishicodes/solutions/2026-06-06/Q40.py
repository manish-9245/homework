# Problem: Print character pyramid.

n = int(input())
[print(" " * (n - i) + (chr(64 + i) + " ") * i) for i in range(1, n + 1)]
