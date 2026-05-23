/*
 * Problem: Find factorial of a number.
 */

#include <stdio.h>
int main() {
  int n;
  long long f = 1;
  scanf("%d", &n);
  for (int i = 1; i <= n; i++)
    f *= i;
  printf("%lld", f);
  return 0;
}
