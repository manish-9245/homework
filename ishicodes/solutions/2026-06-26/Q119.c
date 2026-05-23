/*
 * Problem: Create mini employee management system.
 */

#include <stdio.h>
int main() {
  char n[10][50];
  int i[10], c;
  scanf("%d", &c);
  if (c == 1) {
    scanf("%s%d", n[0], &i[0]);
  }
  printf("%s %d", n[0], i[0]);
  return 0;
}
