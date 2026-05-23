/*
 * Problem: Move zeroes to end.
 */

#include <stdio.h>
int main() {
  int n, c = 0;
  scanf("%d", &n);
  for (int i = 0, x; i < n; i++) {
    scanf("%d", &x);
    if (x != 0) {
      printf("%d ", x);
      c++;
    }
  }
  while (c++ < n)
    printf("0 ");
  return 0;
}
