/*
 * Problem: Write function for Armstrong.
 */

#include <math.h>
#include <stdio.h>
int isArm(int n) {
  int s = 0, t = n, c = 0;
  while (t) {
    c++;
    t /= 10;
  }
  t = n;
  while (t) {
    s += pow(t % 10, c);
    t /= 10;
  }
  return s == n;
}
int main() {
  int n;
  scanf("%d", &n);
  printf(isArm(n) ? "Yes" : "No");
  return 0;
}
