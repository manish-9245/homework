# Problem: Write function for Fibonacci.

def print_fib(n): a,b=0,1; [print(a,end=' ') or (a,b):=(b,a+b) for _ in range(n)]
print_fib(int(input()))
