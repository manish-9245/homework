/*
 * Problem: Check palindrome string.
 */

#include <stdio.h>
#include <string.h>
int main() {
  char s[1000];
  scanf("%s", s);
  int n = strlen(s), f = 1;
  for (int i = 0; i < n / 2; i++)
    if (s[i] != s[n - i - 1])
      f = 0;
  printf(f ? "Yes" : "No");
  return 0;
}
