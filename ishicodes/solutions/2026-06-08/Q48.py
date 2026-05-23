# Problem: Write function for perfect number.


def is_perfect(n):
    return sum(i for i in range(1, n) if n % i == 0) == n


print("Yes" if is_perfect(int(input())) else "No")
