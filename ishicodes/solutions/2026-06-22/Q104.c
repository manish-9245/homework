/*
 * Problem: Create quiz application.
 */

#include <stdio.h>
int main() {
  int sc = 0, ans;
  printf("1+1=? 1)1 2)2\n");
  scanf("%d", &ans);
  if (ans == 2)
    sc++;
  printf("Score: %d", sc);
  return 0;
}
