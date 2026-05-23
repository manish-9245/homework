# Problem: Write function for palindrome.

def is_palin(n): return str(n)==str(n)[::-1]
print("Yes" if is_palin(int(input())) else "No")
