/*
 * Problem: Create number guessing game.
 */

#include <stdio.h>
#include <stdlib.h>
int main() {
  int n = rand() % 100, g;
  do {
    scanf("%d", &g);
    if (g > n)
      printf("High\n");
    else if (g < n)
      printf("Low\n");
  } while (g != n);
  printf("Win");
  return 0;
}
