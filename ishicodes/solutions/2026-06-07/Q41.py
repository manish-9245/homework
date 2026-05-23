# Problem: Write function to find sum of two numbers.


def sum_vals(a, b):
    return a + b


print(sum_vals(*map(int, input().split())))
