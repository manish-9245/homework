# Problem: Binary search.

import bisect; arr=list(map(int,input().split())); k=int(input()); i=bisect.bisect_left(arr,k); print(f"Found at {i}" if i!=len(arr) and arr[i]==k else "Not found")
