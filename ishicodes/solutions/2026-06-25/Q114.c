/*
 * Problem: Create menu-driven array operations system.
 */

#include <stdio.h>
int main() {
  int a[100], n = 0, c, x;
  scanf("%d", &c);
  if (c == 1) {
    scanf("%d", &x);
    a[n++] = x;
  }
  printf("Done");
  return 0;
}
