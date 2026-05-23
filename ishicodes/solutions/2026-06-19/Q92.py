# Problem: Find maximum occurring character.

import collections; print(collections.Counter(input().strip()).most_common(1)[0][0])
