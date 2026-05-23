/*
 * Problem: Find nth Fibonacci term.
 */

#include <stdio.h>
int main() {
  int n, a = 0, b = 1, c;
  scanf("%d", &n);
  if (n == 1) {
    printf("0");
    return 0;
  }
  while (--n) {
    c = a + b;
    a = b;
    b = c;
  }
  printf("%d", a);
  return 0;
}
