# Problem: Write function to find maximum.

def max_val(a,b): return a if a>b else b
print(max_val(*map(int,input().split())))
