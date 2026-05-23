# Problem: Print hollow square pattern.

n=int(input())
print('*'*n); [print('*'+' '*(n-2)+'*') for _ in range(n-2)]; print('*'*n if n>1 else '')
