# Problem: Compress a string.

import itertools; print(''.join(k+str(len(list(g))) for k,g in itertools.groupby(input().strip())))
