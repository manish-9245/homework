/*
 * Problem: Create marksheet generation system.
 */

#include <stdio.h>
int main() {
  int m1, m2, m3, tot;
  scanf("%d%d%d", &m1, &m2, &m3);
  tot = m1 + m2 + m3;
  printf("Total: %d, %s", tot, tot > 120 ? "Pass" : "Fail");
  return 0;
}
