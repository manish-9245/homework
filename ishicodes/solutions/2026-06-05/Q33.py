# Problem: Print reverse star pattern:
# ***
# **
# *

n = int(input())
[print("*" * i) for i in range(n, 0, -1)]
