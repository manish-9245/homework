# Problem: Character frequency.

import collections; [print(f"{k}:{v}", end=' ') for k,v in collections.Counter(input().strip()).items()]
