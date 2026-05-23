/*
 * Problem: Create mini library system.
 */

#include <stdio.h>
#include <string.h>
int main() {
  char b[10][50];
  int n = 0, c;
  scanf("%d", &c);
  if (c == 1) {
    scanf("%s", b[n++]);
  }
  printf("Books: %d", n);
  return 0;
}
