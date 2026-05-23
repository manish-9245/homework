/*
 * Problem: Union of arrays.
 */

#include <stdio.h>
int main() {
  int n, m, x;
  scanf("%d%d", &n, &m);
  int h[10000] = {0};
  for (int i = 0; i < n + m; i++) {
    scanf("%d", &x);
    if (!h[x]) {
      printf("%d ", x);
      h[x] = 1;
    }
  }
  return 0;
}
