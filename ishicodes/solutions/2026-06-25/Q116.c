/*
 * Problem: Create inventory management system.
 */

#include <stdio.h>
int main() {
  int item_q = 10, buy;
  scanf("%d", &buy);
  item_q += buy;
  printf("Stock: %d", item_q);
  return 0;
}
