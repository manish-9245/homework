/*
 * Problem: Write function to find factorial.
 */

#include <stdio.h>
long long fact(int n) {
  long long f = 1;
  while (n > 1)
    f *= n--;
  return f;
}
int main() {
  int n;
  scanf("%d", &n);
  printf("%lld", fact(n));
  return 0;
}
