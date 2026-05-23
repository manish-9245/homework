/*
 * Problem: Convert binary to decimal.
 */

#include <stdio.h>
#include <stdlib.h>
int main() {
  char b[65];
  scanf("%s", b);
  printf("%ld", strtol(b, NULL, 2));
  return 0;
}
