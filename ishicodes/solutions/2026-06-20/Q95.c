/*
 * Problem: Find longest word.
 */

#include <stdio.h>
#include <string.h>
int main() {
  char s[1000], w[1000], maxw[1000];
  int maxl = 0;
  while (scanf("%s", w) == 1) {
    if (strlen(w) > maxl) {
      maxl = strlen(w);
      strcpy(maxw, w);
    }
  }
  printf("%s", maxw);
  return 0;
}
