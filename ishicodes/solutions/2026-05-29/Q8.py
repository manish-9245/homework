# Problem: Check whether a number is palindrome.

s = input().strip()
print("Yes" if s == s[::-1] else "No")
