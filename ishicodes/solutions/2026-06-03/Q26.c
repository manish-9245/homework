/*
 * Problem: Recursive Fibonacci.
 */

#include <stdio.h>
int fib(int n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }
int main() {
  int n;
  scanf("%d", &n);
  printf("%d", fib(n));
  return 0;
}
