/*
 * Problem: Create ATM simulation.
 */

#include <stdio.h>
int main() {
  int b = 1000, c, a;
  while (1) {
    scanf("%d", &c);
    if (c == 1)
      printf("Balance: %d\n", b);
    else if (c == 2) {
      scanf("%d", &a);
      b += a;
    } else if (c == 3) {
      scanf("%d", &a);
      b -= a;
    } else
      break;
  }
  return 0;
}
