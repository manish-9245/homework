/*
 * Problem: Count words in a sentence.
 */

#include <stdio.h>
int main() {
  char s[1000];
  int c = 0, w = 0;
  while (scanf("%s", s) == 1)
    w++;
  printf("%d", w);
  return 0;
}
