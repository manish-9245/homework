# Problem: Find first non-repeating character.

s = input().strip()
print(next((c for c in s if s.count(c) == 1), ""))
