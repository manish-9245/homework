# Problem: Check Armstrong number.

s=input().strip();print("Yes" if sum(int(x)**len(s) for x in s)==int(s) else "No")
