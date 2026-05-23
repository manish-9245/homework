# Problem: Count vowels and consonants.

s = input().strip().lower()
v = sum(1 for c in s if c in "aeiou")
c = sum(1 for c in s if c.isalpha() and c not in "aeiou")
print(f"Vowels: {v}, Consonants: {c}")
