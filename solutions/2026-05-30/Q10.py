# Problem: Print prime numbers in a range.

a, b = map(int, input().split())
print(
    *(
        i
        for i in range(a, b + 1)
        if i > 1 and all(i % j != 0 for j in range(2, int(i**0.5) + 1))
    )
)
