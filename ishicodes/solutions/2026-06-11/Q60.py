# Problem: Move zeroes to end.

arr=list(map(int,input().split())); print(*( [x for x in arr if x!=0] + [0]*arr.count(0) ))
