# Problem: Count even and odd elements.

arr = list(map(int, input().split())); e=sum(1 for x in arr if x%2==0); print(f"Even: {e}, Odd: {len(arr)-e}")
