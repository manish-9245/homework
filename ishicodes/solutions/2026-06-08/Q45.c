/*
 * Problem: Write function for palindrome.
 */

#include <stdio.h>
int isPalin(int n) {
  int r = 0, t = n;
  while (n) {
    r = r * 10 + n % 10;
    n /= 10;
  }
  return r == t;
}
int main() {
  int n;
  scanf("%d", &n);
  printf(isPalin(n) ? "Yes" : "No");
  return 0;
}
