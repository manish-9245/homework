/*
 * Problem: Compress a string.
 */

#include <stdio.h>
int main() {
  char s[1000];
  scanf("%s", s);
  for (int i = 0; s[i];) {
    int c = 1;
    while (s[i] == s[i + 1]) {
      c++;
      i++;
    }
    printf("%c%d", s[i], c);
    i++;
  }
  return 0;
}
