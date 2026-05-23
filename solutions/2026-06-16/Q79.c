/*
 * Problem: Find row-wise sum.
 */

#include <stdio.h>
int main() {
  int r, c;
  scanf("%d%d", &r, &c);
  for (int i = 0; i < r; i++) {
    int s = 0, x;
    for (int j = 0; j < c; j++) {
      scanf("%d", &x);
      s += x;
    }
    printf("%d\n", s);
  }
  return 0;
}
