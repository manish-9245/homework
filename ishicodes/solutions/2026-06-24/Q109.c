/*
 * Problem: Create library management system.
 */

#include <stdio.h>
int main() {
  char book[50];
  int status = 1, c;
  scanf("%d", &c);
  if (c == 1 && status) {
    printf("Issued");
    status = 0;
  } else
    printf("Returned");
  return 0;
}
