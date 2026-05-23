# Problem: Find common characters in strings.

print(''.join(sorted(set(input().strip()) & set(input().strip()))))
