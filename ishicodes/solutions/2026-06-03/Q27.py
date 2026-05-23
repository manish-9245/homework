# Problem: Recursive sum of digits.

def s(n): return 0 if n==0 else n%10+s(n//10)
print(s(int(input())))
