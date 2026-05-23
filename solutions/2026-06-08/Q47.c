/*
 * Problem: Write function for Fibonacci.
 */

#include <stdio.h>
void printFib(int n) {
  int a = 0, b = 1, c;
  while (n--) {
    printf("%d ", a);
    c = a + b;
    a = b;
    b = c;
  }
}
int main() {
  int n;
  scanf("%d", &n);
  printFib(n);
  return 0;
}
