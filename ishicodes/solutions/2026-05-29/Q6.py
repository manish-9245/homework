# Problem: Reverse a number.

s = input().strip()
print("-" + s[1:][::-1] if s[0] == "-" else s[::-1])
