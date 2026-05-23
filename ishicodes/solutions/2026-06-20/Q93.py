# Problem: Check string rotation.

s1, s2 = input().strip(), input().strip()
print("Yes" if len(s1) == len(s2) and s2 in s1 + s1 else "No")
