# Problem: Create library management system.

status = 1
c = int(input())
print("Issued" if c == 1 and status else "Returned" if c == 2 else "Error")
