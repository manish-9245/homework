# Problem: Recursive reverse number.


def rev(s):
    return s if len(s) <= 1 else rev(s[1:]) + s[0]


print(rev(input().strip()))
