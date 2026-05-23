# Problem: Find duplicates in array.

import collections

arr = list(map(int, input().split()))
print(*(k for k, v in collections.Counter(arr).items() if v > 1))
