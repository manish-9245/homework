/*
 * Problem: Recursive sum of digits.
 */

#include <stdio.h>
int sum(int n) { return n == 0 ? 0 : n % 10 + sum(n / 10); }
int main() {
  int n;
  scanf("%d", &n);
  printf("%d", sum(n));
  return 0;
}
