# Problem: Create quiz application.

sc = 0
ans = input("1+1=? 1)1 2)2\n")
sc += 1 if ans == "2" else 0
print(f"Score: {sc}")
