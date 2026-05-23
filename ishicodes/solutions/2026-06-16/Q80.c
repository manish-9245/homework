/*
 * Problem: Find column-wise sum.
 */

#include <stdio.h>
int main() {
  int r, c;
  scanf("%d%d", &r, &c);
  int a[r][c], s[100] = {0};
  for (int i = 0; i < r; i++)
    for (int j = 0; j < c; j++) {
      scanf("%d", &a[i][j]);
      s[j] += a[i][j];
    }
  for (int j = 0; j < c; j++)
    printf("%d ", s[j]);
  return 0;
}
