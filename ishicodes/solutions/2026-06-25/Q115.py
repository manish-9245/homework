# Problem: Create menu-driven string operations system.

s,c=input().split(); print(len(s) if c=='1' else s[::-1] if c=='2' else s.upper())
