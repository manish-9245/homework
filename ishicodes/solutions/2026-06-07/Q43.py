# Problem: Write function to check prime.

def is_prime(n): return n>1 and all(n%i!=0 for i in range(2,int(n**0.5)+1))
print("Yes" if is_prime(int(input())) else "No")
