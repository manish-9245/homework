# Problem: Find maximum frequency element.

import collections; arr=list(map(int,input().split())); print(collections.Counter(arr).most_common(1)[0][0])
