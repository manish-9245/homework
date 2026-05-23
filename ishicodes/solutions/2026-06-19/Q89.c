/*
 * Problem: Find first non-repeating character.
 */

#include <stdio.h>
int main() {
  char s[1000];
  scanf("%s", s);
  int f[256] = {0};
  for (int i = 0; s[i]; i++)
    f[s[i]]++;
  for (int i = 0; s[i]; i++)
    if (f[s[i]] == 1) {
      printf("%c", s[i]);
      break;
    }
  return 0;
}
