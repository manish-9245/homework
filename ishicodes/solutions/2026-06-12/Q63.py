# Problem: Find pair with given sum.

arr=list(map(int,input().split())); s=int(input()); [print(arr[i],arr[j]) for i in range(len(arr)) for j in range(i+1,len(arr)) if arr[i]+arr[j]==s]
