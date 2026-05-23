/*
 * Problem: Find largest and smallest element.
 */

#include <stdio.h>
int main() {
  int n, min, max;
  scanf("%d", &n);
  for (int i = 0, x; i < n; i++) {
    scanf("%d", &x);
    if (i == 0)
      min = max = x;
    else {
      if (x > max)
        max = x;
      if (x < min)
        min = x;
    }
  }
  printf("Min: %d, Max: %d", min, max);
  return 0;
}
