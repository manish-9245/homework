# Problem: Rotate array left.

arr=list(map(int,input().split())); d=int(input())%len(arr); print(*(arr[d:]+arr[:d]))
