/*
 * Problem: Check whether a number is palindrome.
 */

#include <stdio.h>
int main() {
  int n, t, r = 0;
  scanf("%d", &n);
  t = n;
  while (n) {
    r = r * 10 + n % 10;
    n /= 10;
  }
  if (t == r && t >= 0)
    printf("Yes");
  else
    printf("No");
  return 0;
}
