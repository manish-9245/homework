/*
 * Problem: Find maximum frequency element.
 */

#include <stdio.h>
int main() {
  int n, m = 0, e = 0, c;
  scanf("%d", &n);
  int a[n];
  for (int i = 0; i < n; i++)
    scanf("%d", &a[i]);
  for (int i = 0; i < n; i++) {
    c = 0;
    for (int j = 0; j < n; j++)
      if (a[i] == a[j])
        c++;
    if (c > m) {
      m = c;
      e = a[i];
    }
  }
  printf("%d", e);
  return 0;
}
