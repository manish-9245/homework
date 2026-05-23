# Problem: Create marksheet generation system.

m = list(map(int, input().split()))
t = sum(m)
print(f"Total: {t}, {'Pass' if t>120 else 'Fail'}")
