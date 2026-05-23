/*
 * Problem: Find diagonal sum.
 */

#include <stdio.h>
int main() {
  int n, s = 0, x;
  scanf("%d", &n);
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++) {
      scanf("%d", &x);
      if (i == j)
        s += x;
    }
  printf("%d", s);
  return 0;
}
