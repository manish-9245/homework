# Problem: Create ATM simulation.

b = 1000
while True:
    c = int(input())
    if c == 1:
        print(b)
    elif c == 2:
        b += int(input())
    elif c == 3:
        b -= int(input())
    else:
        break
