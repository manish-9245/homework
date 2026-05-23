/*
 * Problem: Print prime numbers in a range.
 */

#include <stdio.h>
int main() {
  int a, b;
  scanf("%d%d", &a, &b);
  for (int i = a; i <= b; i++) {
    int f = 1;
    for (int j = 2; j * j <= i; j++)
      if (i % j == 0)
        f = 0;
    if (f && i > 1)
      printf("%d ", i);
  }
  return 0;
}
