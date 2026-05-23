# Problem: Write function for Armstrong.

def is_arm(n): s=str(n); return sum(int(x)**len(s) for x in s)==n
print("Yes" if is_arm(int(input())) else "No")
