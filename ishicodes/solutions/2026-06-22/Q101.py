# Problem: Create number guessing game.

import random

n = random.randint(1, 100)
g = 0
while g != n:
    g = int(input())
    print("High" if g > n else "Low" if g < n else "Win")
