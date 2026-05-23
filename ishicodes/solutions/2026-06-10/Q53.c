/*
 * Problem: Linear search.
 */

#include <stdio.h>
int main() {
  int n, k, i;
  scanf("%d", &n);
  int a[n];
  for (i = 0; i < n; i++)
    scanf("%d", &a[i]);
  scanf("%d", &k);
  for (i = 0; i < n; i++)
    if (a[i] == k)
      break;
  printf(i == n ? "Not found" : "Found at %d", i);
  return 0;
}
