/*
 * Problem: Create contact management system.
 */

#include <stdio.h>
struct Contact {
  char n[50], p[15];
};
int main() {
  struct Contact c;
  scanf("%s%s", c.n, c.p);
  printf("Saved: %s - %s", c.n, c.p);
  return 0;
}
