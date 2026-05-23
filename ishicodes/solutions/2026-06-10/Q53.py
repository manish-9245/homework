# Problem: Linear search.

arr=list(map(int,input().split())); k=int(input()); print(f"Found at {arr.index(k)}" if k in arr else "Not found")
