# Problem: Find first repeating character.

s=input().strip(); print(next((c for i,c in enumerate(s) if c in s[:i]), ''))
