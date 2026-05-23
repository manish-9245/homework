# Problem: Check strong number.

import math
n=input().strip();print("Yes" if sum(math.factorial(int(x)) for x in n)==int(n) else "No")
