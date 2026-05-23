# Problem: Write function for Fibonacci.


def print_fib(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b


print_fib(int(input()))
